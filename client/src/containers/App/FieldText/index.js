// == Import : npm
import { connect } from "react-redux";
import { changeValue } from "src/actions/auth";

// == Import : local
import FieldText from "src/components/App/FieldText";

const mapStateToProps = (state, ownProps) => ({
  value: state.auth.user[ownProps.name]
});

const mapDispatchToProps = dispatch => {
  return {
    changeValue: (value, name) => {
      dispatch(changeValue(value, name));
    }
  };
};
// == Export
export default connect(mapStateToProps, mapDispatchToProps)(FieldText);
