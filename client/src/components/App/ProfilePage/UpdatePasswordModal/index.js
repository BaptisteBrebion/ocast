// == Import npm
import React from "react";
import PropTypes from "prop-types";

// == Import
import FieldText from 'src/containers/App/FieldText';
import ErrorMessage from 'src/containers/App/ErrorMessage';
import Message from 'src/components/App/Message';
// == Composant
const UpdatePasswordModal = ({
  newPassword,
  newPasswordConfirm,
  password,
  setUpdatePasswordModal,
  updatePassword,
  message,
  error,
  removeMessage,
}) => {

  const handleSubmitUpdatePassword = (event) => {
    event.preventDefault();
    // setUpdatePasswordModal(false)
    updatePassword();
  }

  const handleSetUpdatePassword = () => {
    removeMessage();
    setUpdatePasswordModal(false);
  }

  return (
    <div className="modal is-active">
      <div className="modal-background"></div>
      <div className="modal-card">
        <form
          action="submit"
          onSubmit={handleSubmitUpdatePassword}
        >
          <header className="modal-card-head">
            <p className="modal-card-title">Modification du mot de passe</p>
            <button onClick={handleSetUpdatePassword} className="delete" aria-label="close"></button>
          </header>

          {message && message !== null ?
            <div className="modal-card-body"><Message message={message} /></div> :

            <section className="modal-card-body">
              {error && error !== null && <ErrorMessage />}
              <FieldText
                htmlFor="password"
                name="password"
                isRequired
                type="password"
                placeholder="Mot de passe actuel"
                value={password}
              />
              <FieldText
                htmlFor="newPassword"
                name="newPassword"
                isRequired
                type="password"
                placeholder="Nouveau mot de passe"
                value={newPassword}
              />
              <FieldText
                htmlFor="newPasswordConfirm"
                name="newPasswordConfirm"
                isRequired
                type="password"
                placeholder="Confirmer le nouveau mot de passe"
                alue={newPasswordConfirm}
              />
              <button
                onClick={handleSubmitUpdatePassword}
                className="button secondary"
              >
                Valider
              </button>
            </section>
          }

          <footer className="modal-card-foot">
            <button
              type="button"
              className="button"
              onClick={handleSetUpdatePassword}
            >
              Quitter
            </button>
          </footer>
        </form>
      </div>
    </div>
  )
};

UpdatePasswordModal.propTypes = {
  // editNewPassword: PropTypes.func.isRequired,
};

UpdatePasswordModal.defaultProps = {
  newPassword: "",
  newPasswordConfirm: ""
};

// == Export
export default UpdatePasswordModal;
