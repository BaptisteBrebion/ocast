import { connect } from "react-redux";

import App from "src/components/App";

import { checkIsLogged } from "src/actions/auth";
import { fetchMessagesPreview } from "src/actions/messages";
import { isActiveMenu, changeIsActiveMenu } from "src/actions/nav";

const mapStateToProps = state => ({
  isLogged: state.auth.isLogged,
  role: state.auth.user.role,
  isActiveMenu: state.nav.isActiveMenu
});

const mapDispatchToProps = dispatch => ({
  checkIsLogged: () => {
    dispatch(checkIsLogged());
  },
  fetchMessagesPreview: () => {
    dispatch(fetchMessagesPreview());
  },
  changeIsActiveMenu: () => {
    dispatch(changeIsActiveMenu());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
