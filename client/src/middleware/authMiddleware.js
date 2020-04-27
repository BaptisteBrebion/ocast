import axios from "axios";
import {
  LOGIN,
  saveUser,
  saveRegister,
  REGISTER_USER,
  CHECK_IS_LOGGED,
  DISCONNECT,
  FETCH_USER,
  saveMessageValue,
  SEND_MESSAGE,
  removeMessage,
  SEND_FORGOT_PASSWORD,
  RESET_PASSWORD,
  UPDATE_PASSWORD,
  DELETE_PROFIL,
  UPDATE_PHOTO
} from "src/actions/auth";
import { changeErrorValue } from "src/actions/error";

const authMiddleware = store => next => action => {
  switch (action.type) {
    case LOGIN: {
      const state = store.getState();
      const { email, password } = state.auth.user;
      axios
        .post(
          "http://localhost:3000/login",
          {
            email,
            password
          },
          {
            withCredentials: true
          }
        )
        .then(response => {
          console.log(response.data.error);
          if (response.data.error) {
            store.dispatch(changeErrorValue(response.data.error));
          } else {
            store.dispatch(saveUser(response.data.user));
          }
        })
        .catch(error => {
          console.error(error);
        });
      break;
    };

    case FETCH_USER:
      const state = store.getState();
      const id = state.auth.user.id;
      axios
        .get(`http://localhost:3001/user/${id}`)
        .then(response => {
          store.dispatch(saveUser(response.data));
        })
        .catch(error => {
          console.error(error);
        });
      next(action);
      break;

    case REGISTER_USER: {
      console.log("in authMiddleware");
      const state = store.getState();
      const {
        role,
        surname,
        firstname,
        email,
        password,
        passwordConfirm
      } = state.auth.user;
      axios
        .post(
          "http://localhost:3000/registration",
          {
            role,
            surname,
            firstname,
            email,
            password,
            passwordConfirm
          },
          {
            withCredentials: true
          }
        )
        .then(response => {
          if (response.data.error) {
            store.dispatch(changeErrorValue(response.data.error));
          } else {
            store.dispatch(saveRegister(response.data));
          }
        })
        .catch(error => {
          console.error(error);
        });
      break;
    };

    case CHECK_IS_LOGGED:
      axios
        .post(
          "http://localhost:3000/isLogged",
          {},
          {
            withCredentials: true
          }
        )
        .then(response => {
          // si l'user est connecté
          if (response.data.logged) {
            // alors je le mémorise
            store.dispatch(saveUser(response.data.user));
          }
        })
        .catch(error => {
          console.error(error);
        });
      break;

    case DISCONNECT: {
      const state = store.getState();
      axios
        .get("http://localhost:3000/disconnect", {
          withCredentials: true
        })
        .then(response => {
          // console.log("response : ", response.data);
        })
        .catch(error => {
          console.error(error);
        });
      next(action);
      break;
    };

    case SEND_MESSAGE: {
      const state = store.getState();
      const author_id = state.auth.user.id;
      const receiver_id = state.auth.user.receiver;
      const text = state.auth.user.message_content;
      axios
        .post(
          "http://localhost:3000/send_message",
          {
            author_id,
            receiver_id,
            text
          },
          {
            withCredentials: true
          }
        )
        .then(response => {
          store.dispatch(removeMessage());
          store.dispatch(saveMessageValue(response.data.message));
        })
        .catch(error => {
          console.log(error);
        });
      next(action);
      break;
    }

    case SEND_FORGOT_PASSWORD: {
      const state = store.getState();
      const email = state.auth.user.email;
      axios
        .post(
          "http://localhost:3000/user/forgotPassword",
          {
            email
          },
          {
            withCredentials: true
          }
        )
        .then(response => {
          console.log("ok");
        })
        .catch(error => {
          console.log(error);
        });
      next(action);
      break;
    }

    case RESET_PASSWORD: {
      const state = store.getState();
      console.log("STATE", action);
      const { newPassword, newPasswordConfirm } = state.auth.user;
      axios
        .patch(
          `http://localhost:3000/user/${action.slug}/resetpassword`,
          {
            newPassword,
            newPasswordConfirm
          },
          {
            withCredentials: true
          }
        )
        .then(response => {
          store.dispatch(saveMessageValue(response.data.message));
        })
        .catch(error => {
          console.log(error);
        });
      next(action);
      break;
    }

    case UPDATE_PASSWORD: {
      const state = store.getState();
      const { id, password, newPassword, newPasswordConfirm } = state.auth.user;

      axios
        .patch(
          `http://localhost:3000/user/${id}/updatepassword`,
          {
            password,
            newPassword,
            newPasswordConfirm
          },
          {
            withCredentials: true
          }
        )
        .then(response => {
          // store.dispatch(saveUser(response.data));
          store.dispatch(changeErrorValue(response.data.error));
          store.dispatch(saveMessageValue(response.data.message));
        })
        .catch(error => {
          console.log(error);
        });
      next(action);
      break;
    }

    case DELETE_PROFIL: {
      const state = store.getState();
      const { id } = state.auth.user;

      axios
        .delete(`http://localhost:3000/user/${id}`, {
          withCredentials: true
        })
        .then(response => {
          console.log(response);
        })
        .catch(error => {
          console.log(error);
        });
      next(action);
      break;
    }

    case UPDATE_PHOTO: {
      const state = store.getState();
      const { id } = state.auth.user;
      const data = new FormData();
      data.append('file', action.file)
      axios.post(`http://localhost:3000/upload/${id}`, data,
        {
          withCredentials: true,
        })
        .then((response) => {
          store.dispatch(saveUser(response.data.user));
        })
        .catch(error => {
          console.log(error);
        });
      next(action);
      break;
    };

    default:
      next(action);
  }
};

export default authMiddleware;
