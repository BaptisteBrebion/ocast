// == Import npm
import React from 'react';
// == Import
// import './style.css';

// == Composant
const Message = ({ message }) => (
  <div className="has-text-centered">
    <p className="primary-text is-size-5">{message}</p>
  </div>
);

// == Export
export default Message;