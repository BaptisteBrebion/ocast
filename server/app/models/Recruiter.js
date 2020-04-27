const sequelize = require('sequelize');
const DBConnection = require('../dbConnection');

class Recruiter extends sequelize.Model {

  getSociety() {
    return this.society;
  };

  setSociety(value) {
    if (typeof value !== 'string') {
      throw Error('recruiter.society must be a string!');
    }
    this.society = value;
  };

  getSiret() {
    return this.siret;
  };

  setSiret(value) {
    if (typeof value !== 'number') {
      throw Error('recruiter.siret must be a number!');
    }
    this.siret = value;
  };

  getFilmography() {
    return this.filmography;
  };

  setFilmography(value) {
    if (typeof value !== 'string') {
      throw Error('recruiter.filmography must be a string!');
    }
    this.filmography = value;
  };
};

Recruiter.init(
  {
    society: sequelize.TEXT,
    siret: sequelize.INTEGER,
    filmography: sequelize.TEXT
  },
  {
    sequelize: DBConnection,
    tableName: "recruiters",
    createdAt: "created_at",
    updatedAt: "updated_at"
  }
);


module.exports = Recruiter;