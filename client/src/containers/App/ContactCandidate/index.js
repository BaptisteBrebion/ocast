import { connect } from "react-redux";
// == Import : local
import ContactCandidate from "src/components/App/ContactCandidate";
import { sendMessage } from "src/actions/auth";

const mapStateToProps = (state, ownProps) => {
  return {
    value: state.auth.user[ownProps.name],
    message: state.auth.message
  };
};

const mapDispatchToProps = dispatch => {
  return {
    sendMessage: () => {
      dispatch(sendMessage());
    }
  };
};
// == Export
export default connect(mapStateToProps, mapDispatchToProps)(ContactCandidate);
