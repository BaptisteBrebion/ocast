// == Import npm
import React from "react";

// == Import
import "./style.css";

import InscriptionButton from "src/components/App/InscriptionButton";
import ConnectionLink from "src/components/App/ConnectionLink";
import ArrowUp from "src/components/App/Arrow/ArrowUp";
import ArrowDown from 'src/components/App/Arrow/ArrowDown';

// == Composant
const Conclusion = ({ isLogged }) => (
  <>
  {!isLogged && 
  <>
    <div className="container is-fullhd">
      <div className="conclusion">
      <ArrowDown />
        <h2 className="primary-text">Clap de fin, vous savez tout. Inscrivez-vous !</h2>
        <div className="conclusion-choice">
          <div>
            <h3 className="secondary-text">Je suis un artiste?</h3>
          </div>
          <div>
            <h3 className="secondary-text">Je cherche des artistes ?</h3>
          </div>
  
          <div className="inscription-btn">
            <InscriptionButton text="S'inscrire" />
          </div>
  
          <p>Vous êtes déjà membre O'cast ?</p>
          <div>
            <ConnectionLink className="conclusion-connection"/>
          </div>
        </div>
  
        <ArrowUp />
        <a className="back-up" href="#header">Revenir en haut</a>
      </div>
    </div>
  </>
  }
  </>

);

// == Export
export default Conclusion;
