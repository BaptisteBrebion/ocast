// == Import : npm
import { connect } from 'react-redux';
import { searchCandidate } from 'src/actions/search'
import { chargeLoader } from "src/actions/loader";

// == Import : local
import SearchPage from 'src/components/App/SearchPage';

const mapStateToProps = (state) => ({
  age_min: state.auth.user.age_min,
  age_max: state.auth.user.age_max,
  size_min: state.auth.user.size_min,
  size_max: state.auth.user.size_max,
  isLoading: state.loader.isLoading,
});

const mapDispatchToProps = (dispatch) => ({
  chargeLoader: () => {
    dispatch(chargeLoader());
  },
  searchCandidate: () => {
    dispatch(searchCandidate());
  }
});

// == Export
export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);
