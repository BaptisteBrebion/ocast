/* eslint-disable jsx-a11y/label-has-associated-control */
// == Import npm
import React from "react";
import PropTypes from "prop-types";
import { Redirect, Link } from "react-router-dom";
// == Import
import FieldText from "src/containers/App/FieldText";
import ErrorMessage from "src/containers/App/ErrorMessage";

import "./style.css";

const InscriptionPage = ({
  changeValue,
  registerUser,
  firstname,
  surname,
  email,
  password,
  passwordConfirm,
  error,
  isRegister,
  removeErrorMessage,
  isLoading,
  chargeLoader,
}) => {

  const handleSubmit = (event) => {
    event.preventDefault();
    removeErrorMessage();
    registerUser();
    chargeLoader();
  };

  const handleChangeCandidate = (event) => {
    changeValue(event.target.value, event.target.name)
  }

  const handleChangeRecruiter = (event) => {
    changeValue(event.target.value, event.target.name)
  }

  return (
    <div className="inscription-page columns">

      {/* loader de l'inscription */}
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
          Inscription en cours
        </span>
      </div>

      <form
        onSubmit={handleSubmit}
        className="column is-half is-offset-one-quarter is-10-mobile is-offset-1-mobile"
      >
        <h1 className="is-size-1 is-size-3-mobile has-text-centered">
          Créer mon compte
        </h1>

        {(error && error !== null) && <ErrorMessage />}
        {error == null && isRegister && <Redirect push path="/registration" to="/login" />}

        <div className="field has-text-black">
          <div className="radio-container control has-text-centered is-size-3">
            <label htmlFor="candidate" className="radio-container-content role-radio">
              <input
                onChange={handleChangeCandidate}
                type="radio"
                name="role"
                id="candidate"
                value="candidat"
                required
              />
              Artiste
            </label>
            <label htmlFor="recruiter" className="radio-container-content role-radio">
              <input
                onChange={handleChangeRecruiter}
                type="radio"
                name="role"
                id="recruiter"
                value="recruteur"
                required
              />
              Recruteur
            </label>
          </div>
        </div>
        <FieldText
          htmlFor="surname"
          name="surname"
          isRequired
          type="text"
          placeholder="Nom"
          value={surname}
        />
        <FieldText
          htmlFor="firstname"
          name="firstname"
          isRequired
          type="text"
          placeholder="Prénom"
          value={firstname}
        />
        <FieldText
          htmlFor="email"
          name="email"
          isRequired
          type="email"
          placeholder="Email"
          value={email}
        />
        <FieldText
          htmlFor="password"
          name="password"
          isRequired
          type="password"
          placeholder="Mot de passe"
          value={password}
        />
        <FieldText
          htmlFor="passwordConfirm"
          name="passwordConfirm"
          isRequired
          type="password"
          placeholder="Confirmer le mot de passe"
          value={passwordConfirm}
        />
        <div className="field">
          <div className="control">
            <label className="checkbox">
              <input type="checkbox" required />J' accepte{" "}
              <Link className="cgu-link" to="/cgu">les conditions générales d'utilisation</Link>
            </label>
          </div>
        </div>
        <div className="field">
          <div className="control has-text-centered">
            <button className="button secondary">
              S'inscrire
            </button>
          </div>
        </div>
      </form>

    </div>

  );
};

InscriptionPage.propTypes = {
  changeValue: PropTypes.func.isRequired,
  registerUser: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  chargeLoader: PropTypes.func.isRequired,
};

InscriptionPage.defaultProps = {
  firstname: "",
  surname: "",
  email: "",
  password: "",
  passwordConfirm: ""
};
// == Export
export default InscriptionPage;
