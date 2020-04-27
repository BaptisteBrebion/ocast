// == Import : npm
import { connect } from "react-redux";

// == Import : local
import MessagesMailbox from "src/components/App/Mailbox/Messages";
import { deleteOneMessage } from "src/actions/messages";
import {
  seeRecruiterProfile
} from 'src/actions/candidate'

const mapStateToProps = state => {
  return {
    currentInterlocutor: state.messages.currentInterlocutor,
    currentConversation: state.messages.currentConversation,
    userId: state.auth.user.id
  };
};

const mapDispatchToProps = (dispatch) => ({
  deleteOneMessage: (message_id) => {
    dispatch(deleteOneMessage(message_id));
  },
  seeRecruiterProfile: (recruiterId) => {
    dispatch(seeRecruiterProfile(recruiterId));
  }
});

// == Export
export default connect(mapStateToProps, mapDispatchToProps)(MessagesMailbox);

