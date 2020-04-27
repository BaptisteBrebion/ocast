// == Import npm
import React from 'react';
// == Import
// import './style.css';

// == Composant
const ErrorMessage = ({ message }) => (
  <div className="has-text-centered">
    <p className="has-text-danger is-size-6">{message}</p>
  </div>
);

// == Export
export default ErrorMessage;
