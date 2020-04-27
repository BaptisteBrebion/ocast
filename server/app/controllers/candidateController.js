const { User, Candidate } = require("../models/Relations");

const candidateController = {
  // recupérer un utilisateur candidat
  getCandidateProfile: async (request, response) => {
    try {
      // paramètre dynamique de la route
      const userId = request.params.id;
      // je recupere un user (selon l'id) et j' inclus candidates et skills
      const candidate = await User.findByPk(userId, {
        include: ["candidates"]
      });
      // j'envoie un user + candidate + skill
      response.send(candidate);
    } catch (error) {
      response.status(500).send(error);
    }
  },
  // recupérer tous les utilisateurs candidats pour les compter
  getAllCandidates: async (request, response) => {
    try {
      const candidates = await User.findAndCountAll({
        where: {
          role: "candidat"
        },
      });
      response.send(candidates);
    } catch (error) {
      response.status(500).send(error)
    }
  },

  // modifier un profil utilisateur candidat
  modifyCandidateProfile: async (request, response) => {
    try {
      const userId = request.params.id;
      const user = await User.findByPk(userId, {
        include: ["candidates"]
        // include: ["skills"] 
      });

      user.surname = request.body.surname;
      user.firstname = request.body.firstname;
      user.phone = request.body.phone;
      user.email = request.body.email;
      user.website = request.body.website;
      user.adress = request.body.adress;
      user.city = request.body.city;
      user.country = request.body.country;
      // là, j' update l' objet candidate présent dans le user
      user.candidates.update({
        age: request.body.age,
        gender: request.body.gender,
        availability: request.body.availability,
        handicap: request.body.handicap,
        language: request.body.language,
        experience: request.body.experience,
        training: request.body.training,
        hair: request.body.hair,
        eyes: request.body.eyes,
        size: request.body.size,
        corpulence: request.body.corpulence,
        distinctive_sign: request.body.distinctive_sign,
        ethnicity: request.body.ethnicity,
        skills: request.body.skills,
      });

      const userUpdated = await user.save();
      response.send(userUpdated);
    } catch (error) {
      response.status(500).send(error);
    }
  }
};

module.exports = candidateController;
