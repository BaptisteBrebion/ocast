import React from 'react';
import { team, technos } from "./data-team";
import "./style.css";

const Team = () => (
  <>
    <section id="team-section">
      <h2 className="title is-2 has-text-centered">L' équipe</h2>
      <div className="team">
        {team.map((data) => {
          return (
            <div className="team-card card" key={data.lastname}>
              <div className="card-image">
                <figure className="image is-1by1">
                  <img src={data.avatar_url} alt="Placeholder image" />
                </figure>
              </div>
              <div className="card-content">
                <div className="media">
                  <div className="media-left">
                  </div>
                  <div className="media-content">
                    <p className="title is-4">{data.lastname}</p>
                    <p className="subtitle is-6">{data.firstname}</p>
                  </div>
                </div>

                <div className="content">
                  <h4 className="title is-5">Rôle:</h4>
                  <ul>
                    {data.role.map((item) => {
                      return (
                        <li key={item}>{item}</li>
                      )
                    })}
                  </ul>
                </div>
                <h4 className="title is-5">Formation: </h4>
                <div className="content">{data.formation}</div>
              </div>
            </div>
          )
        })}
      </div>

    </section>

    <section id="technos-section">
      <h2 className="title is-2 has-text-centered">Les technos</h2>
      <div className="technos">
        {technos.map((techno) => {
          return (
            <div className="techno-card card" key={techno.name}>
              <div className="card-content">
                <img className="techno-logo" src={techno.logo} alt={techno.name} />
                <h4 className="title is-6">{techno.name}</h4>
                <p className="is-size-7">
                  {techno.presentation}
                </p>
              </div>
              <footer className="card-footer">
                <p className="card-footer-item">
                  <span>
                    View on <a target="_blank" href={techno.link}>{techno.name}</a>
                  </span>
                </p>
              </footer>
            </div>
          )
        })}

      </div>

    </section>
  </>
);

export default Team;