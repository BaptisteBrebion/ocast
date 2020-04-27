// == Import npm
import React from 'react';
import { useHistory } from 'react-router-dom';
// == Import
import FieldTextArea from 'src/containers/App/FieldTextArea';
import './style.css';
import Message from 'src/components/App/Message';
// == Composant
const ContactCandidate = ({ sendMessage, value, message }) => {

  let history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();
    sendMessage();
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="contact-form"
    >
      <h2 className="title is-size-2">Formulaire de contact</h2>
      <p className="has-text-danger is-size-6">Chers recruteurs, quelques conseils pour utiliser au mieux l' application.</p>
      <ul className="has-text-grey">
        <li>* Lors ce premier contact avec un candidat, vous devez expliquer dans les grandes lignes le projet pour lequel vous le contacter.</li>
        <li>* Vous vous engagez également à respecter la charte de bonne conduite.</li>
        <li>* L' artiste a le choix de vous re-contacter ou non.</li>
      </ul>
      {!message &&
        <>
          <FieldTextArea
            htmlFor="message_content"
            className="field"
            name="message_content"
            value={value}
            required
            placeholder="Ecrivez votre message ici"
          />
          <button className="button secondary" >Envoyer</button>
        </>
      }
      {(message && message !== null) && 
      <>
        <Message message={message} />
        <button
          className="primary-button"
          onClick={() => history.push("/recruiter/search")}
        >Retour à la recherche</button>
      </>
      }

    </form>
  )
};

// == Export
export default ContactCandidate;