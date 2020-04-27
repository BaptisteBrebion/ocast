const contactEmail = ({ author, receiver, message }) => {
  return {
    subject: 'Proposition JOB',
    html: `
      <html>
      <body>
        <h1>Bonjour ${receiver.firstname}</h1>
        <p>${author.firstname} souhaite prendre contact avec vous</p>
        <p>${message}</p>
        <a href="http://localhost:8080/login">Voir le message</a>
        <p>L'équipe O'Cast</p>
        <a href="mailto:maude@studio550.io?subject=Signaler%20un%20abus%20de%20utilisateur%20${author.id}">signaler un abus</a>
      </body>
      </html>
    `
  }
};

const passwordForgotEmail = ({user}) => {
  return {
    subject: 'mot de passe oublié',
    html: `
    <html>
    <body>
      <h1>Bonjour ${user.firstname}</h1>
      <p>Vous avez oublié votre mot de passe, pour le réinitialiser, cliquez sur le lien "Réinitialiser mon mot de passe".</p>
      
      <a href="http://localhost:8080/user/${user.id}/reset_password">Réinitialiser mon mot de passe</a>
      <p>L'équipe O'Cast</p>
    </body>
    </html>
  `
  };
}

module.exports = {
  contactEmail,
  passwordForgotEmail
};