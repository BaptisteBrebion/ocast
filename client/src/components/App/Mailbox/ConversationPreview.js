// == Import npm
import React from "react";
import PropTypes from "prop-types";
// == Import

// == Composant
const ConversationPreview = ({
  interlocutor,
  lastMessage,
  interlocutor_id,
  lastMessageAuthor,
  deleteOneConversation,
  datetime,
  notif
}) => {
  const handleDeleteConversation = () => {
    let confirm = window.confirm(
      `Souhaitez-vous vraiment supprimer la conversation avec ${interlocutor}?`
    );
    if (confirm) {
      deleteOneConversation(interlocutor_id);
    }
  };
  return (
    <div className="conversation-preview media">
      <figure className="media-left">
        <div className="image is-64x64">
          {notif && <div className="message-preview-notif"></div>}
          <img src="https://bulma.io/images/placeholders/128x128.png" />
        </div>
      </figure>
      <div className="media-content message-preview">
        <div className="message-preview-interlocutor">
          <h3 className="is-size-5 has-text-weight-bold">{interlocutor}</h3>
        </div>
        <button
          onClick={handleDeleteConversation}
          className="delete-button-conversation delete is-medium"
        ></button>
        <p className="is-size-7">{datetime}</p>
        <p>{`${lastMessageAuthor} : ${lastMessage}`}</p>
      </div>
    </div>
  );
};

ConversationPreview.propTypes = {
  interlocutor: PropTypes.string.isRequired,
  lastMessage: PropTypes.string.isRequired,
  lastMessageAuthor: PropTypes.string.isRequired,
  datetime: PropTypes.string.isRequired,
  notif: PropTypes.bool.isRequired
};

// == Export
export default ConversationPreview;
