/* eslint-disable jsx-a11y/label-has-associated-control */
// == Import npm
import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import PropTypes from "prop-types";
// == Import
import ErrorMessage from "src/containers/App/ErrorMessage";
import FieldText from "src/containers/App/FieldText";
import ForgotPassword from "src/components/App/ForgotPassword";
import "./style.css";
// == Composant

const LoginPage = ({
  login,
  email,
  password,
  error,
  role,
  isLogged,
  removeErrorMessage,
  sendForgotPassword,
  isLoading,
  chargeLoader,
}) => {
  const [forgotPassword, setForgotPassword] = useState(false);

  const handleFormSubmit = event => {
    event.preventDefault();
    removeErrorMessage();
    login();
    chargeLoader();
  };

  const handleChangeForgotPassword = () => {
    // changeForgotPassword()
    setForgotPassword(true);
  };
  return (
    <>
      {forgotPassword && (
        <ForgotPassword
          setForgotPassword={setForgotPassword}
          email={email}
          sendForgotPassword={sendForgotPassword}
        />
      )}

      {/* loader de la connexion */}
      <div
        className={
          isLoading
            ? "pageloader is-active is-warning"
            : "pageloader is-warning"
        }
      >
        <span
          className="title"
        >
          Connexion en cours
        </span>
      </div>

      <form
        id="login-page"
        action="submit"
        onSubmit={handleFormSubmit}
        className="column is-half is-offset-one-quarter is-10-mobile is-offset-1-mobile"
      >
        {error && error !== null && <ErrorMessage />}
        {isLogged && role === "candidat" && (
          <Redirect push path="/login" to="/candidate" />
        )}
        {isLogged && role === "recruteur" && (
          <Redirect push path="/login" to="/recruiter/search" />
        )}

        <h2 className="is-size-2 is-size-3-mobile has-text-centered">
          Me connecter à mon compte
        </h2>

        <FieldText
          htmlFor="email"
          isRequired
          type="email"
          placeholder="Email"
          name="email"
          value={email}
        />
        <FieldText
          name="password"
          htmlFor="password"
          isRequired
          type="password"
          placeholder="Mot de passe"
          value={password}
        />

        <button
          className="password primary-text"
          onClick={handleChangeForgotPassword}
        >
          Mot de passe oublié
        </button>

        <div className="field">
          <div className="control has-text-centered">
            <button type="submit" className="button secondary">
              Se connecter
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

LoginPage.propTypes = {
  login: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string,
  error: PropTypes.string,
  isLoading: PropTypes.bool.isRequired,
  chargeLoader: PropTypes.func.isRequired,
}
// == Export
export default LoginPage;
