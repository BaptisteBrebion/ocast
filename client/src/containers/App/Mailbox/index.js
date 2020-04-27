// == Import : npm
import { connect } from "react-redux";
import {
  fetchMessagesPreview,
  fetchConversation,
  changeCurrentInterlocutor,
  deleteOneConversation,
} from "src/actions/messages";
import { chargeLoaderMailbox, chargeLoaderConversation } from "src/actions/loader";

// == Import : local
import Mailbox from "src/components/App/Mailbox";

const mapStateToProps = state => {
  return {
    isLoadingMessagesPreview: state.messages.isLoadingMessagesPreview,
    isLoadingCurrentConversation: state.messages.isLoadingCurrentConversation,
    messagesPreview: state.messages.messagesPreview,
    currentInterlocutor: state.messages.currentInterlocutor,
    currentConversation: state.messages.currentConversation,
    userId: state.auth.user.id,
    isLoadingMailbox: state.loader.isLoadingMailbox,
    isLoadingOneConversation: state.loader.isLoadingOneConversation,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    chargeLoaderConversation: () => {
      dispatch(chargeLoaderConversation());
    },

    fetchMessagesPreview: () => {
      dispatch(fetchMessagesPreview());
      dispatch(chargeLoaderMailbox());
    },
    fetchConversation: lastMessage => {
      dispatch(fetchConversation(lastMessage));
    },
    changeCurrentInterlocutor: interlocutor => {
      dispatch(changeCurrentInterlocutor(interlocutor));
    },
    deleteOneConversation: (interlocutor_id) => {
      dispatch(deleteOneConversation(interlocutor_id));
    },
  };
};

// == Export
export default connect(mapStateToProps, mapDispatchToProps)(Mailbox);
