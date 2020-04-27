// == Import : npm
import { createStore, compose, applyMiddleware } from "redux";

// == Import : local
import rootReducer from "src/reducers";
import logMiddleware from "../middleware/logMiddleware";
import authMiddleware from "../middleware/authMiddleware";
import searchMiddleware from "../middleware/searchMiddleware";
import candidateMiddleware from "../middleware/candidateMiddleware";
import recruiterMiddleware from "../middleware/recruiterMiddleware";
import messagesMiddleware from "../middleware/messagesMiddleware";

// == Enhancers
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(
    logMiddleware,
    authMiddleware,
    searchMiddleware,
    candidateMiddleware,
    recruiterMiddleware,
    messagesMiddleware
  )
);

// == Store
const store = createStore(
  rootReducer,
  // preloadedState,
  enhancers
);

// == Export
export default store;
