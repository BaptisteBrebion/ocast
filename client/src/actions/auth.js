export const LOGIN = "LOGIN";
export const SAVE_USER = "SAVE_USER";
export const SAVE_REGISTER = "SAVE_REGISTER";
export const CHANGE_VALUE = "CHANGE_VALUE";
export const REGISTER_USER = "REGISTER_USER";
export const CHECK_IS_LOGGED = "CHECK_IS_LOGGED";
export const DISCONNECT = "DISCONNECT";
export const EDIT_CANDIDATE = "EDIT_CANDIDATE";
export const EDIT_RECRUITER = "EDIT_RECRUITER";
export const FETCH_USER = "FETCH_USER";
export const SAVE_MESSAGE_RECEIVER = "SAVE_MESSAGE_RECEIVER";
export const SEND_MESSAGE = "SEND_MESSAGE";
export const SAVE_MESSAGE_VALUE = "SAVE_MESSAGE_VALUE";
export const REMOVE_MESSAGE = "REMOVE_MESSAGE";
export const SEND_FORGOT_PASSWORD = "SEND_FORGOT_PASSWORD";
export const RESET_PASSWORD = "RESET_PASSWORD";
export const UPDATE_PASSWORD = "UPDATE_PASSWORD";
export const DELETE_PROFIL = "DELETE_PROFIL";
export const UPDATE_PHOTO = "UPDATE_PHOTO";

export const login = () => ({
  type: LOGIN
});

export const saveUser = user => {
  return {
    type: SAVE_USER,
    user
  };
};

export const editCandidate = () => ({
  type: EDIT_CANDIDATE
});

export const editRecruiter = () => ({
  type: EDIT_RECRUITER
});

export const saveRegister = user => ({
  type: SAVE_REGISTER,
  user
});

export const changeValue = (value, key) => ({
  type: CHANGE_VALUE,
  value,
  key
});

export const registerUser = () => ({
  type: REGISTER_USER
});

export const checkIsLogged = () => ({
  type: CHECK_IS_LOGGED
});

export const disconnect = () => {
  return {
    type: DISCONNECT
  };
};

export const fetchUser = () => ({
  type: FETCH_USER
});

export const saveMessageReceiver = receiver => ({
  type: SAVE_MESSAGE_RECEIVER,
  receiver
});

export const sendMessage = () => {
  return {
    type: SEND_MESSAGE
  };
};

export const saveMessageValue = message => ({
  type: SAVE_MESSAGE_VALUE,
  message
});

export const removeMessage = () => ({
  type: REMOVE_MESSAGE
});

export const sendForgotPassword = () => ({
  type: SEND_FORGOT_PASSWORD
});

export const resetPassword = slug => ({
  type: RESET_PASSWORD,
  slug
});

export const updatePassword = () => ({
  type: UPDATE_PASSWORD,
});

export const deleteProfil = () => ({
  type: DELETE_PROFIL,
});

export const updatePhoto = (file) => ({
  type: UPDATE_PHOTO,
  file
});
