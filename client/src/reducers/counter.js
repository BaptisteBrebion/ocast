import { SAVE_COUNTER } from "src/actions/candidate";

export const initialState = {
  candidatesCounter: 0
};

const counter = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_COUNTER:
      return {
        ...state,
        candidatesCounter: action.count
      };
    default:
      return state;
  }
};

export default counter;
