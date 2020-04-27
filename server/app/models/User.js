const sequelize = require('sequelize');
const DBConnection = require('../dbConnection');
const emailValidator = require('email-validator');
const Candidate = require('./Candidate');
const Recruiter = require('./Recruiter');

class User extends sequelize.Model {
  getPhotoUrl() {
    return this.photo_url;
  };

  setPhotoUrl(value) {
    if (typeof value !== 'string') {
      throw Error('Candidate.photo_url must be a string!');
    }
    this.photo_url = value;
  };

  getRole() {
    return this.role;
  }

  setRole(value) {
    if (typeof value !== 'string') {
      throw Error('User.role must be a string!');
    }
    this.role = value;
  }

  getSurname() {
    return this.surname;
  }

  setSurname(value) {
    if (typeof value !== 'string') {
      throw Error('User.surname must be a string!');
    }
    this.surname = value;
  }

  getFirstname() {
    return this.firstname;
  }

  setFirstname(value) {
    if (typeof value !== 'string') {
      throw Error('User.firstname must be a string!');
    }
    this.firstname = value;
  }

  getPhone() {
    return this.phone;
  }

  setPhone(value) {
    if (typeof value !== 'number') {
      throw Error('User.phone must be a number!');
    }
    this.phone = value;
  }

  getEmail() {
    return this.email;
  }

  setEmail(value) {
    // Pour vérifier que l'email est au bon format => email-validator
    if (!emailValidator.validate(value)) {
      throw Error('User.email must be a valid email!');
    }
    this.email = value;
  }

  getPassword() {
    return this.password;
  }

  setPassword(value) {
    if (typeof value !== 'string') {
      throw Error('User.password must be a string');
    } else {
      this.password = value;
    }
  }

  getWebsite() {
    return this.website;
  }

  setWebsite(value) {
    if (typeof value !== 'string') {
      throw Error('User.website must be a string');
    } else {
      this.website = value;
    }
  }

  getAdress() {
    return this.adress;
  }

  setAdress(value) {
    if (typeof value !== 'string') {
      throw Error('User.adress must be a string');
    } else {
      this.adress = value;
    }
  }

  getCity() {
    return this.city;
  }

  setCity(value) {
    if (typeof value !== 'string') {
      throw Error('User.city must be a string');
    } else {
      this.city = value;
    }
  }

  getCountry() {
    return this.country;
  }

  setCountry(value) {
    if (typeof value !== 'string') {
      throw Error('User.country must be a string');
    } else {
      this.country = value;
    }
  }
}

User.init(
  {
    photo_url: sequelize.TEXT,
    role: sequelize.TEXT,
    surname: sequelize.TEXT,
    firstname: sequelize.TEXT,
    phone: sequelize.INTEGER,
    email: sequelize.TEXT,
    password: sequelize.TEXT,
    website: sequelize.TEXT,
    adress: sequelize.TEXT,
    city: sequelize.TEXT,
    country: sequelize.TEXT
  },
  {
    sequelize: DBConnection,
    tableName: 'users',
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
);

module.exports = User;
