// == Import : npm
import { connect } from 'react-redux';
import { changeSearchValue } from 'src/actions/search'

// == Import : local
import SelectField from 'src/components/App/SelectField';

const mapStateToProps = (state, ownProps) => ({
  value: state.search[ownProps.name],
  // skillsValue: state.search.skills[ownProps.name]
});


const mapDispatchToProps = (dispatch) => {
 return ({
  changeValue: (value, name) => {
    dispatch(changeSearchValue(value, name));
  }
 })
};

// == Export
export default connect(mapStateToProps, mapDispatchToProps)(SelectField);