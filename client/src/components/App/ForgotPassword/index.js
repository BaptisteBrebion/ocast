// == Import npm
import React from 'react';
import FieldText from 'src/containers/App/FieldText';
// == Import
// import './style.css';

// == Composant
const ForgotPassword = ({ setForgotPassword, email, sendForgotPassword }) => {

  const handleChangeForgotPassword = () => {
    setForgotPassword(false);
  }

  const handlesendForgotPassword = () => {
    sendForgotPassword();
    setForgotPassword(false)
  }

  return (
    <div className="modal is-active">
      <div className="modal-background"></div>
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">Mot de passe oublié</p>
          <button onClick={handleChangeForgotPassword} className="delete" aria-label="close"></button>
        </header>
        <section className="modal-card-body">
          <p className="is-size-7 has-text-danger">Saisissez votre email, un message vous sera envoyer avec le lien pour modifier votre mot de passe</p>
          <FieldText
            htmlFor="email"
            isRequired
            type="email"
            placeholder="Email"
            name="email"
            value={email}
          />
        </section>
        <footer className="modal-card-foot">
          <button onClick={handlesendForgotPassword} className="button is-success" >Valider</button>
          <button onClick={handleChangeForgotPassword} className="button">Quitter</button>
        </footer>
      </div>
    </div>
  )
};

// == Export
export default ForgotPassword;


