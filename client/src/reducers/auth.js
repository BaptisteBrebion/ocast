import {
  SAVE_USER,
  SAVE_REGISTER,
  CHANGE_VALUE,
  DISCONNECT,
  REGISTER_USER,
  SAVE_MESSAGE_RECEIVER,
  SAVE_MESSAGE_VALUE,
  REMOVE_MESSAGE,
  DELETE_PROFIL,
} from "src/actions/auth";

export const initialState = {
  isRegister: false,
  isLogged: false,
  user: {
    photo_url: "",
    role: "",
    surname: "",
    firstname: "",
    email: "",
    password: "",
    passwordConfirm: "",
    newPassword: "",
    newPasswordConfirm: ""
  }
};

const auth = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_USER: {
      return {
        ...state,
        isRegister: false,
        isLogged: true,
        user: action.user
      };
    };

    case SAVE_REGISTER:
      return {
        ...state,
        isRegister: true,
        user: action.user
      };

    case REGISTER_USER:
      return {
        ...state,
        isRegister: true
      };

    case CHANGE_VALUE:
      return {
        ...state,
        user: {
          ...state.user,
          [action.key]: action.value
        }
      };

    case DISCONNECT: {
      return {
        ...state,
        isLogged: false,
        user: {
          role: "",
          surname: "",
          firstname: "",
          email: "",
          password: "",
          passwordConfirm: ""
        }
      };
    };

    case SAVE_MESSAGE_RECEIVER:
      return {
        ...state,
        user: {
          ...state.user,
          receiver: action.receiver
        }
      };

    case SAVE_MESSAGE_VALUE: {
      return {
        ...state,
        message: action.message
      };
    };

    case REMOVE_MESSAGE: {
      return {
        ...state,
        message: null
      };
    };

    case DELETE_PROFIL:
      return {
        ...state,
        isRegister: false,
        isLogged: false,
      };

    default:
      return state;
  }
};

export default auth;
