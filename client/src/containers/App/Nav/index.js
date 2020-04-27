// == Import : npm
import { connect } from "react-redux";
import { changeIsActiveMenu } from "src/actions/nav";
import { disconnect } from "src/actions/auth";

// == Import : local
import Nav from "src/components/App/Nav";

const mapStateToProps = state => ({
  isActiveMenu: state.nav.isActiveMenu,
  isLogged: state.auth.isLogged,
  firstname: state.auth.user.firstname,
  role: state.auth.user.role,
  hasNewMessage: state.nav.hasNewMessage
});

const mapDispatchToProps = dispatch => {
  return {
    changeIsActiveMenu: () => {
      dispatch(changeIsActiveMenu());
    },
    disconnect: () => {
      dispatch(disconnect());
    }
  };
};

// == Export
export default connect(mapStateToProps, mapDispatchToProps)(Nav);
