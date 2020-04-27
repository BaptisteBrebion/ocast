import { DISCONNECT } from "src/actions/auth";
import { SAVE_RECRUITER_PROFILE } from 'src/actions/candidate'

export const initialState = {
  candidate: {
    // surname:'',
    // firstname:'',
    // gender:'',
    // age:'',
    // email: '',
    // adress: '',
    // phone: '',
    // availability:'',
    // skills_name:'',
    // skills_level:'',
    // language:'',
    // training:'',
    // experience:'',
    // ethnicity:'',
    // hair:'',
    // eyes:'',
    // corpulence:'',
    // size:'',
    // distinctive_sign:'',
    // handicap:'',
  },
  recruiterProfileConsultation: null
};

const candidate = (state = initialState, action = {}) => {
  switch (action.type) {
    case DISCONNECT:
      return {
        ...state,
        candidate: {}
      };
    case SAVE_RECRUITER_PROFILE: 
     return {
       ...state,
       recruiterProfileConsultation: action.recruiter
     }
    default:
      return state;
  }
};

export default candidate;
