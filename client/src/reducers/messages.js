import {
  SAVE_MESSAGES_PREVIEW,
  CHANGE_NEW_MESSAGE_VALUE,
  CHANGE_CURRENT_INTERLOCUTOR,
  SAVE_CONVERSATION,
  FETCH_CONVERSATION,
  CHANGE_BUTTON_IS_LOADING
} from "src/actions/messages";
import { DISCONNECT } from "src/actions/auth";

export const initialState = {
  messagesPreview: [],
  isLoadingMessagesPreview: true,
  currentInterlocutor: null,
  currentConversation: null,
  isLoadingCurrentConversation: true,
  newMessage: "",
  buttonIsLoading: false
};

const messages = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_MESSAGES_PREVIEW: {
      state.messagesPreview.push(action.messagesPreview);
      return {
        ...state,
        messagesPreview: action.messagesPreview,
        isLoadingMessagesPreview: false
      };
    }

    case CHANGE_NEW_MESSAGE_VALUE: {
      return {
        ...state,
        newMessage: action.value
      };
    }

    case CHANGE_CURRENT_INTERLOCUTOR: {
      return {
        ...state,
        currentInterlocutor: action.interlocutor
      };
    }

    case SAVE_CONVERSATION: {
      return {
        ...state,
        currentConversation: action.conversation,
        isLoadingCurrentConversation: false
      };
    }

    case FETCH_CONVERSATION: {
      return {
        ...state,
        newMessage: "",
        buttonIsLoading: false,
        currentConversation: null,
        isLoadingCurrentConversation: true
      };
    }

    case CHANGE_BUTTON_IS_LOADING: {
      return {
        ...state,
        buttonIsLoading: true
      };
    }

    case DISCONNECT: {
      return {
        ...state,
        messagesPreview: [],
        currentInterlocutor: null,
        currentConversation: null
      };
    }

    default:
      return state;
  }
};

export default messages;
