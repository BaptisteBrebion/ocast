// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import Reset from 'src/components/App/ForgotPassword/Reset';
import { resetPassword } from 'src/actions/auth';

const mapStateToProps = (state) => ({
  newPassword: state.auth.user.newPassword,
  newPasswordConfirm: state.auth.user.newPasswordConfirm,
  message: state.auth.message,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  resetPassword: () => {
    dispatch(resetPassword(ownProps.match.params.slug));
  }
})

// == Export
export default connect(mapStateToProps, mapDispatchToProps)(Reset);