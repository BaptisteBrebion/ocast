// == Import npm
import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

// import
import "./index.css";

// == Composant
import ReportProfileButton from "src/components/App/ReportProfileButton";

const RecruiterProfileConv = ({ id, recruiter, seeRecruiterProfile }) => {
  useEffect(() => {
    seeRecruiterProfile(id);
  }, []);

  let history = useHistory();

  return (
    <section id="recruiter-profile">
      {recruiter !== null && (
        <>
          <header className="profile secondary">
            <a
              onClick={() => history.push("/candidate/messages")}
              className="button is-outlined"
            >
              &larr; Retour à la messagerie
            </a>
            <div className="profile-and-photo">
              <div className="profile-photo has-text-black">
                {recruiter.photo_url ? (
                  <div
                    className="profile-item-photo"
                    style={{
                      backgroundImage: `url(http://localhost:3000/${recruiter.photo_url})`,
                    }}
                  />
                ) : (
                    <img
                      src="/images/bureau.jpg"
                      alt="Placeholder image"
                    />
                  )}
              </div>

              <div className="recruiter-profile-details info column is-half">
                <h2 className="is-size-4 has-text-centered primary-text">
                  Informations Profil
                </h2>
                <p>
                  <span className="key has-text-weight-bold">Nom:</span>
                  {recruiter.surname}
                </p>
                <p>
                  <span className="key has-text-weight-bold">Prénom:</span>
                  {recruiter.firstname}
                </p>
                {recruiter.city && recruiter.country ? (
                  <p>
                    <span className="key has-text-weight-bold">
                      Ville et pays:
                    </span>
                    {recruiter.city + ", " + recruiter.country}
                  </p>
                ) : (
                  ""
                )}
              </div>
            </div>
          </header>

          <div className="recruiter-profile-details column is-half">
            <h2 className="is-size-4 has-text-centered primary-text">
              Informations Professionnelles
            </h2>
            {recruiter.recruiters.society && (
              <p>
                <span className="key has-text-weight-bold">Société:</span>
                {recruiter.recruiters.society}
              </p>
            )}
            {recruiter.recruiters.siret && (
              <p>
                <span className="key has-text-weight-bold">Siret:</span>
                {recruiter.recruiters.siret}
              </p>
            )}
            {recruiter.recruiters.filmography && (
              <p>
                <span className="key has-text-weight-bold">Filmographie:</span>
                {recruiter.recruiters.filmography}
              </p>
            )}
            {recruiter.website && (
              <p>
                <span className="key has-text-weight-bold">Site web:</span>
                {recruiter.website}
              </p>
            )}
          </div>

          <div className="field has-text-centered has-text-link">
            <ReportProfileButton userToReportId={recruiter.id} size="" />
          </div>
        </>
      )}
    </section>
  );
};

// == Export
export default RecruiterProfileConv;
