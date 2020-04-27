// == Import npm
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
// == Import
import ConversationPreview from "./ConversationPreview";
import ConversationDetail from "./ConversationDetail";
import "./styles.css";
// == Composant
const Mailbox = ({
  isLoadingMessagesPreview,
  isLoadingCurrentConversation,
  fetchMessagesPreview,
  messagesPreview,
  fetchConversation,
  currentInterlocutor,
  changeCurrentInterlocutor,
  userId,
  deleteOneConversation,
  isLoadingMailbox,
  isLoadingOneConversation,
  chargeLoaderConversation
}) => {
  useEffect(fetchMessagesPreview, []);

  const [messagesPreviewOpened, setMessagesPreviewOpened] = useState(true);
  const [smallScreen, setSmallScreen] = useState(false);

  const screenSize = () => {
    if (window.innerWidth <= 500) {
      setMessagesPreviewOpened(true);
      setSmallScreen(true);
    } else {
      setMessagesPreviewOpened(true);
      setSmallScreen(false);
    }
  };

  const handleToogleMessagesPreview = () => {
    setMessagesPreviewOpened(!messagesPreviewOpened);
  };

  useEffect(() => {
    screenSize();
    window.addEventListener("resize", screenSize);

    return () => window.removeEventListener("resize", screenSize);
  }, []);

  const handleClick = () => {
    if (smallScreen) {
      setMessagesPreviewOpened(false);
    }
  };

  return (
    <div className="has-text-centered mailbox">
      {/* loader de la messagerie */}
      <div
        className={
          isLoadingMailbox
            ? "pageloader is-active is-warning"
            : "pageloader is-warning"
        }
      >
        <span className="title">Chargement de la messagerie</span>
      </div>

      {/* loader d'une conversation */}
      <div
        className={
          isLoadingOneConversation
            ? "pageloader is-active is-warning"
            : "pageloader is-warning"
        }
      >
        <span className="title">Chargement de la conversation</span>
      </div>

      <div className="header">
        <h1 className="is-size-2 title">Mes messages</h1>
        {smallScreen && (
          <button
            className="mailbox--messagesPreview-button secondary"
            onClick={handleToogleMessagesPreview}
          >
            <span className="is-size-6">
              {messagesPreviewOpened
                ? "Cacher les conversations"
                : "Voir toutes les conversations"}
            </span>
            <svg style={{ width: "24px", height: "24px" }} viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M3,17V19H9V17H3M3,5V7H13V5H3M13,21V19H21V17H13V15H11V21H13M7,9V11H3V13H7V15H9V9H7M21,13V11H11V13H21M15,9H17V7H21V5H17V3H15V9Z"
              />
            </svg>
          </button>
        )}
      </div>
      <div className="columns">
        {messagesPreviewOpened
          ? !isLoadingMessagesPreview && (
              <div
                id="all-conversations"
                className="column is-half panel all-conversations"
              >
                {messagesPreview.map(messagePreview => (
                  <a
                    onClick={() => {
                      handleClick();
                      changeCurrentInterlocutor(messagePreview.interlocutor);
                      const index = messagesPreview.indexOf(messagePreview);
                      fetchConversation(index);
                      chargeLoaderConversation();
                    }}
                    className={
                      currentInterlocutor !== null &&
                      messagePreview.interlocutor.id === currentInterlocutor.id
                        ? "panel-block selected"
                        : "panel-block"
                    }
                    key={messagePreview.interlocutor.id}
                  >
                    <ConversationPreview
                      key={messagePreview.interlocutor.id}
                      interlocutor={
                        messagePreview.interlocutor.firstname +
                        " " +
                        messagePreview.interlocutor.surname
                      }
                      datetime={messagePreview.datetime}
                      lastMessage={messagePreview.text}
                      lastMessageAuthor={
                        messagePreview.author_id !== userId
                          ? messagePreview.interlocutor.firstname +
                            " " +
                            messagePreview.interlocutor.surname
                          : "Vous"
                      }
                      notif={
                        !messagePreview.isRead &&
                        messagePreview.receiver_id === userId
                          ? true
                          : false
                      }
                      deleteOneConversation={deleteOneConversation}
                      interlocutor_id={messagePreview.interlocutor.id}
                    />
                  </a>
                ))}
              </div>
            )
          : ""}
        {currentInterlocutor === null && (
          <p>Vous n'avez pas sélectionné de conversation.</p>
        )}
        {!smallScreen || !messagesPreviewOpened ? (
          !isLoadingCurrentConversation && currentInterlocutor !== null ? (
            <div id="conversation" className="column is-half panel">
              <ConversationDetail
                interlocutor={
                  currentInterlocutor.firstname +
                  " " +
                  currentInterlocutor.surname
                }
                interlocutorId={currentInterlocutor.id}
              />
            </div>
          ) : (
            ""
          )
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

Mailbox.propTypes = {
  messagesPreview: PropTypes.array.isRequired,
  fetchMessagesPreview: PropTypes.func.isRequired,
  isLoadingCurrentConversation: PropTypes.bool.isRequired,
  isLoadingMessagesPreview: PropTypes.bool.isRequired,
  fetchConversation: PropTypes.func.isRequired,
  changeCurrentInterlocutor: PropTypes.func.isRequired,
  userId: PropTypes.number.isRequired,
  isLoadingMailbox: PropTypes.bool.isRequired,
  isLoadingOneConversation: PropTypes.bool.isRequired,
  chargeLoaderConversation: PropTypes.func.isRequired
};

// == Export
export default Mailbox;
