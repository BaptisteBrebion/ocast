import { connect } from "react-redux";
// == Import : local
import Form from "src/components/App/Mailbox/Form";
import {
  changeButtonIsLoading,
  sendMessageInConversation
} from "src/actions/messages";

const mapStateToProps = (state, ownProps) => ({
  value: state.auth.user[ownProps.name],
  buttonIsLoading: state.messages.buttonIsLoading
});

const mapDispatchToProps = dispatch => ({
  sendMessageInConversation: () => {
    dispatch(sendMessageInConversation());
  },
  changeButtonIsLoading: () => {
    dispatch(changeButtonIsLoading());
  }
});
// == Export
export default connect(mapStateToProps, mapDispatchToProps)(Form);
