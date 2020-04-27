// == Import npm
import React from "react";
import { Link } from "react-router-dom";
import Message from "src/components/App/Message";
import PropTypes from "prop-types";

// == Import
import "./style.css";

const SearchResult = ({ result, message }) => {
  let datas = [];
  if (result.candidateResults) {
    datas = result.candidateResults;
  }
  if (result.proximityResults) {
    datas = result.proximityResults;
  }
  return (
    <section id="search-result-main">
      {(message && message !== null) && <Message message={message} />}
      <div className="search-result">
        {datas.length
          ? datas.map(item => (
            <div className="search-result-card card is-small" key={item.id}>
              <div className="card-image">
                <figure className="image image image is-1by1">
                  {item.photo_url ? 
                    <div className="search-item-photo" style={{ backgroundImage: `url(http://localhost:3000/${item.photo_url})` }} /> : 
                    <img
                      src={
                        (item.candidates.gender === "féminin" ? "/images/woman-311607_640.png" : "/images/suit-432222_640.png")
                      }
                      alt="Placeholder image"
                    />
                  }
                </figure>
              </div>
              <div className="card-content">
                <div className="media">
                  <div className="media-content">
                    <p className="title is-4 has-text-grey">{item.surname}</p>
                    <p className="subtitle is-6 has-text-grey">
                      {item.firstname}
                    </p>
                  </div>
                </div>

                <div className="content is-grouped">
                  <p className="subtitle is-6 has-text-grey-light">
                    Age: {item.candidates.age}
                  </p>
                  <p className="subtitle is-6 has-text-grey-light">
                    Cheveux: {item.candidates.hair}
                  </p>
                  <p className="subtitle is-6 has-text-grey-light">
                    Yeux: {item.candidates.eyes}
                  </p>
                  <Link
                    to={{
                      pathname: `/candidate/search/${item.id}`,
                      state: {
                        candidate: item
                      }
                    }}
                    className="secondary-text is-italic"
                  >
                    Voir le profil de ce candidat
                  </Link>
                </div>
              </div>
            </div>
          ))
          : null}
      </div>
    </section>

  );
};

export default SearchResult;
