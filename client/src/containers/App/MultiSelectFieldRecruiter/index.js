// == Import : npm
import { connect } from "react-redux";
import { changeSearchValue } from "src/actions/search";

// == Import : local
import MultiSelectField from "src/components/App/MultiSelectField";

const mapStateToProps = (state, ownProps) => ({
  value: state.search[ownProps.name]
});

const mapDispatchToProps = dispatch => {
  return {
    changeValue: (value, name) => {
      dispatch(changeSearchValue(value, name));
    }
  };
};

// == Export
export default connect(mapStateToProps, mapDispatchToProps)(MultiSelectField);
