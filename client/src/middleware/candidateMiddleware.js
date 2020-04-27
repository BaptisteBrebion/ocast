import axios from "axios";
import { EDIT_CANDIDATE, saveUser } from "src/actions/auth";
import { COUNT_ALL_CANDIDATES, saveCounter, SEE_RECRUITER_PROFILE, saveRecruiterProfile } from "src/actions/candidate";

const candidateMiddleware = store => next => action => {
  switch (action.type) {
    case EDIT_CANDIDATE: {
      const state = store.getState();
      const id = state.auth.user.id;
      axios
        .patch(
          `http://localhost:3000/user/candidate/${id}`,
          {
            surname: state.auth.user.surname,
            firstname: state.auth.user.firstname,
            email: state.auth.user.email,
            adress: state.auth.user.adress,
            city: state.auth.user.city,
            country: state.auth.user.country,
            phone: state.auth.user.phone,
            age: state.auth.user.age,
            availability: state.auth.user.availability,
            training: state.auth.user.training,
            experience: state.auth.user.experience,
            skills: state.auth.user.skills,
            size: state.auth.user.size,
            hair: state.auth.user.hair,
            eyes: state.auth.user.eyes,
            language: state.auth.user.language,
            handicap: state.auth.user.handicap,
            corpulence: state.auth.user.corpulence,
            distinctive_sign: state.auth.user.distinctive_sign,
            ethnicity: state.auth.user.ethnicity,
            gender: state.auth.user.gender
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

    case COUNT_ALL_CANDIDATES: {
      axios
        .get(`http://localhost:3000/candidates`, {
          withCredentials: true
        })
        .then(response => {
          store.dispatch(saveCounter(response.data.count));
        })
        .catch(error => {
          console.error(error);
        });
      next(action);
      break;
    }

    case SEE_RECRUITER_PROFILE: {
      const state = store.getState()
      const userId = state.auth.user.id
      const recruiterId = action.recruiterId
      axios
      .get(`http://localhost:3000/user/${userId}/recruiter/${recruiterId}`, {
        withCredentials: true
      })
      .then(response => {
        // console.log('response : ', response.data)
        store.dispatch(saveRecruiterProfile(response.data));
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

export default candidateMiddleware;
