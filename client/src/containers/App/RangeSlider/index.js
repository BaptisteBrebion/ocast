import { connect } from 'react-redux';
import { changeSearchValue } from 'src/actions/search'

// == Import : local
import RangeSlider from 'src/components/App/RangeSlider';

const mapStateToProps = (state, ownProps) => ({
  value: state.search[ownProps.name],
});


const mapDispatchToProps = (dispatch) => {
 return ({
  changeSearchValue: (value, name) => {
    dispatch(changeSearchValue(value, name));
  }
 })
};

// == Export
export default connect(mapStateToProps, mapDispatchToProps)(RangeSlider);