// == Import npm
import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

// import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";
import "./style.css";

// == Composant
import ReportProfileButton from "src/components/App/ReportProfileButton";

const SearchProfile = (props) => {
  const { candidate } = props.location.state;
  let history = useHistory();

  useEffect(() => {
    window.scroll(0, 0);
  }, [candidate]);

  const handleSaveReceiver = () => {
    props.removeMessage();
    props.saveMessageReceiver(props.match.params.slug);
  };
  return (
    <section id="search-profile">
      <header className="header-profile secondary">
        <a
          onClick={() => history.push("/recruiter/search")}
          className="button is-outlined"
        >
          &larr; Retour à la recherche
        </a>
        <div className="profile-photo has-text-black">
          {candidate.photo_url ? (
            <div
              className="profil-item-photo"
              style={{
                backgroundImage: `url(http://localhost:3000/${candidate.photo_url})`,
              }}
            />
          ) : (
            <img
              className="image is-128x128"
              name="photo_url"
              src={
                candidate.candidates.gender === "féminin"
                  ? "/images/woman-311607_640.png"
                  : "/images/suit-432222_640.png"
              }
            />
          )}
        </div>
        <div className="details-profile info column is-half">
          <h2 className="is-size-4 has-text-centered primary-text">
            Informations Profil
          </h2>
          <p>
            <span className="key has-text-weight-bold">Nom:</span>
            {candidate.surname}
          </p>
          <p>
            <span className="key has-text-weight-bold">Prénom:</span>
            {candidate.firstname}
          </p>
          <p>
            <span className="key has-text-weight-bold">Age:</span>
            {candidate.candidates.age
              ? candidate.candidates.age
              : "non renseigné"}
          </p>
          <p>
            <span className="key has-text-weight-bold">Genre:</span>
            {candidate.candidates.gender
              ? candidate.candidates.gender
              : "non renseigné"}
          </p>
          <p>
            {candidate.candidates.availability
              ? "Disponible"
              : "Non-disponible"}
          </p>
        </div>
      </header>

      <div className="details-profile details-physiques column is-half">
        <h2 className="is-size-4 has-text-centered primary-text">
          Critères physiques
        </h2>
        <p>
          <span className="key has-text-weight-bold">Taille:</span>
          {candidate.candidates.size
            ? candidate.candidates.size
            : "non renseigné"}
        </p>
        <p>
          <span className="key has-text-weight-bold">Cheveux:</span>
          {candidate.candidates.hair
            ? candidate.candidates.hair
            : "non renseigné"}
        </p>
        <p>
          <span className="key has-text-weight-bold">Yeux:</span>
          {candidate.candidates.eyes
            ? candidate.candidates.eyes
            : "non renseigné"}
        </p>
        <p>
          <span className="key has-text-weight-bold">Langue:</span>
          {candidate.candidates.language
            ? candidate.candidates.language
            : "non renseigné"}
        </p>

        <ol className="skills-list">
          <p>
            <span className="key has-text-weight-bold">
              Spécialité et Niveau
            </span>
            :
          </p>
          {candidate.candidates.skills && candidate.candidates.skills.length
            ? candidate.candidates.skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))
            : "non renseigné"}
        </ol>

        <p>
          <span className="key has-text-weight-bold">Handicap:</span>
          {candidate.candidates.handicap
            ? candidate.candidates.handicap
            : "non renseigné"}
        </p>
        <p>
          <span className="key has-text-weight-bold">Corpulence:</span>
          {candidate.candidates.corpulence
            ? candidate.candidates.corpulence
            : "non renseigné"}
        </p>
        <p>
          <span className="key has-text-weight-bold">Signes distinctifs:</span>
          {candidate.candidates.distinctive_sign
            ? candidate.candidates.distinctive_sign
            : "non renseigné"}
        </p>
        <p>
          <span className="key has-text-weight-bold">Ethnicité:</span>
          {candidate.candidates.ethnicity
            ? candidate.candidates.ethnicity
            : "non renseigné"}
        </p>
      </div>

      <div className="details-profile column is-half">
        <h2 className="is-size-4 has-text-centered primary-text">
          Formation & Expérience professionnelle
        </h2>
        <p>
          <span className="key has-text-weight-bold">Formations:</span>
          {candidate.candidates.training
            ? candidate.candidates.training
            : "non renseigné"}
        </p>
        <p>
          <span className="key has-text-weight-bold">Expériences:</span>
          {candidate.candidates.experience
            ? candidate.candidates.experience
            : "non renseigné"}
        </p>
      </div>

      <div className="field has-text-centered has-text-link">
        <Link
          onClick={handleSaveReceiver}
          to={{
            pathname: `/recruiter/contact-form/${candidate.id}`,
            state: {
              candidate: candidate,
            },
          }}
          className="button secondary"
        >
          Contactez ce candidat
        </Link>
        <ReportProfileButton userToReportId={candidate.id} size="" />
      </div>
    </section>
  );
};

// == Export
export default SearchProfile;
