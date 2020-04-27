// == Import npm
import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Link, useHistory } from "react-router-dom";
// == Import
import "./style.css";
import InscriptionButton from "src/components/App/InscriptionButton";

// == Composant
const Nav = ({
  isActiveMenu,
  changeIsActiveMenu,
  isLogged,
  disconnect,
  firstname,
  role,
  hasNewMessage,
}) => {
  const handleClickMenu = () => {
    changeIsActiveMenu();
  };

  let history = useHistory();
  const handleDisconnect = () => {
    disconnect();
    history.push('/');
  };

  const handleGoHome = () => {
    history.push('/')
  }
  return (
    <div
      className={
        isActiveMenu
          ? "navbar primary is-transparent navbar-mobile is-fixed-top"
          : "navbar primary is-transparent is-fixed-top"
      }
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        {/* eslint-disable-next-line jsx-a11y/interactive-supports-focus */}
        <a
          role="button"
          onClick={handleClickMenu}
          className={
            isActiveMenu
              ? "navbar-burger burger is-active"
              : "navbar-burger burger"
          }
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span className="secondary-text" aria-hidden="true" />
          <span className="secondary-text" aria-hidden="true" />
          <span className="secondary-text" aria-hidden="true" />
        </a>

        <style>
          @import url('https://fonts.googleapis.com/css2?family=Monoton&display=swap');
        </style>
        
        <a onClick={handleGoHome} className="navbar-item has-text-white">
          <h1>O'cast</h1>
        </a>
      </div>

      <div
        id="navbarBasicExample"
        className={
          isActiveMenu ? "navbar-menu primary is-active" : "navbar-menu primary"
        }
      >
        <div className="navbar-end">
          {isLogged && (
            <>
              <h2 className="say-hello secondary-text is-italic">
                Bonjour {firstname}
              </h2>
              {role === "candidat" && (
                <Fragment>
                  {/* <Link to="/" className="navbar-item">
                    Messagerie
                  </Link> */}
                  <Link to="/candidate" className="navbar-item has-text-white">
                    Éditer mon profil
                  </Link>
                  <Link
                    to="/candidate/messages"
                    className="navbar-item has-text-white"
                  >
                    Messagerie
                    {hasNewMessage && <div className="notif"></div>}
                  </Link>
                </Fragment>
              )}
              {role === "recruteur" && (
                <Fragment>
                  {/* <Link to="/" className="navbar-item">
                    Messagerie
                  </Link> */}
                  <Link
                    to="/recruiter/search"
                    className="navbar-item has-text-white"
                  >
                    Faire une recherche
                  </Link>
                  <Link
                    to="/recruiter/messages"
                    className="navbar-item has-text-white"
                  >
                    Messagerie
                    {hasNewMessage && <div className="notif"></div>}
                  </Link>
                  <Link to="/recruiter" className="navbar-item has-text-white">
                    Éditer mon profil
                  </Link>
                </Fragment>
              )}
            </>
          )}
          {!isLogged && (
            <>
              <div className="navbar-item">
                <InscriptionButton text="S'inscrire" />
              </div>
              <Link to="/login" className="navbar-item has-text-white">
                Se connecter
              </Link>
              <Link to="/team" className="navbar-item has-text-white">
                Team/Technos
              </Link>
            </>
          )}
          {isActiveMenu && (
            <>
              <Link to="/cgu" className="navbar-item has-text-white">
                CGU
              </Link>
              <Link to="/team" className="navbar-item has-text-white">
                Team/Technos
              </Link>
            </>
          )}

          <a
            href="mailto:maudevartore@gmail.com?subject=Contact O'cast"
            target="_blank"
            className="navbar-item has-text-white"
          >
            Nous contacter
          </a>
          {isLogged && (
            <a
              onClick={handleDisconnect}
              className="navbar-item has-text-white"
            >
              Déconnexion
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

Nav.propTypes = {
  isActiveMenu: PropTypes.bool.isRequired,
  changeIsActiveMenu: PropTypes.func.isRequired,
  isLogged: PropTypes.bool.isRequired,
  disconnect: PropTypes.func.isRequired,
  firstname: PropTypes.string,
  role: PropTypes.string,
  hasNewMessage: PropTypes.bool.isRequired
};

Nav.defaultProps = {
  firstname: "",
  role: ""
};

// == Export
export default Nav;
