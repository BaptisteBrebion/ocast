// == Import : npm
import { connect } from 'react-redux';
import { login, sendForgotPassword } from 'src/actions/auth';
import { removeError } from 'src/actions/error';
import { chargeLoader } from "src/actions/loader";

// == Import : local
import LoginPage from 'src/components/App/LoginPage';

const mapStateToProps = (state) => ({
  email: state.auth.user.email,
  password: state.auth.user.password,
  error: state.error.message,
  role: state.auth.user.role,
  isLogged: state.auth.isLogged,
  user: state.auth.user,
  isLoading: state.loader.isLoading,
});

const mapDispatchToProps = (dispatch) => ({
  login: () => {
    dispatch(login());
  },
  removeErrorMessage: () => {
    dispatch(removeError());
  },
  sendForgotPassword: () => {
    dispatch(sendForgotPassword());
  },
  chargeLoader: () => {
    dispatch(chargeLoader());
  },
});

// == Export
export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
