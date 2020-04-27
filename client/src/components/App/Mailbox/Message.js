// == Import npm
import React from "react";
import {
  Link
} from 'react-router-dom'

// == Import
import PropTypes from "prop-types";

// == Composant
const Message = ({
  author,
  text,
  authorId,
  userId,
  datetime,
  message_id,
  deleteOneMessage,
  currentInterlocutor
}) => {
  const handleDeleteOneMessage = () => {
    deleteOneMessage(message_id);
  };

  return (
    <div
      className={
        authorId !== userId
          ? "box message message-interlocutor"
          : "box message message-user"
      }
    >
      <div className="message-title">
        {currentInterlocutor.role === "recruteur" && currentInterlocutor.id === authorId ? (
          <Link to={
            "/candidate/recruiter/" + authorId
          } className="author-name">{author}</Link>
        ) : <p className="author-name">{author}</p>}
        <p className="is-size-7">{datetime}</p>
      </div>
      <p>{text}</p>
      <button
        onClick={handleDeleteOneMessage}
        className="delete-button-message delete is-small"
      ></button>
    </div>
  );
};

Message.propTypes = {
  author: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  authorId: PropTypes.number.isRequired,
  userId: PropTypes.number.isRequired,
  datetime: PropTypes.string.isRequired
};

// == Export
export default Message;
