// == Import npm
import React from "react";
import PropTypes from "prop-types";
// == Import
import FieldTextArea from "src/containers/App/FieldTextAreaMailbox";
import "./styles.css";

// == Composant
const Form = ({
  value,
  sendMessageInConversation,
  buttonIsLoading,
  changeButtonIsLoading
}) => {
  const handleSubmit = event => {
    event.preventDefault();
    changeButtonIsLoading();
    sendMessageInConversation();
  };
  return (
    <form type="submit" className="message-form" onSubmit={handleSubmit}>
      <div className="send-message-input">
        <FieldTextArea
          htmlFor="new-message"
          name="new-message"
          isRequired
          type="text"
          value={value}
        />
      </div>
      <button
        className={
          buttonIsLoading
            ? "button send-message-mailbox primary-button send-message-button is-loading"
            : "button send-message-mailbox primary-button send-message-button"
        }
        type="submit"
      >
        Envoyer
      </button>
    </form>
  );
};

Form.propTypes = {
  value: PropTypes.string,
  sendMessageInConversation: PropTypes.func.isRequired,
  buttonIsLoading: PropTypes.bool.isRequired,
  changeButtonIsLoading: PropTypes.func.isRequired
};

// == Export
export default Form;
