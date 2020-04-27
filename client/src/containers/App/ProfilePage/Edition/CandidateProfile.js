// == Import : npm
import { connect } from "react-redux";
import { editCandidate, changeValue, updatePassword, removeMessage, deleteProfil, updatePhoto } from "src/actions/auth";
import { toggleIsEditing } from "src/actions/profile";
import { chargeLoader } from "src/actions/loader";

// == Import : local
import CandidateProfile from "src/components/App/ProfilePage/Edition/CandidateProfile";

const mapStateToProps = state => {
  return {
    error: state.error.message,
    message: state.auth.message,
    surname: state.auth.user.surname,
    photo_url: state.auth.user.photo_url,
    firstname: state.auth.user.firstname,
    email: state.auth.user.email,
    adress: state.auth.user.adress,
    city: state.auth.user.city,
    country: state.auth.user.country,
    phone: state.auth.user.phone,
    age: state.auth.user.candidates.age,
    availability: state.auth.user.candidates.availability,
    training: state.auth.user.candidates.training,
    experience: state.auth.user.candidates.experience,
    size: state.auth.user.candidates.size,
    hair: state.auth.user.candidates.hair,
    eyes: state.auth.user.candidates.eyes,
    language: state.auth.user.candidates.language,
    skills: state.auth.user.candidates.skills,
    handicap: state.auth.user.candidates.handicap,
    corpulence: state.auth.user.candidates.corpulence,
    distinctive_sign: state.auth.user.candidates.distinctive_sign,
    ethnicity: state.auth.user.candidates.ethnicity,
    gender: state.auth.user.candidates.gender,
    isEditing: state.profile.isEditing,
    isLoading: state.loader.isLoading,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    chargeLoader: () => {
      dispatch(chargeLoader());
    },
    updatePassword: () => {
      dispatch(updatePassword());
    },
    updatePhoto: (file) => {
      dispatch(updatePhoto(file))
    },
    editCandidate: () => {
      dispatch(editCandidate());
    },
    toggleIsEditing: () => {
      dispatch(toggleIsEditing());
    },
    changeValue: (value, name) => {
      dispatch(changeValue(value, name));
    },
    removeMessage: () => {
      dispatch(removeMessage());
    },
    deleteProfil: () => {
      dispatch(deleteProfil());
    },
  };
};

// == Export
export default connect(mapStateToProps, mapDispatchToProps)(CandidateProfile);
