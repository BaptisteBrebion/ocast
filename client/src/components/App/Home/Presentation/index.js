/* eslint-disable max-len */
// == Import npm
import React from 'react';
import "bulma-divider"

// == Import
import './style.css';

// == Composant
const Presentation = () => (
  <div className="container is-fullhd">
    <div className="presentation">
      <section className="section one">
        <h2>Moderniser et simplifier le recrutement d'artistes</h2>
        <div className="columns">
          <p className="column">
            J'effectue une recherche personnalisée en fonction des critères souhaités.
          </p>
          <div className="is-divider-vertical" data-content="<>"></div>
          <p className="column">
            Je fais défiler les profils d'artistes et je sélectionne ceux qui m'intéressent.
          </p>
          <div className="is-divider-vertical" data-content="<>"></div>
          <p className="column">
            Je les contacte en deux temps trois mouvements !
          </p>
        </div>
      </section>

      <div className="is-divider" data-content="O'cast"></div>

      <section className="section two">
        <h2>Nous vous accompagnons pour créer un environnement de travail sécurisé et bienveillant</h2>
        <div className="columns">
          <p className="column">
            Identités des artistes et des recruteurs vérifiées.
          </p>
          <div className="is-divider-vertical" data-content="<>"></div>
          <p className="column">
            Mise à jour régulière éxigée des profils artistes.
          </p>
          <div className="is-divider-vertical" data-content="<>"></div>
          <p className="column">
            Informations personnelles 100% protégées et jamais délivrées sans votre accord.
          </p>
          <div className="is-divider-vertical" data-content="<>"></div>
          <p className="column">
            Signalement possible des faux profils et des demandes malveillantes, garantissant l'exclusion définitive des profils concernés.
          </p>
        </div>
      </section>
    </div>
  </div>
);

// == Export
export default Presentation;
