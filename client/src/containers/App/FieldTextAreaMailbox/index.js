// == Import : npm
import { connect } from "react-redux";
import { changeNewMessageValue } from "src/actions/messages";

// == Import : local
import FieldTextArea from "src/components/App/FieldTextArea";

const mapStateToProps = state => ({
  value: state.messages.newMessage
});

const mapDispatchToProps = dispatch => {
  return {
    changeValue: value => {
      dispatch(changeNewMessageValue(value));
    }
  };
};

// == Export
export default connect(mapStateToProps, mapDispatchToProps)(FieldTextArea);
