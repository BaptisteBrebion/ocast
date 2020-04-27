const removePassword = (user) => {
  const {password, ...rest} = user;
  console.log("USER:", user)

  return rest;
};

module.exports = {
  removePassword
};