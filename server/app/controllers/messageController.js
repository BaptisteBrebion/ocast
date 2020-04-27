const { Message, User } = require('../models/Relations');
const sendMail = require('../utils/mailer/sender');
const { contactEmail } = require('../utils/mailer/mail_templates');
const { Op } = require('sequelize');
var moment = require('moment-timezone');

const messageController = {
  // sauvegarde du message en bdd + envoi du mail avec sparkpost
  saveMessage: async (request, response) => {
    try {
      // je destructure les datas qui viennent du client
      const { author_id, receiver_id, text } = request.body;
      const isRead = false;
      // je sauvegarde en bdd le nouveau message
      const newMessage = await Message.create({
        author_id,
        receiver_id,
        text,
        isRead
      });

      // je récupère mon user author et mon user receiver pour la méthode d'envoi de mail
      const author = await User.findByPk(author_id);
      const receiver = await User.findByPk(receiver_id);

      // je vérifie que le user author existe et que l'author_id correspond bien à l'utilisateur courant, sinon 404
      if (
        !author ||
        (request.session.user && request.session.user.id != author_id)
      ) {
        return response.status(404).send('utilisateur introuvable');
      }

      // je vérifie que le user receiver existe bien sinon 404
      if (!receiver) {
        return response.status(404).send('destinataire introuvable');
      }

      // si oui je construits le mail, je lui passe l'author le receiver et le text
      const email = contactEmail({ author, receiver, message: text });
      // j'envoie le mail en lui passant la const email et l' email du receiver
      const sendEmailResult = await sendMail({ email, to: receiver.email });

      response.send({
        newMessage,
        sendEmailResult,
        message: 'Votre message a bien été envoyé'
      });
    } catch (error) {
      response.status(500).send(error);
    }
  },

  // récupérer tous les messages de l'utilisateur courant
  getAllMessages: async (request, response) => {
    try {
      const userId = request.params.id;
      // je cherche tous les messages ou le user courant (request.params) est soit author soit receiver
      const messages = await Message.findAll({
        where: {
          [Op.or]: [{ author_id: userId }, { receiver_id: userId }]
        }
      });
      response.send(messages);
    } catch (error) {
      response.status(500).send(error);
    }
  },

  getLastMessageOfAllInterlocutors: async (request, response) => {
    try {
      const userId = request.params.id;
      // je cherche tous les messages ou le user courant (request.params) est soit author soit receiver
      const messages = await Message.findAll({
        where: {
          [Op.or]: [{ author_id: userId }, { receiver_id: userId }]
        },
        order: [['created_at', 'ASC']]
      });

      // 1 -- je stocke dans un tableau TOUS les ids des interlocuteurs de TOUS les messages
      const ids = [];
      messages.map(message => ids.push(message.author_id, message.receiver_id));
      // 2 -- je stocke dans un tableau les id des interlocuteurs du user courant
      // pour cela, je ne garde que ceux qui sont DIFFÉRENTS de l'id du user courant
      const interlocutorsId = ids.filter(id => id !== parseInt(userId));
      // 3 -- je supprime toutes les valeurs en double
      // pour cela j'utilise une fonction utilitaire
      // qui supprime toutes les valeurs en double dans un tableau
      const unique = (value, index, self) => {
        return self.indexOf(value) === index;
      };
      const uniqueInterlocutorsId = interlocutorsId.filter(unique);

      // 4 -- je vais chercher les interlocuteurs du user grace à leur id
      // en mapant sur le tableau précédemment créé

      const lastMessages = [];

      await Promise.all(
        uniqueInterlocutorsId.map(async uniqueInterlocutorId => {
          const lastMessage = await Message.findAll({
            // 1 --- je cherche tous les messages ou le user courant (request.params) est soit author soit receiver
            where: {
              [Op.and]: [
                // SELECT * FROM Message WHERE author_id = userId OR author_id = otherUserId;
                {
                  [Op.or]: [
                    {
                      author_id: userId
                    },
                    {
                      author_id: uniqueInterlocutorId
                    }
                  ]
                },
                // SELECT * FROM Message WHERE receiver_id = userId OR receiver_id = otherUserId;
                {
                  [Op.or]: [
                    {
                      receiver_id: userId
                    },
                    {
                      receiver_id: uniqueInterlocutorId
                    }
                  ]
                }
              ]
            },
            // 2 --- je trie par ordre descendant
            order: [['created_at', 'DESC']],
            // 3 --- je garde seulement le premier, qui est donc le dernier en date
            limit: 1
          });
          const interlocutor = await User.findAll({
            where: {
              id: uniqueInterlocutorId
            }
          });

          lastMessage[0].dataValues.datetime = moment(lastMessage[0].created_at)
            .tz('Europe/Paris')
            .add(2, 'hour')
            .locale('fr')
            .calendar();

          lastMessage[0].dataValues.text = `${lastMessage[0].dataValues.text.slice(
            0,
            15
          )}...`;

          lastMessage[0].dataValues.interlocutor = interlocutor[0].dataValues;
          lastMessages.push(lastMessage[0]);
        })
      );

      await Promise.all(
        lastMessages.sort(function(a, b) {
          const firstLastMessage = new Date(a.created_at).getTime();
          const secondLastMessage = new Date(b.created_at).getTime();
          return secondLastMessage - firstLastMessage;
        })
      );
      response.send(lastMessages);
    } catch (error) {
      response.status(500).send(error);
    }
  },

  // recuperer tous les messages entre l' utilisateur courant et un autre utilisateur (en appelera ca conversation)
  getOneConversation: async (request, response) => {
    try {
      const userId = request.params.id;
      // je recupère du front l' id de l'autre participant de la conversation
      const otherUserId = request.params.interlocutorId;
      // je recupère tous les messages ou l'utilisateur courant est l'author et l' autre participant est receiver et inversement
      const conversation = await Message.findAndCountAll({
        where: {
          [Op.and]: [
            // SELECT * FROM Message WHERE author_id = userId OR author_id = otherUserId;
            { [Op.or]: [{ author_id: userId }, { author_id: otherUserId }] },
            // SELECT * FROM Message WHERE receiver_id = userId OR receiver_id = otherUserId;
            { [Op.or]: [{ receiver_id: userId }, { receiver_id: otherUserId }] }
          ]
        },
        // 2 --- je trie par ordre ascendant
        order: [['created_at', 'ASC']]
      });
      const updatedConversation = await Promise.all(
        conversation.rows.map(async message => {
          message.dataValues.datetime = moment(message.created_at)
            .tz('Europe/Paris')
            .add(2, 'hour')
            .locale('fr')
            .calendar();
          if (message.receiver_id.toString() === userId) {
            message.isRead = true;
            const updatedMessage = await message.save();
            return updatedMessage;
          } else {
            return message;
          }
        })
      );
      response.send(updatedConversation);
    } catch (error) {
      response.status(500).send(error);
    }
  },

  // suppression d' une conversation
  deleteOneConversation: async (request, response) => {
    try {
      const userId = request.params.id;
      const interlocutorId = request.params.interlocutorId;
      console.log('user_id: ', userId);
      console.log('INTERLOCUTOR: ', interlocutorId);

      const conversation = await Message.destroy({
        where: {
          author_id: {
            [Op.or]: [userId, interlocutorId]
          },
          receiver_id: {
            [Op.or]: [userId, interlocutorId]
          }
        }
      });

      // // je filtre le tableau de resultats pour checker que l'utilisateur courant est dans chaque message soit l'author soit le receiver (sécurité)
      // const checkAuthorId = conversation.filter(
      //   message => (message.author_id = user_id)
      // );
      // const checkReceiverId = conversation.filter(
      //   message => (message.receiver_id = user_id)
      // );
      // // et je donne les conditions avant la suppression
      // if (
      //   request.session.user.id === checkAuthorId ||
      //   request.session.user.id === checkReceiverId
      // ) {
      //   conversation.destroy();
      //   return response.send({
      //     message: 'la conversation a bien été supprimé'
      //   });
      // } else {
      //   return response.send({
      //     message: "vous n'êtes pas autorisé a supprimer cette conversation"
      //   });
      // }
      response.send({
        message: 'la conversation a bien été supprimé'
      });
    } catch (error) {
      response.status(500).send(error);
    }
  },

  // suppression d'un message
  deleteMessage: async (request, response) => {
    try {
      const messageId = request.params.message_id;
      const message = await Message.findByPk(messageId);

      if (
        request.session.user.id === message.author_id ||
        request.session.user.id === message.receiver_id
      ) {
        await message.destroy();
        return response.send({ message: 'le message a bien été supprimé' });
      } else {
        return response.send({
          message: "vous n'êtes pas autorisé a supprimer ce message"
        });
      }
    } catch (error) {
      response.status(500).send(error);
    }
  }
};

module.exports = messageController;
