import { combineReducers } from "redux";
import nav from "./nav";
import auth from "./auth";
import search from "./search";
import candidate from "./candidate";
import profile from "./profile";
import error from "./error";
import messages from "./messages";
import loader from "./loader";
import counter from "./counter";

export default combineReducers({
  nav,
  auth,
  search,
  candidate,
  profile,
  error,
  messages,
  loader,
  counter
});
