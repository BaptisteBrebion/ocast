// == Import npm
import React from "react";

// == Import
import "./style.css";

// == Import
import InscriptionButton from "src/components/App/InscriptionButton";
import ConnectionLink from "src/components/App/ConnectionLink";
import Counter from "src/containers/App/Counter";

// == Composant
const Introduction = ({ isLogged }) => {
  return (
    <header id="header" className="container is-fullhd">
      <div className="introduction has-text-white has-text-right is-size-5">
        <Counter />
        <div>
          <p>Créez un compte gratuit</p>
        </div>
        <div>
          <p>Échangez avec les acteurs</p>
        </div>
        <div>
          <p>Castez le bon profil !</p>
        </div>

        {!isLogged &&
          <>
            <div className="inscription-btn">
              <InscriptionButton text="S'inscrire" />
            </div>

            <div className="introduction-connexion">
              <p>Vous êtes déjà membre O'cast ?</p>

              <div className="connexion-link">
                <ConnectionLink />
              </div>
            </div>
          </>
        }

      </div>
    </header>
  )
};

// == Export
export default Introduction;
