/* eslint-disable jsx-a11y/label-has-associated-control */
// == Import npm
import React from "react";
import PropTypes from "prop-types";
// == Import

// == Composant
const FieldText = ({ htmlFor, name, isRequired, type, placeholder, changeValue, value }) => {
  const handleChangeValue = (event) => {
    changeValue(event.target.value, event.target.name)
  }
  return (
    <div className="field">
      <label htmlFor={htmlFor} className="label">
        {placeholder}
      </label>
      <div className="control">
        <input
          id={htmlFor}
          name={name}
          required={isRequired ? "required" : ""}
          className="input primary-text"
          type={type}
          placeholder={placeholder}
          onChange={handleChangeValue}
          defaultValue={value}
        />
      </div>
    </div>
  );
}

FieldText.propTypes = {
  htmlFor: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isRequired: PropTypes.bool.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string
};

FieldText.defaultProps = {
  value: "",
};

// == Export
export default FieldText;
