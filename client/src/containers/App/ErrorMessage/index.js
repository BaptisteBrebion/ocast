import { connect } from 'react-redux';
// == Import : local
import ErrorMessage from "src/components/App/ErrorMessage";

const mapStateToProps = (state) => ({
  message: state.error.message
});

const mapDispatchToProps = null;
// == Export
export default connect(mapStateToProps, mapDispatchToProps)(ErrorMessage);