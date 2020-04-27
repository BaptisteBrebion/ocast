import { CHANGE_ERROR_VALUE, REMOVE_ERROR } from "../actions/error";

// import { CHANGE_ERROR_VALUE } from "src/actions/error";

export const initialState = {
  message: null,
};

const error = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_ERROR_VALUE: {
      return {
        ...state,
       message: action.error,
      }
    };

    case REMOVE_ERROR: {
      return {
        ...state,
        message: null,
      }
    };

    default:
      return state
  }
};

export default error;