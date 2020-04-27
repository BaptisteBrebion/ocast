const { Op } = require('sequelize');
const { User, Candidate } = require('../models/Relations');

const recruiterController = {
  getRecruiterProfile: async (request, response) => {
    try {
      // paramètre dynamique de la route
      const recruiterId = request.params.recruiterId;
      // je recupere un user (selon l'id) et j' inclus candidates et skills
      const recruiter = await User.findOne({
        where: {
          id: recruiterId,
          role: 'recruteur',
        },
        include: ['recruiters'],
      });
      // j'envoie un user + candidate + skill
      response.send(recruiter);
    } catch (error) {
      response.status(500).send(error);
    }
  },

  getOneRecruiter: async (request, response) => {
    try {
      // paramètre dynamique de la route
      const recruiterId = request.params.recruiterId;
      // je recupere un user (selon l'id) et j' inclus candidates et skills
      const recruiter = await User.findOne({
        where: {
          id: recruiterId,
          role: 'recruteur'
        },
        include: ['recruiters']
      });
      // j'envoie un user + candidate + skill
      response.send(recruiter);
    } catch (error) {
      response.status(500).send(error);
    }
  },

  modifyRecruiterProfile: async (request, response) => {
    try {
      // je trouve le bon recruiter via user
      const userId = request.params.id;
      const user = await User.findByPk(userId, {
        include: ['recruiters'],
      });

      // j' attribue les nouvelles valeurs aux champs
      user.surname = request.body.surname;
      user.firstname = request.body.firstname;
      user.phone = request.body.phone;
      user.email = request.body.email;
      user.password = request.body.password;
      user.website = request.body.website;
      user.adress = request.body.adress;
      user.city = request.body.city;
      user.country = request.body.country;
      // ici j' update l'objet recruiter associé à la table user
      user.recruiters.update({
        society: request.body.society,
        siret: request.body.siret,
        filmography: request.body.filmography,
      });
      // je sauvergarde mes changements
      const userUpdated = await user.save();
      response.send(userUpdated);
    } catch (error) {
      response.status(500).send(error);
    }
  },

  searchCandidateProfile: async (request, response) => {
    try {
      // je sors de request.query les datas qui auront un traitement préalable à la query et je deverse le reste
      const {
        age_min,
        age_max,
        size_min,
        size_max,
        page,
        ...rest
      } = request.query;
      console.log(request.query);
      // traiment de l'âge
      let findAge;
      // si tu as min_age alors tu me trouves tout ce que est supérieur
      if (age_min && !age_max) {
        findAge = { age: { [Op.gte]: parseInt(age_min) } };
      }
      // si tu n'as pas min_age mais que tu as max_age tu me trouves tout ce qui est inferieur
      if (!age_min && age_max) {
        findAge = { age: { [Op.lte]: parseInt(age_max) } };
      }
      // si tu as min_age et max_age tu me trouve tout ce qui est entre
      if (age_min && age_max) {
        findAge = {
          age: { [Op.between]: [parseInt(age_min), parseInt(age_max)] },
        };
      }
      // traitement de la taille (idem age)
      let findSize;
      // nb: passer la size en INT dans bdd et parseInt la size
      if (size_min && !size_max) {
        findSize = { size: { [Op.gte]: size_min } };
      }

      if (!size_min && size_max) {
        findSize = { size: { [Op.lte]: size_max } };
      }

      if (size_min && size_max) {
        findSize = { size: { [Op.between]: [size_min, size_max] } };
      }

      // perfect match
      const candidateResults = await User.findAll({
        where: {
          role: 'candidat',
        },
        include: [
          {
            model: Candidate,
            as: 'candidates',
            where: {
              [Op.and]: {
                // // je deverse les datas qui n'ont pas besoin de traitement
                ...rest,
                // je deverse l' age selon les conditions remplies
                ...findAge,
                // je deverse la taille selon les conditions remplies
                ...findSize,
              },
            },
          },
        ],
        // ordre de date de  mise à jour du profil
        order: [
          ['updated_at', 'ASC'],
          ['id', 'ASC'],
        ],
        // offset: page,
        // limit: 12,
      });

      // proposition de résultats qui pourrait interessé si pas de perfect match
      const proximityResults = await User.findAll({
        where: {
          role: 'candidat',
        },
        include: [
          {
            model: Candidate,
            as: 'candidates',
            where: {
              [Op.or]: {
                ...rest,
                ...findAge,
                ...findSize,
              },
            },
          },
        ],
        order: [
          ['updated_at', 'ASC'],
          ['id', 'ASC'],
        ],
        // offset: page,
        // limit: 12,
      });

      // si perfect match tu me renvoies les datas sinon tu me renvoies proximityResults et un message
      // const finalResults = candidateResults.length > 0 ? {candidateResults: candidateResults,offset: page, message: "perfect match"} : { proximityResults: proximityResults,offset: page, message: 'Pas de "perfect match". Voici des résultats qui pourraient vous interesser' };
      let finalResults;
      if (candidateResults.length > 0) {
        finalResults = {
          candidateResults: candidateResults,
          // offset: page,
          message: 'perfect match',
        };
      } else if (proximityResults.length > 0) {
        finalResults = {
          proximityResults: proximityResults,
          // offset: page,
          message:
            'Pas de "perfect match". Voici des résultats qui pourraient vous interesser',
        };
      } else {
        finalResults = { message: 'Aucun match, modifiez vos critères' };
      }

      console.log(finalResults);
      response.send(finalResults);
    } catch (error) {
      response.status(500).send(error);
    }
  },
};

module.exports = recruiterController;
