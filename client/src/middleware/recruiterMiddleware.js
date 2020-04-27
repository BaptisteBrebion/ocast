import axios from "axios";
import { EDIT_RECRUITER, saveUser } from "src/actions/auth";

const recruiterMiddleware = store => next => action => {
  switch (action.type) {
    case EDIT_RECRUITER: {
      const state = store.getState();
      const id = state.auth.user.id;
      axios
        .patch(
          `http://localhost:3000/user/recruiter/${id}`,
          {
            surname: state.auth.user.surname,
            firstname: state.auth.user.firstname,
            adress: state.auth.user.adress,
            city: state.auth.user.city, 
            country: state.auth.user.country,
            email: state.auth.user.email,
            password: state.auth.user.password,
            adress: state.auth.user.adress,
            city: state.auth.user.city,
            country: state.auth.user.country,
            phone: state.auth.user.phone,
            website: state.auth.user.website,
            society: state.auth.user.society,
            siret: state.auth.user.siret,
            filmography: state.auth.user.filmography,
          },
          {
            withCredentials: true
          }
        )
        .then(response => {
          console.log("response : ", response.data);
          store.dispatch(saveUser(response.data));
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

export default recruiterMiddleware;
