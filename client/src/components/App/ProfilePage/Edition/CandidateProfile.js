// == Import npm
import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
import PropTypes from "prop-types";
import "bulma-pageloader";

// == Import
import FieldText from "src/containers/App/FieldText";
import SelectFieldCandidate from "src/containers/App/SelectFieldCandidate";
import MultiSelectFieldCandidate from "src/containers/App/MultiSelectFieldCandidate";
import FieldTextArea from "src/containers/App/FieldTextArea";
import ModalUploadPhoto from "../ModalUploadPhoto";
import UpdatePasswordModal from "../UpdatePasswordModal";

import datas from "src/data/selectData";
import multiSelectData from "src/data/multiSelectData";

import "./style.css";

// == Composant
const CandidateProfile = ({
  error,
  message,
  removeMessage,
  photo_url,
  surname,
  firstname,
  email,
  phone,
  city,
  country,
  adress,
  age,
  availability,
  training,
  experience,
  size,
  hair,
  eyes,
  language,
  skills,
  handicap,
  corpulence,
  distinctive_sign,
  ethnicity,
  gender,
  editCandidate,
  isEditing,
  toggleIsEditing,
  changeValue,
  newPassword,
  newPasswordConfirm,
  password,
  updatePassword,
  deleteProfil,
  updatePhoto,
  isLoading,
  chargeLoader,
}) => {

  const [updatePasswordModal, setUpdatePasswordModal] = useState(false);
  const [uploadPhotoModal, setUploadPhotoModal] = useState(false);

  const handleSubmitUpdatePassword = () => {
    setUpdatePasswordModal(true);
  };

  const handleSubmitUploadPhoto = () => {
    setUploadPhotoModal(true);
  };

  const handleSubmit = event => {
    event.preventDefault();
    toggleIsEditing();
    editCandidate();
    chargeLoader();
  };

  const handleChange = () => {
    toggleIsEditing();
  };

  let history = useHistory();
  const handleSubmitDeleteProfil = () => {
    const confirm = window.confirm(`Voulez-vous vraiment supprimer le compte de ${surname} ${firstname}?`)
    if (confirm) {
      deleteProfil();
      history.push('/');
    }
  };

  const isAvailable = event => {
    console.log(event.target.value, event.target.name);
    if (event.target.value === "true") {
      changeValue(true, event.target.name);
    } else {
      changeValue(false, event.target.name);
    }
  };

  return (
    <div className="container is-fullhd">
      <div className="notification">

        {/* loader de la page d'édition */}
        <div
          className={
            isLoading
              ? "pageloader is-active is-warning"
              : "pageloader is-warning"
          }
        >
          <span
            className="title"
          >
            Modifications en cours
          </span>
        </div>

        {/* entête du profil */}
        <div className="has-text-centered">

          <div className="has-text-centered">
            <h1 className="profil-page-title is-size-1 ">Espace Personnel</h1>
          </div>

          {/* modification/lecture photo de profil */}
          <div className="item-photo-container secondary">
            <p>Image Profil</p>
            <div className="image is-128x128">
              {photo_url ?
                <div className="item-photo" style={{ backgroundImage: `url(http://localhost:3000/${photo_url})` }} /> :
                <img
                  className="image is-128x128"
                  src={
                    (gender === "féminin" ? "/images/woman-311607_640.png" : "/images/suit-432222_640.png")
                  }
                />
              }
            </div>
            <button
              className="item-photo-button"
              onClick={handleSubmitUploadPhoto}
            >
              Modifier ma photo
            </button>
          </div>
        </div>


        {uploadPhotoModal &&
          <ModalUploadPhoto
            setUploadPhotoModal={setUploadPhotoModal}
            updatePhoto={updatePhoto}
          />
        }

        {/* modification du profil */}
        {isEditing && (
          <form action="submit">
            <div className="columns is-multiline">
              <div className="column is-half">
                <h2 className="is-size-4 has-text-centered">
                  Informations Profil
                </h2>
                <FieldText
                  htmlFor="surname"
                  name="surname"
                  isRequired
                  type="text"
                  placeholder="Nom"
                  defaultValue={surname}
                />
                <FieldText
                  htmlFor="firstname"
                  name="firstname"
                  isRequired
                  type="text"
                  placeholder="Prénom"
                  defaultValue={firstname}
                />
                <FieldText
                  htmlFor="age"
                  name="age"
                  isRequired
                  type="text"
                  placeholder="Age"
                  defaultValue={age}
                />
                <FieldText
                  htmlFor="email"
                  name="email"
                  isRequired
                  type="text"
                  placeholder="Email"
                  defaultValue={email}
                />
                <FieldText
                  htmlFor="adress"
                  name="adress"
                  isRequired
                  type="text"
                  placeholder="Adresse"
                  defaultValue={adress}
                />
                <FieldText
                  htmlFor="city"
                  name="city"
                  isRequired
                  type="text"
                  placeholder="Ville"
                  defaultValue={city}
                />
                <FieldText
                  htmlFor="country"
                  name="country"
                  isRequired
                  type="text"
                  placeholder="Pays"
                  defaultValue={country}
                />
                <FieldText
                  htmlFor="phone"
                  name="phone"
                  isRequired
                  type="text"
                  placeholder="Téléphone"
                  defaultValue={phone}
                />
                <div className="field has-text-black">
                  <div className="radio-container control has-text-centered is-size-5">
                    <p className="has-text-weight-semibold">Disponibilité: </p>
                    <label
                      htmlFor="oui"
                      className="radio-container-content role-radio"
                    >
                      <input
                        className=""
                        onChange={isAvailable}
                        type="radio"
                        name="availability"
                        id="oui"
                        value="true"
                      />
                      <span className="checkmark"></span>
                      Oui
                    </label>
                    <label
                      htmlFor="non"
                      className="radio-container-content role-radio"
                    >
                      <input
                        onChange={isAvailable}
                        type="radio"
                        name="availability"
                        id="non"
                        value="false"
                      />
                      <span className="checkmark"></span>
                      Non
                    </label>
                  </div>
                </div>
              </div>

              <div className="column is-half">
                <h2 className="is-size-4 has-text-centered">Formation</h2>
                <FieldTextArea
                  htmlFor="training"
                  name="training"
                  isRequired
                  type="text"
                  placeholder="Formation"
                  defaultValue={training}
                />
                <h2 className="is-size-4 has-text-centered">
                  Expérience professionnelle
                </h2>
                <FieldTextArea
                  htmlFor="experience"
                  name="experience"
                  isRequired
                  type="text"
                  placeholder="Expérience professionnelle"
                  defaultValue={experience}
                />
              </div>

              <div className="column is-half">
                <h2 className="is-size-4 has-text-centered">
                  Critères physiques
                </h2>
                <FieldText
                  htmlFor="size"
                  name="size"
                  isRequired
                  type="text"
                  placeholder="Taille en cm (170cm)"
                  defaultValue={size}
                />
              </div>
              <div className="column is-12 columns is-multiline">
                <SelectFieldCandidate datas={datas} />
                <MultiSelectFieldCandidate multiSelectData={multiSelectData} />
              </div>
            </div>
            <div className="field has-text-centered">
              <button
                type="submit"
                onClick={handleSubmit}
                className="button secondary"
              >
                Valider mon profil
              </button>
            </div>
          </form>
        )}

        {/* lecture du profil */}
        {!isEditing &&
          <>
            {updatePasswordModal &&
              <UpdatePasswordModal
                password={password}
                newPassword={newPassword}
                newPasswordConfirm={newPasswordConfirm}
                setUpdatePasswordModal={setUpdatePasswordModal}
                updatePassword={updatePassword}
                error={error}
                message={message}
                removeMessage={removeMessage}
              />}

            <section id="profil">
              <div className="profil-info profil-details-box">
                <h2 className="is-size-4 has-text-centered">
                  Informations Profil
                </h2>
                <p><span className="item-key">Nom</span>: {surname === null ? "non renseigné" : surname}</p>
                <p><span className="item-key">Prénom</span>: {firstname === null ? "non renseigné" : firstname}</p>
                <p><span className="item-key">Age</span>: {age === null ? "non renseigné" : age}</p>
                <p><span className="item-key">Genre</span>: {gender === null ? "non renseigné" : gender}</p>
                <p><span className="item-key">Email</span>: {email === null ? "non renseigné" : email}</p>
                <p><span className="item-key">Adresse</span>: {adress === null ? "non renseigné" : adress}</p>
                <p><span className="item-key">Ville</span>: {city === null ? "non renseigné" : city}</p>
                <p><span className="item-key">Pays</span>: {country === null ? "non renseigné" : country}</p>
                <p><span className="item-key">Téléphone</span>: {phone === null ? "non renseigné" : phone}</p>
                <p className={availability ? "has-text-success" : "has-text-danger"}>
                  {availability ? "Disponible" : "Non-disponible"}
                </p>
              </div>

              <div className="profil-details">
                <div className="profil-details-section profil-details-box">
                  <h2 className="is-size-4">Formation</h2>
                  <span>{training === null ? "non renseigné" : training}</span>
                </div>

                <div className="profil-details-section profil-details-box">
                  <h2 className="is-size-4">
                    Expérience professionnelle
                  </h2>
                  <span>{experience === null ? "non renseigné" : experience}</span>
                </div>

                <div className="profil-details-section profil-details-box">
                  <h2 className="is-size-4">
                    Critères physiques
                  </h2>
                  <p><span className="item-key">Taille</span>: {size === null ? "non renseigné" : size}</p>
                  <p><span className="item-key">Couleur de cheveux</span>: {hair === null ? "non renseigné" : hair}</p>
                  <p><span className="item-key">Couleur des yeux</span>: {eyes === null ? "non renseigné" : eyes}</p>
                  <p><span className="item-key">Langue</span>: {language === null ? "non renseigné" : language}</p>
                  <ol className="skills-list"><span className="item-key">Spécialité et Niveau</span>:
                    {skills && skills.length ? skills.map((skill) => <li key={skill}>{skill}</li>) : "non renseigné"}
                  </ol>
                  <p><span className="item-key">Handicap</span>: {handicap === null ? "non renseigné" : handicap}</p>
                  <p><span className="item-key">Corpulence</span>: {corpulence === null ? "non renseigné" : corpulence}</p>
                  <p><span className="item-key">Signes distinctifs</span>: {distinctive_sign === null ? "non renseigné" : distinctive_sign}</p>
                  <p><span className="item-key">Origine</span>: {ethnicity === null ? "non renseigné" : ethnicity}</p>
                </div>
              </div>
            </section>

            <section id="buttons-container">
              <button
                type="submit"
                onClick={handleSubmitUpdatePassword}
                className="button is-relative is-size-6"
              >
                Modifier mot de passe
              </button>

              <button
                onClick={handleChange}
                className="button secondary is-size-5"
              >
                Éditer mon profil
              </button>

              <button
                type="submit"
                onClick={handleSubmitDeleteProfil}
                className="button is-relative is-danger is-outlined is-size-6"
              >
                Supprimer le compte
              </button>
            </section>
          </>
        }
      </div>
    </div>
  );
};

CandidateProfile.propTypes = {
  changeValue: PropTypes.func.isRequired,
  editCandidate: PropTypes.func.isRequired,
  surname: PropTypes.string,
  firstname: PropTypes.string,
  email: PropTypes.string,
  adress: PropTypes.string,
  phone: PropTypes.string,
  age: PropTypes.number,
  training: PropTypes.string,
  experience: PropTypes.string,
  size: PropTypes.number,
  gender: PropTypes.string,
  availability: PropTypes.bool,
  isLoading: PropTypes.bool.isRequired,
  chargeLoader: PropTypes.func.isRequired,
};

CandidateProfile.defaultProps = {
  surname: "",
  firstname: "",
  email: "",
  adress: "",
  phone: "",
  age: null,
  training: "",
  experience: "",
  size: null,
  gender: "",
};

// == Export
export default CandidateProfile;
