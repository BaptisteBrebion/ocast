import { CHANGE_IS_ACTIVE_MENU } from "src/actions/nav";
import { SAVE_MESSAGES_PREVIEW } from "src/actions/messages";

export const initialState = {
  isActiveMenu: false,
  hasNewMessage: false
};

const nav = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_IS_ACTIVE_MENU:
      return {
        ...state,
        isActiveMenu: !state.isActiveMenu
      };
    case SAVE_MESSAGES_PREVIEW: {
      const hasNewMessage = action.messagesPreview.some(messagePreview => {
        return (
          messagePreview.isRead === false &&
          messagePreview.receiver_id === action.currentUserId
        );
      });
      return {
        ...state,
        hasNewMessage: hasNewMessage
      };
    }

    default:
      return state;
  }
};

export default nav;
