// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import Conclusion from 'src/components/App/Home/Conclusion';

const mapStateToProps = (state) => ({
  isLogged: state.auth.isLogged,
});

const mapDispatchToProps = null;

// == Export
export default connect(mapStateToProps, mapDispatchToProps)(Conclusion);