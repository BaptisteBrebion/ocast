const User = require('./User');
const Candidate = require('./Candidate');
const Recruiter = require('./Recruiter');
const Message = require('./Message');


User.hasOne(Candidate, {
  as: "candidates",
  foreignKey: 'users_id',
});
Candidate.belongsTo(User, {
  as: "candidates",
  foreignKey: 'users_id',
});

User.hasOne(Recruiter, {
  as: "recruiters",
  foreignKey: 'users_id',
});
Recruiter.belongsTo(User, {
  as: "recruiters",
  foreignKey: 'users_id',
});

// Candidate.belongsToMany(Skill, {
//   as: "skills",
//   through: "candidates_has_skills",
//   foreignKey: "candidates_id",
//   otherKey: "skills_id",
//   timestamps: false
// });
// Skill.belongsToMany(Candidate, {
//   as: "candidates",
//   through: "candidates_has_skills",
//   foreignKey: "skills_id",
//   otherKey: "candidates_id",
//   timestamps: false
// });

Message.belongsTo(User, {
  as: "author",
  foreignKey: "author_id",
});
User.hasMany(Message, {
  as: "author",
  foreignKey: "author_id",
});

Message.belongsTo(User, {
  as: "receiver",
  foreignKey: "receiver_id",
});
User.hasMany(Message, {
  as: "receiver",
  foreignKey: "receiver_id",
});

module.exports = { User, Candidate, Recruiter, Message};