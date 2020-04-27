const express = require('express');

const userController = require('./controllers/userController');
const candidateController = require('./controllers/candidateController');
const recruiterController = require('./controllers/recruiterController');
const messageController = require('./controllers/messageController');
const uploadController = require('./controllers/uploadController');
const {
  authenticatedCurrentUser,
  authenticated,
} = require('./middlewares/auth');

const router = express.Router();

// /!\ POUR CHAQUE ':ID', C' EST L' ID DU USER (user(id))

// * USER
router.get('/user/:id', userController.getCurrentUser);
router.post('/isLogged', userController.isLogged);
// création d'un user à l'inscription
router.post('/registration', userController.register);
// soumission à la connexion
router.post('/login', userController.login);
// deconnexion
router.get('/disconnect', userController.disconnect);
// supprimer un utilisateur
router.delete('/user/:id', authenticatedCurrentUser, userController.deleteUser);
// envoi mail mot de passe oublié
router.post('/user/forgotPassword', userController.passwordForgot);
// reinitialisation du password
router.patch('/user/:id/resetpassword', userController.resetPassword);
// changement mot de passe
router.patch('/user/:id/updatepassword', userController.updatePassword);

// * CANDIDATE
// recuperation de tous les candidats (pour le compteur)
router.get('/candidates', candidateController.getAllCandidates);
// lecture du profil candidat
router.get(
  '/user/candidate/:id',
  authenticatedCurrentUser,
  candidateController.getCandidateProfile
);
// modification d'un profil candidat
router.patch(
  '/user/candidate/:id',
  authenticatedCurrentUser,
  candidateController.modifyCandidateProfile
);

// * RECRUITER
// lecture du profil recruteur
router.get(
  '/user/:id/recruiter/:recruiterId',
  authenticatedCurrentUser,
  recruiterController.getRecruiterProfile
);
// consultation profil recruteur par un candidat
router.get(
  '/user/:id/recruiter/:recruiterId',
  authenticatedCurrentUser,
  recruiterController.getOneRecruiter
);

// modification d'un profil recruteur
router.patch(
  '/user/recruiter/:id',
  authenticatedCurrentUser,
  recruiterController.modifyRecruiterProfile
);
// recherche de candidats
router.get('/search', recruiterController.searchCandidateProfile);

// * MESSAGE
// sauvegarde d'un message en bdd
router.post('/send_message', authenticated, messageController.saveMessage);

// recuperation de tous les messages
router.get(
  '/user/:id/messages',
  authenticatedCurrentUser,
  messageController.getAllMessages
);
// récupération du dernier message de chaque conversation ET des interlocuteurs concernés
router.get(
  '/user/:id/lastmessages',
  authenticatedCurrentUser,
  messageController.getLastMessageOfAllInterlocutors
);
// recuperation d'une conversation
router.get(
  '/user/:id/conversation/:interlocutorId',
  authenticatedCurrentUser,
  messageController.getOneConversation
);
// suppression d'un message
router.delete(
  '/user/message/:message_id',
  authenticated,
  messageController.deleteMessage
);

router.delete(
  '/user/:id/conversation/:interlocutorId',
  authenticated,
  messageController.deleteOneConversation
);

router.post(
  '/upload/:id',
  authenticatedCurrentUser,
  uploadController.saveImage
);

module.exports = router;
