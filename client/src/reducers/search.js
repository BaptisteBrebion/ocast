import {
  CHANGE_SEARCH_VALUE,
  CANDIDATE_SEARCH_RESULT,
  SAVE_SEARCH_MESSAGE_VALUE,
} from "src/actions/search";

export const initialState = {
  search: {},
  searchResult: []
};

const search = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_SEARCH_VALUE:
      return {
        ...state,
        search: {
          ...state.search,
          [action.key]: action.value
        }
      };

    case CANDIDATE_SEARCH_RESULT:
      return {
        ...state,
        searchResult: action.result
      };

    case SAVE_SEARCH_MESSAGE_VALUE: {
      return {
        ...state,
        message: action.message,
      }
    };

    default:
      return state;
  }
};

export default search;
