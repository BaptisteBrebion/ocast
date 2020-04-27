export const FETCH_MESSAGES_PREVIEW = "FETCH_MESSAGES_PREVIEW";
export const SAVE_MESSAGES_PREVIEW = "SAVE_MESSAGES_PREVIEW";
export const FETCH_CONVERSATION = "FETCH_CONVERSATION";
export const CHANGE_NEW_MESSAGE_VALUE = "CHANGE_NEW_MESSAGE_VALUE";
export const CHANGE_CURRENT_INTERLOCUTOR = "CHANGE_CURRENT_INTERLOCUTOR";
export const SAVE_CONVERSATION = "SAVE_CONVERSATION";
export const CHANGE_BUTTON_IS_LOADING = "CHANGE_BUTTON_IS_LOADING";
export const SEND_MESSAGE_IN_CONVERSATION = "SEND_MESSAGE_IN_CONVERSATION";
export const DELETE_ONE_MESSAGE = "DELETE_ONE_MESSAGE";
export const DELETE_ONE_CONVERSATION = "DELETE_ONE_CONVERSATION";

export const sendMessageInConversation = () => {
  return {
    type: SEND_MESSAGE_IN_CONVERSATION
  };
};

export const fetchMessagesPreview = () => ({
  type: FETCH_MESSAGES_PREVIEW
});

export const saveMessagesPreview = (messagesPreview, currentUserId) => {
  return {
    type: SAVE_MESSAGES_PREVIEW,
    messagesPreview,
    currentUserId
  };
};

export const fetchConversation = index => ({
  type: FETCH_CONVERSATION,
  index
});

export const saveConversation = conversation => {
  return {
    type: SAVE_CONVERSATION,
    conversation
  };
};

export const changeNewMessageValue = value => {
  return {
    type: CHANGE_NEW_MESSAGE_VALUE,
    value
  };
};

export const changeCurrentInterlocutor = interlocutor => {
  return {
    type: CHANGE_CURRENT_INTERLOCUTOR,
    interlocutor
  };
};

export const changeButtonIsLoading = () => {
  return {
    type: CHANGE_BUTTON_IS_LOADING
  };
};

export const deleteOneMessage = (message_id) => ({
  type: DELETE_ONE_MESSAGE,
  message_id,
});

export const deleteOneConversation = (interlocutor_id) => ({
  type: DELETE_ONE_CONVERSATION,
  interlocutor_id,
})
