// == Import npm
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from "prop-types";

// == Import
import FieldText from 'src/containers/App/FieldText';
import FieldTextArea from 'src/containers/App/FieldTextArea';
import UpdatePasswordModal from "../UpdatePasswordModal";
import ModalUploadPhoto from "../ModalUploadPhoto";

import "./style.css";

// == Composant
const RecruiterProfile = ({
  error,
  message,
  photo_url,
  surname,
  firstname,
  society,
  siret,
  adress,
  fullAdress,
  city,
  country,
  email,
  phone,
  filmography,
  website,
  editRecruiter,
  toggleIsEditing,
  isEditing,
  newPassword,
  newPasswordConfirm,
  password,
  updatePassword,
  removeMessage,
  deleteProfil,
  updatePhoto,
  isLoading,
  chargeLoader,
}) => {

  const [updatePasswordModal, setUpdatePasswordModal] = useState(false)
  const [uploadPhotoModal, setUploadPhotoModal] = useState(false);

  const handleSubmitUpdatePassword = () => {
    setUpdatePasswordModal(true);
  }

  const handleSubmitUploadPhoto = () => {
    setUploadPhotoModal(true);
  };

  const handleSubmit = event => {
    event.preventDefault();
    toggleIsEditing();
    editRecruiter();
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
            <h1 className="profil-page-title is-size-1">Espace Personnel</h1>
          </div>


          {/* modification/lecture photo de profil */}
          <div className="item-photo-container secondary">
            <p>Image Profil</p>
            <div className="image is-128x128">

              {photo_url ?
                <div className="item-photo" style={{ backgroundImage: `url(http://localhost:3000/${photo_url})` }} /> :
                <img
                  // className="is-rounded"
                  name="photo_url"
                  src="/images/man-303792_1280.png"
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
                <h2 className="is-size-4 has-text-centered">Informations Profil</h2>
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
                  htmlFor="society"
                  name="society"
                  isRequired
                  type="text"
                  placeholder="Société"
                  defaultValue={society}
                />
                <FieldText
                  htmlFor="siret"
                  name="siret"
                  isRequired
                  type="text"
                  placeholder="Siret"
                  defaultValue={siret}
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
                  type="country"
                  placeholder="Pays"
                  defaultValue={country}
                />
              </div>
              <div className="column is-half">
                <h2 className="is-size-4 has-text-centered">Contact</h2>
                <FieldText
                  htmlFor="email"
                  name="email"
                  isRequired
                  type="text"
                  placeholder="Email"
                  defaultValue={email}
                />

                <FieldText
                  htmlFor="phone"
                  name="phone"
                  isRequired
                  type="text"
                  placeholder="Téléphone"
                  defaultValue={phone}
                />

                <h2 className="is-size-4 has-text-centered">Site Web</h2>
                <FieldText
                  htmlFor="website"
                  name="website"
                  isRequired
                  type="text"
                  placeholder="Site web"
                  defaultValue={website}
                />

                <h2 className="is-size-4 has-text-centered">Filmographie</h2>
                <FieldTextArea
                  htmlFor="filmography"
                  name="filmography"
                  isRequired
                  type="text"
                  placeholder="Filmographie"
                  value={filmography}
                />
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
                <p><span className="item-key">Société</span>: {society === null ? "non renseigné" : society}</p>
                <p><span className="item-key">Siret</span>: {siret === null ? "non renseigné" : siret}</p>

                <h2 className="is-size-4 has-text-centered">Contact</h2>
                <p><span className="item-key">Email</span>: {email === null ? "non renseigné" : email}</p>
                <p><span className="item-key">Adresse</span>: {adress === null ? "non renseigné" : adress}</p>
                <p><span className="item-key">Ville</span>: {city === null ? "non renseigné" : city}</p>
                <p><span className="item-key">Pays</span>: {country === null ? "non renseigné" : country}</p>
                <p><span className="item-key">Téléphone</span>: {phone === null ? "non renseigné" : phone}</p>
                <p><span className="item-key">Site web</span>: {website === null ? "non renseigné" : website}</p>
              </div>

              <div className="profil-details profil-details-box">
                <h2 className="is-size-4 has-text-centered">Filmographie</h2>
                <span>{filmography === null ? "non renseigné" : filmography}</span>
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

RecruiterProfile.propTypes = {
  editRecruiter: PropTypes.func.isRequired,
  surname: PropTypes.string,
  firstname: PropTypes.string,
  society: PropTypes.string,
  siret: PropTypes.number,
  adress: PropTypes.string,
  email: PropTypes.string,
  phone: PropTypes.string,
  filmography: PropTypes.string,
  website: PropTypes.string,
  isLoading: PropTypes.bool.isRequired,
  chargeLoader: PropTypes.func.isRequired,
}

RecruiterProfile.defaultProps = {
  surname: "",
  firstname: "",
  adress: "",
  email: "",
  phone: "",
  filmography: "",
}

// == Export
export default RecruiterProfile;
