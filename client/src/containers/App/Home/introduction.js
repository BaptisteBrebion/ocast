// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import Introduction from 'src/components/App/Home/Introduction';

const mapStateToProps = (state) => ({
  isLogged: state.auth.isLogged,
});

const mapDispatchToProps = null;

// == Export
export default connect(mapStateToProps, mapDispatchToProps)(Introduction);