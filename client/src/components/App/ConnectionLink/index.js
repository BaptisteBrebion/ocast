// == Import npm
import React from 'react';
import { Link } from 'react-router-dom'

// == Import
import './style.css';

// == Composant
const ConnectionLink = () => (
  <Link to="/login" className="connection-link">
    Se connecter
  </Link>
);

// == Export
export default ConnectionLink;
