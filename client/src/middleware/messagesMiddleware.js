import axios from "axios";
import {
  fetchMessagesPreview,
  FETCH_MESSAGES_PREVIEW,
  saveMessagesPreview,
  fetchConversation,
  FETCH_CONVERSATION,
  saveConversation,
  SEND_MESSAGE_IN_CONVERSATION,
  DELETE_ONE_MESSAGE,
  DELETE_ONE_CONVERSATION,
} from "src/actions/messages";

const messagesMiddleware = store => next => action => {
  switch (action.type) {
    case FETCH_MESSAGES_PREVIEW: {
      const state = store.getState();
      const id = state.auth.user.id;
      axios
        .get(`http://localhost:3000/user/${id}/lastmessages`, {
          withCredentials: true
        })
        .then(response => {
          store.dispatch(saveMessagesPreview(response.data, id));
        })
        .catch(error => {
          console.error(error);
        });
      next(action);
      break;
    }

    case FETCH_CONVERSATION: {
      const state = store.getState();
      const id = state.auth.user.id;
      const interlocutorId = state.messages.currentInterlocutor.id;
      axios
        .get(
          `http://localhost:3000/user/${id}/conversation/${interlocutorId}`,
          {
            withCredentials: true
          }
        )
        .then(response => {
          store.dispatch(saveConversation(response.data));
          store.dispatch(fetchMessagesPreview());
        })
        .catch(error => {
          console.error(error);
        });
      next(action);
      break;
    }

    case SEND_MESSAGE_IN_CONVERSATION: {
      const state = store.getState();
      const author_id = state.auth.user.id;
      const receiver_id = state.messages.currentInterlocutor.id;
      const text = state.messages.newMessage;
      axios
        .post(
          "http://localhost:3000/send_message",
          {
            author_id,
            receiver_id,
            text
          },
          {
            withCredentials: true
          }
        )
        .then(response => {
          store.dispatch(fetchConversation());
        })
        .catch(error => {
          console.log(error);
        });
      next(action);
      break;
    }

    case DELETE_ONE_MESSAGE: {
      const currentMessage = action.message_id;
      console.log(currentMessage);
      axios
        .delete(
          `http://localhost:3000/user/message/${currentMessage}`,
          {
            withCredentials: true
          }
        )
        .then(response => {
          store.dispatch(fetchConversation());
        })
        .catch(error => {
          console.log(error);
        });
      next(action);
      break;
    };

    case DELETE_ONE_CONVERSATION: {
      const state = store.getState();
      const currentUser = state.auth.user.id;
      const interlocutorId = action.interlocutor_id;
      axios
        .delete(
          `http://localhost:3000/user/${currentUser}/conversation/${interlocutorId}`,
          {
            withCredentials: true
          }
        )
        .then(response => {
          store.dispatch(fetchConversation());
        })
        .catch(error => {
          console.log(error);
        });
      next(action);
      break;
    }

    default:
      next(action);
  }
};

export default messagesMiddleware;
