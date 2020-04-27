// == Import npm
import React, { useEffect, useRef } from "react";
// == Import
import Message from "./Message";

// == Composant
const Messages = ({
  currentInterlocutor,
  currentConversation,
  userId,
  deleteOneMessage,
  seeRecruiterProfile
}) => {
  const messagesElement = useRef(null);
  useEffect(() => {
    messagesElement.current.scrollTop = messagesElement.current.scrollHeight;
  }, [currentConversation]);
  return (
    <div className="messages" ref={messagesElement}>
      {currentConversation.map(message => (
        <Message
          key={message.id}
          text={message.text}
          author={
            message.author_id === userId
              ? "Vous"
              : currentInterlocutor.firstname +
                " " +
                currentInterlocutor.surname
          }
          seeRecruiterProfile={seeRecruiterProfile}
          authorId={message.author_id}
          userId={userId}
          datetime={message.datetime}
          message_id={message.id}
          deleteOneMessage={deleteOneMessage}
          currentInterlocutor = {
            currentInterlocutor
          }
        />
      ))}
    </div>
  );
};

// == Export
export default Messages;
