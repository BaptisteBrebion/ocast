import React, { useState } from "react";

const ModalUploadPhoto = ({ 
  setUploadPhotoModal, 
  updatePhoto, 
}) => {

  const [fileToUpload, setFileToUpload] = useState();

  const handleSetUploadPhotoModal = () => {
    setUploadPhotoModal(false);
  }

  const handleClickUpdatePhoto = () => {
    console.log("FILE", fileToUpload)
    setUploadPhotoModal(false);
    updatePhoto(fileToUpload);
  }

  const handleChangeInputFile = (event) => {
    console.log(event)
    setFileToUpload(event.target.files[0]);
  }

  return (
    <div className="modal is-active">
      <div className="modal-background"></div>
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">Upload photo</p>
          <button 
            className="delete" 
            aria-label="close"
            onClick={handleSetUploadPhotoModal}
          ></button>
        </header>
        <section className="modal-card-body">
          <input 
            type="file"
            name="photo_url"
            onChange={handleChangeInputFile}
          />
        </section>
        <footer className="modal-card-foot">
          <button 
            className="button is-success"
            onClick={handleClickUpdatePhoto}
          >Ajouter photo</button>
          <button 
            className="button"
            onClick={handleSetUploadPhotoModal}
          >
            Quitter</button>
        </footer>
      </div>
    </div>
  );
}
export default ModalUploadPhoto;