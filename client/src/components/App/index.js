// == Import npm
import React, { useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import PropTypes from "prop-types";

// == Import
import Nav from "src/containers/App/Nav";
import Page from "src/components/App/Page";
import Home from "src/components/App/Home";
import SearchPage from "src/containers/App/SearchPage";
import SearchProfile from "src/containers/App/SearchProfile";
import InscriptionPage from "src/containers/App/InscriptionPage";
import CandidateProfile from "src/containers/App/ProfilePage/Edition/CandidateProfile";
import RecruiterProfile from "src/containers/App/ProfilePage/Edition/RecruiterProfile";
import ContactCandidate from "src/containers/App/ContactCandidate";
import LoginPage from "src/containers/App/LoginPage";
import Reset from "src/containers/App/ForgotPassword/Reset";
import Footer from "src/components/App/Footer";
import Mailbox from "src/containers/App/Mailbox";
import CGU from "src/components/App/CGU";
import Team from 'src/components/App/Team';
import RecruiterProfileConv from "src/containers/App/RecruiterProfileConv";

const App = ({
  checkIsLogged,
  isLogged,
  role,
  fetchMessagesPreview,
  isActiveMenu,
  changeIsActiveMenu
}) => {
  useEffect(checkIsLogged, []);
  useEffect(() => {
    if (isLogged === true) {
      fetchMessagesPreview();
    }
  }, [isLogged]);

  const handleClick = () => {
    isActiveMenu ? changeIsActiveMenu() : "";
  };

  return (
    <div className="app" onClick={handleClick}>
      <Nav />
      <Page>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/registration" component={InscriptionPage} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/user/:slug/reset_password" component={Reset} />
          <Route exact path="/team" component={Team} />
          <Route exact path="/cgu" component={CGU} />
          {isLogged && role === "candidat" && (
            <>
              <Route exact path="/candidate" component={CandidateProfile} />
              <Route exact path="/candidate/messages" component={Mailbox} />
              <Route exact path="/candidate/recruiter/:recruiterId" component={RecruiterProfileConv} />
            </>
          )}

          {isLogged && role === "recruteur" && (
            <>
              <Route exact path="/recruiter" component={RecruiterProfile} />
              <Route exact path="/recruiter/search" component={SearchPage} />
              <Route
                exact
                path="/candidate/search/:slug"
                component={SearchProfile}
              />
              <Route
                exact
                path="/recruiter/contact-form/:slug"
                component={ContactCandidate}
              />
              <Route exact path="/recruiter/messages" component={Mailbox} />
            </>
          )}

          {!isLogged && <Home />}
          <Redirect path="*" to="/" />
        </Switch>
      </Page>

      <Footer />
    </div>
  );
};

App.propTypes = {
  fetchMessagesPreview: PropTypes.func.isRequired
};

// == Export
export default App;
