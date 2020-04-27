import { connect } from "react-redux";
import { changeValue } from "src/actions/auth";

// == Import : local
import MultiSelectField from "src/components/App/MultiSelectField";

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
export default connect(mapStateToProps, mapDispatchToProps)(MultiSelectField);
