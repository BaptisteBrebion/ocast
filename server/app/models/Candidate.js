const sequelize = require('sequelize');
const DBConnection = require('../dbConnection');

class Candidate extends sequelize.Model {

  getGenderl() {
    return this.gender;
  }

  setGender(value) {
    if (typeof value !== 'string') {
      throw Error('Candidate.gender must be a string!');
    }
    this.gender = value;
  }

  getAge() {
    return this.age;
  }

  setAge(value) {
    if (typeof value !== 'number') {
      throw Error('Candidate.age must be a number!');
    }
    this.age = value;
  }

  getAvailability() {
    return this.availability;
  }

  setAvailability(value) {
    if (typeof value !== 'boolean') {
      throw Error('Candidate.availability must be a boolean!');
    }
    this.availability = value;
  }

  getHandicap() {
    return this.handicap;
  }

  setHandicap(value) {
    if (typeof value !== 'string') {
      throw Error('Candidate.handicap must be a string!');
    }
    this.handicap = value;
  }

  getLanguage() {
    return this.language;
  }

  setLanguage(value) {
    if (typeof value !== 'string') {
      throw Error('Candidate.language must be a valid string!');
    }
    this.language = value;
  }

  getExperience() {
    return this.experience;
  }

  setExperience(value) {
    if (typeof value !== 'string') {
      throw Error('Candidate.experience must be a string');
    } else {
      this.experience = value;
    }
  }

  getTraining() {
    return this.training;
  }

  setTraining(value) {
    if (typeof value !== 'string') {
      throw Error('Candidate.training must be a string');
    } else {
      this.training = value;
    }
  }

  getHair() {
    return this.hair;
  }

  setHair(value) {
    if (typeof value !== 'string') {
      throw Error('Candidate.hair must be a string');
    } else {
      this.hair = value;
    }
  }

  getEyes() {
    return this.eyes;
  }

  setEyes(value) {
    if (typeof value !== 'string') {
      throw Error('Candidate.eyes must be a string');
    } else {
      this.eyes = value;
    }
  }

  getSize() {
    return this.size;
  }

  setSize(value) {
    if (typeof value !== 'string') {
      throw Error('Candidate.size must be a string');
    } else {
      this.size = value;
    }
  }

  getCorpulence() {
    return this.corpulence;
  }

  setCorpulence(value) {
    if (typeof value !== 'string') {
      throw Error('Candidate.corpulence must be a string');
    } else {
      this.corpulence = value;
    }
  }

  getDistinctiveSign() {
    return this.distinctive_sign;
  }

  setDistinctiveSign(value) {
    if (typeof value !== 'string') {
      throw Error('Candidate.distinctive_sign must be a string');
    } else {
      this.distinctive_sign = value;
    }
  }

  getEthnicity() {
    return this.ethnicity;
  }

  setEthnicity(value) {
    if (typeof value !== 'string') {
      throw Error('Candidate.ethnicity must be a string');
    } else {
      this.ethnicity = value;
    }
  }

  getSkills() {
    return this.skills;
  }

  setSkills() {
    if (typeof value !== 'array') {
      throw Error('Candidate.skills must be a string');
    } else {
      this.skills = value;
    }
  }
}

Candidate.init(
  {
    gender: sequelize.TEXT,
    age: sequelize.INTEGER,
    availability: sequelize.BOOLEAN,
    handicap: sequelize.TEXT,
    language: sequelize.TEXT,
    experience: sequelize.TEXT,
    training: sequelize.TEXT,
    hair: sequelize.TEXT,
    eyes: sequelize.TEXT,
    size: sequelize.TEXT,
    corpulence: sequelize.TEXT,
    distinctive_sign: sequelize.TEXT,
    ethnicity: sequelize.TEXT,
    skills: sequelize.ARRAY(sequelize.TEXT)
  },
  {
    sequelize: DBConnection,
    tableName: 'candidates',
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
);

module.exports = Candidate;
