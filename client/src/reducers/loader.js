import { CHARGE_LOADER_CONVERSATION, CHARGE_LOADER_MAILBOX, CHARGE_LOADER } from "src/actions/loader";
import { SAVE_USER, SAVE_REGISTER } from "src/actions/auth";
import { SEARCH_CANDIDATE, CANDIDATE_SEARCH_RESULT } from "src/actions/search";
import { CHANGE_ERROR_VALUE } from "src/actions/error";
import { SAVE_MESSAGES_PREVIEW } from "src/actions/messages"

export const initialState = {
  isLoading: false,
  isLoadingMailbox: false,
  isLoadingOneConversation: false,
};

const loader = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHARGE_LOADER:
      return {
        ...state,
        isLoading: true,
      };

    case CHARGE_LOADER_MAILBOX:
      return {
        ...state,
        isLoadingMailbox: true,
      };

    case CHARGE_LOADER_CONVERSATION:
      return {
        ...state,
        isLoadingOneConversation: true,
      };

    case SAVE_USER:
      return {
        ...state,
        isLoading: false,
        isLoadingMailbox: false,
        isLoadingOneConversation: false,
      };

    case SAVE_REGISTER:
      return {
        ...state,
        isLoading: false,
        isLoadingMailbox: false,
        isLoadingOneConversation: false,
      };

    case CHANGE_ERROR_VALUE:
      return {
        ...state,
        isLoading: false,
        isLoadingMailbox: false,
        isLoadingOneConversation: false,
      };

    case SEARCH_CANDIDATE:
      return {
        ...state,
        isLoading: false,
        isLoadingMailbox: false,
        isLoadingOneConversation: false,
      };

    case CANDIDATE_SEARCH_RESULT:
      return {
        ...state,
        isLoading: false,
        isLoadingMailbox: false,
        isLoadingOneConversation: false,
      };

    case SAVE_MESSAGES_PREVIEW: {
      return {
        ...state,
        isLoading: false,
        isLoadingMailbox: false,
        isLoadingOneConversation: false,
      };
    };
    default:
      return state;
  }
};

export default loader;
