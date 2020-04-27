import { connect } from 'react-redux';

// == Import : local
import SearchResult from 'src/components/App/SearchResult';

const mapStateToProps = (state) => {
  return {
    result: state.search.searchResult,
    message: state.search.message,
  }
};

const mapDispatchToProps = null

// == Export
export default connect(mapStateToProps, mapDispatchToProps)(SearchResult);