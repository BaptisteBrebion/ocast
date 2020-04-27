// == Import npm
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import SearchResult from "src/containers/App/SearchResult";
import SelectField from "src/containers/App/SelectField";
import RangeSlider from "src/containers/App/RangeSlider";
import datas from "../../../data/selectData";
import multiSelectData from "src/data/multiSelectData";
import MultiSelectFieldRecruiter from "src/containers/App/MultiSelectFieldRecruiter";

// == Import
import "./style.css";

const SearchPage = ({
  searchCandidate,
  isLoading,
  chargeLoader,
  age_min,
  age_max,
  size_min,
  size_max
}) => {

  const [filtersOpened, setFiltersOpened] = useState(true);
  const [smallScreen, setSmallScreen] = useState(false);

  const screenSize = () => {
    if (window.innerWidth <= 500) {
      setFiltersOpened(true)
      setSmallScreen(true);
    } else {
      setFiltersOpened(true)
      setSmallScreen(false);
    }
  };

  const handleToogleFilters = () => {
    setFiltersOpened(!filtersOpened);
  }

  useEffect(() => {
    screenSize();
    window.addEventListener("resize", screenSize);

    return () => window.removeEventListener("resize", screenSize)

  }, []);

  const handleSubmit = event => {
    event.preventDefault();
    searchCandidate();
    chargeLoader();
    if (smallScreen) {
      setFiltersOpened(false)
    }
  };

  return (
    <div className="search-page">
      {smallScreen &&
        <button
          className="search-page--filters-button secondary"
          onClick={handleToogleFilters}>
          <span className="is-size-6">Rechercher</span>
          <svg style={{ width: "24px", height: "24px" }}
            viewBox="0 0 24 24">
            <path fill="currentColor" d="M3,17V19H9V17H3M3,5V7H13V5H3M13,21V19H21V17H13V15H11V21H13M7,9V11H3V13H7V15H9V9H7M21,13V11H11V13H21M15,9H17V7H21V5H17V3H15V9Z" />
          </svg>
        </button>
      }

      {filtersOpened &&
        <form className="search-page-filters secondary">

          {/* loader de la recherche */}
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
              Recherche en cours
              </span>
          </div>

          <h1 className="title has-text-weight-light has-text-centered">Saisissez votre recherche</h1>

          <div className="filter-wrap">
            <div className="field field-body">
              <span className="control">
                <RangeSlider value={age_min} name="age_min" label="Age minimum:" placeholder="18" />
              </span>
              <span className="control">
                <RangeSlider value={age_max} name="age_max" label="Age maximum:" placeholder="80" />
              </span>
            </div>

            <div className="field field-body">
              <span className="control">
                <RangeSlider
                  value={size_min}
                  name="size_min"
                  label="Taille minimum:"
                  placeholder="140"
                />
              </span>
              <span className="control">
                <RangeSlider
                  value={size_max}
                  name="size_max"
                  label="Taille maximum:"
                  placeholder="180"
                />
              </span>
            </div>
          </div>
          <div className="columns is-multiline">
            <SelectField datas={datas} />
            <MultiSelectFieldRecruiter multiSelectData={multiSelectData} />
          </div>
          <button className="filter-wrap-button primary-button" onClick={handleSubmit}>
            Valider la recherche
          </button>
        </form>
      }

      <SearchResult />
    </div>
  );
};

SearchPage.propTypes = {
  searchCandidate: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  chargeLoader: PropTypes.func.isRequired,
  age_min: PropTypes.number,
  age_max: PropTypes.number,
  size_min: PropTypes.number,
  size_max: PropTypes.number
};

export default SearchPage;
