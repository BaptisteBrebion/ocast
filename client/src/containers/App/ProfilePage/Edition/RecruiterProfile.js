// == Import : npm
import { connect } from "react-redux";
import { editRecruiter, changeValue, updatePassword, removeMessage, deleteProfil, updatePhoto } from "src/actions/auth";
import { toggleIsEditing } from "src/actions/profile";
import { chargeLoader } from "src/actions/loader";

// == Import : local
import RecruiterProfile from "src/components/App/ProfilePage/Edition/RecruiterProfile";

const mapStateToProps = state => {
  return {
    error: state.error.message,
    message: state.auth.message,
    photo_url: state.auth.user.photo_url,
    surname: state.auth.user.surname,
    firstname: state.auth.user.firstname,
    email: state.auth.user.email,
    password: state.auth.user.password,
    newPassword: state.auth.user.newPassword,
    newPasswordConfirm: state.auth.user.newPasswordConfirm,
    fullAdress: `${state.auth.user.adress} ${state.auth.user.city} ${state.auth.user.country}`,
    adress: state.auth.user.adress,
    city: state.auth.user.city,
    country: state.auth.user.country,
    phone: state.auth.user.phone,
    website: state.auth.user.website,
    society: state.auth.user.recruiters.society,
    siret: state.auth.user.recruiters.siret,
    filmography: state.auth.user.recruiters.filmography,
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
    editRecruiter: () => {
      dispatch(editRecruiter());
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
export default connect(mapStateToProps, mapDispatchToProps)(RecruiterProfile);
