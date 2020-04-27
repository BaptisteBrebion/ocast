// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import './style.css';

const RangeSlider = ({ name, label, placeholder, changeSearchValue, value }) => {
  const handleChangeValue = (event) => {
    changeSearchValue(event.target.value, event.target.name)
  }
  return (
    <div className="search-field field">
      <label className="label is-small">{label}</label>
      <div className="control">
        <input 
          value={value} 
          onChange={handleChangeValue} 
          className="search-input input is-small" 
          type="text" placeholder="Text" 
          name={name} 
          placeholder={placeholder}
        />
      </div>
    </div>
  )
};

RangeSlider.proTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  changeSearchValue: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
}

export default RangeSlider;