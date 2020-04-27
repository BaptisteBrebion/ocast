import React from 'react';

import FieldText from 'src/containers/App/FieldText';
import Message from 'src/components/App/Message';
import './style.css';

const Reset = ({ newPassord, newPassordConfirm, message, resetPassword }) => {

  const handleFormSubmit = (event) => {
    event.preventDefault();
    resetPassword();
  }
  return (
    <form
      id="forgot-password-form"
      action="submit"
      onSubmit={handleFormSubmit}
      className="column is-half is-offset-one-quarter is-10-mobile is-offset-1-mobile"
    >

      <h2 className="is-size-2 is-size-3-mobile has-text-centered">
        Modifier mon mot de passe
      </h2>

      <FieldText
        htmlFor="newPassword"
        isRequired
        type="password"
        placeholder="Mot de Passe"
        name="newPassword"
        value={newPassord}
      />
      <FieldText
        name="newPasswordConfirm"
        htmlFor="newPasswordConfirm"
        isRequired
        type="password"
        placeholder="Confirmer votre mot de passe"
        value={newPassordConfirm}
      />

      <div className="field">
        <div className="control has-text-centered">
          <button type="submit" className="button secondary">
            Valider
        </button>
        </div>
      </div>
      {(message && message !== null) && <Message message={message} />}
    </form>
  );
}
export default Reset;