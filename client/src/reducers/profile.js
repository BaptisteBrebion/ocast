import { TOGGLE_IS_EDITING } from 'src/actions/profile';

export const initialState = {
  isEditing: false
};

const profile = (state = initialState, action = {}) => {
  switch (action.type) {
    case TOGGLE_IS_EDITING: 
      return {
        ...state,
        isEditing: !state.isEditing
      }
    default:
    return state;
  }
};

export default profile;

