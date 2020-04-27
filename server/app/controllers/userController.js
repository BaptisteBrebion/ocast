const { User, Recruiter, Candidate } = require('../models/Relations');
const emailValidator = require('email-validator');
const bcrypt = require('bcrypt');

const { removePassword } = require('../utils/cleaner');
const { passwordForgotEmail } = require('../utils/mailer/mail_templates');
const sendMail = require('../utils/mailer/sender'); 

const userController = {
  getCurrentUser: async (request, response) => {
    try {
      const id = request.params.id
      const currentUser = User.findOne({
        where: {
          id,
        },
        include: ["candidates", "recruiters"],
      })
      response.send(currentUser)

    } catch (error) {
      response.send({ logged: false })
    }
  },
  // methode d'inscription
  register: async (request, response) => {
    try {
      // Verifications des champs 
      for (let field in request.body) {
        if (request.body[field] === '') {
          return response.send({ formData: request.body, error: `Le champ ${field} est obligatoire.` });
        }
      };

      // Vérification du format email
      let validEmail = emailValidator.validate(request.body.email);
      if (!validEmail) {
        delete request.body.email;
        return response.send({ formData: request.body, error: "Cet email n'est pas valide" });
      }

      // Vérification si le password confirmé est bien le même
      if (request.body.password !== request.body.passwordConfirm) {
        return response.send({ formData: request.body, error: "La confirmation de votre mot de passe a échoué" });
      }

      // encryptage du password
      const encryptedPassword = await bcrypt.hash(
        request.body.password,
        10
      );

      // requête de creation d'un user (s'il existe déjà response.send(error))
      const [user, created] = await User.findOrCreate({
        where: {
          email: request.body.email
        },
        defaults: {
          role: request.body.role,
          surname: request.body.surname,
          firstname: request.body.firstname,
          // phone: request.body.phone,
          password: encryptedPassword,
          // website: request.body.website,
          // adress: request.body.adress,
          // city: request.body.city,
          // country: request.body.country,
        }
      });
      // created en reference au [user, created], s'il est deja created
      if (!created) {
        return response.send({
          formData: request.body,
          error: "Compte déjà existant"
        });
      }

      // si c'est un recruteur save dans la table recruiters
      if (user.role === "recruteur") {
        await Recruiter.create({
          users_id: user.id
        });
      }

      // si c'est un candidat save dans la table candidates
      if (user.role === "candidat") {
        await Candidate.create({
          users_id: user.id
        });
      }
      if (created) {
        return response.send(removePassword(user.dataValues));
      }

    } catch (error) {
      response.status(500).send(error);
    };
  },
  // méthode connexion
  login: async (request, response) => {
    try {
      // je recherche l'utilisateur qui a l'id saisi dans le body
      const user = await User.findOne({
        where: {
          email: request.body.email
        },
        include: ['candidates', 'recruiters']
      });
      if (!user) {
        return response.send({ error: "Cet email n'existe pas" });
      }
      const passwordExpected = user.getPassword();

      const validPassword = await bcrypt.compare(request.body.password, passwordExpected);

      if (!validPassword) {
        return response.send({ error: "Ce n'est pas le bon mot de passe" });
      }

      request.session.user = user.dataValues;
      delete request.session.user.password;
      console.log("USER: ", removePassword(user.dataValues))
      return response.send({ user: removePassword(user.dataValues), logged: true });

    } catch (error) {
      response.status(500).send(error);
    };
  },

  isLogged: async (request, response) => {
    try {
      const id = request.session.user.id;
      console.log('ID: ', id)
      const user = await User.findOne({
        where: {
          id,
        },
        include: ['candidates', 'recruiters']
      });
      console.log('USER: ', user)
      response.send({ logged: true, user: removePassword(user.dataValues) })

    } catch (error) {
      response.send({ logged: false })
    }
  },

  disconnect: async (request, response) => {
    delete request.session.user;
    return await response.send({ logged: false });
  },

  deleteUser: async (request, response) => {
    try {
      const userId = request.params.id;
      let user = await User.findByPk(userId);
      await user.destroy();
      response.send('OK');

    } catch (error) {
      response.status(500).send(error);
    };
  },

  passwordForgot: async(request, response) => {
    try {
      const user = await User.findOne({
        where: {
          email: request.body.email
        }
      });
      console.log("USER: ", user)
      if(!user) {
        response.send({ error: "Cet email n'existe pas" })
      }

      const email = passwordForgotEmail({ user });
      console.log("EMAIL: ", email)
      // j'envoie le mail en lui passant la const email et l' email du receiver
      const sendEmailResult = await sendMail({ email, to: user.email });

      console.log("SEND: ", sendEmailResult)
      response.send(sendEmailResult);

    } catch (error) {
      response.status(500).send(error);
    }
  },

  updatePassword: async (request, response) => {
    try {
      // récupération de l'user
      const id = request.params.id
      const currentUser = await User.findByPk(id, {
        include: ["candidates", "recruiters"]
      });

      // récupération du mot de passe courant
      const passwordExpected = currentUser.getPassword();

      const validPassword = await bcrypt.compare(request.body.password, passwordExpected);

      if (!validPassword) {
        return response.send({ error: "Ce n'est pas le bon mot de passe" });
      }

      // vérification si le password confirmé est bien le même
      if (request.body.newPassword !== request.body.newPasswordConfirm) {
        return response.send({ formData: request.body, error: "La confirmation de votre nouveau mot de passe a échoué" });
      }

      // encryptage du password
      const encryptedPassword = await bcrypt.hash(
        request.body.newPassword,
        10
      );
      
      // je sauvegarde le nouveau mot de passe
      currentUser.password =  encryptedPassword;
      const updatedUserPassword = await currentUser.save();

      response.send({user: removePassword(updatedUserPassword.dataValues), message: "Votre nouveau mot de passe a bien été modifié"})
    } catch (error) {
      response.status(500).send(error);
    }
  },

  resetPassword: async(request, response) => {
    try {
      const id = request.params.id
      const user = await User.findByPk(id);
      if (request.body.newPassword !== request.body.newPasswordConfirm) {
        return response.send({ formData: request.body, error: "La confirmation de votre nouveau mot de passe a échoué" });
      }

      // encryptage du password
      const encryptedPassword = await bcrypt.hash(
        request.body.newPassword,
        10
      );

      user.password =  encryptedPassword;
      const updatedUserPassword = await user.save();

      response.send({user: removePassword(updatedUserPassword.dataValues), message: "Votre mot de passe a bien été réinitialisé, veuillez vous connecter"})
    } catch (error) {
      response.status(500).send(error);
    }
  }
};

module.exports = userController;