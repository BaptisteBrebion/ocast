// == Import npm
import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
// == Import
import "./style.css";

// == Composant
const InscriptionButton = ({ text, onClick }) => (
  <Link
    to="/registration"
    onClick={onClick}
    className="inscription-button button secondary"
  >
    <strong>{text}</strong>
  </Link>
);

InscriptionButton.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func
};
// == Export
export default InscriptionButton;
