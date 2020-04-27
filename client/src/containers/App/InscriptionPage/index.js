// == Import : npm
import { connect } from "react-redux";
import { registerUser, changeValue } from "src/actions/auth";
import { removeError } from "src/actions/error";
import { chargeLoader } from "src/actions/loader";

// == Import : local
import InscriptionPage from "src/components/App/InscriptionPage";

const mapStateToProps = (state) => ({
  surname: state.auth.user.surname,
  firstname: state.auth.user.firstname,
  email: state.auth.user.email,
  password: state.auth.user.password,
  passwordConfirm: state.auth.user.passwordConfirm,
  error: state.error.message,
  isRegister: state.auth.isRegister,
  isLoading: state.loader.isLoading,
});

const mapDispatchToProps = dispatch => {
  return {
    chargeLoader: () => {
      dispatch(chargeLoader());
    },
    changeValue: (value, name) => {
      dispatch(changeValue(value, name));
    },
    registerUser: () => {
      dispatch(registerUser());
    },
    removeErrorMessage: () => {
      dispatch(removeError());
    },
  };
};

// == Export
export default connect(mapStateToProps, mapDispatchToProps)(InscriptionPage);
