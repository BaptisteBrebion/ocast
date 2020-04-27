// == Import npm
import React from 'react';
import { Link } from 'react-router-dom';
// == Import
import './style.css';

// == Composant
const Footer = () => (
  <div className="footer">
    <div className="content has-text-centered">
      <Link to="/cgu">Conditions générales d' utilisation</Link>
      <a href="mailto:maudevartore@gmail.com?subject=Contact O'cast" target="_blank" >Nous contacter</a>
    </div>
  </div>
);

// == Export
export default Footer;
