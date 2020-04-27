import axios from "axios";

import {
  SEARCH_CANDIDATE,
  candidateSearchResult,
  saveSearchMessageValue
} from "src/actions/search";

const searchMiddleware = store => next => action => {
  switch (action.type) {
    case SEARCH_CANDIDATE: {
      const state = store.getState();
      axios
        .get("http://localhost:3000/search", {
          params: state.search.search
        })
        .then(response => {
          store.dispatch(saveSearchMessageValue(response.data.message));
          store.dispatch(candidateSearchResult(response.data));
        })
        .catch(error => {
          console.error(error);
        });
      next(action);
      break;
    }

    default:
      next(action);
  }
};

export default searchMiddleware;
