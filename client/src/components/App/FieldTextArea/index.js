// == Import npm
import React from "react";
import PropTypes from "prop-types";

// == Composant
const FieldTextArea = ({
  htmlFor,
  name,
  isRequired,
  type,
  placeholder,
  changeValue,
  value
}) => {
  const handleChangeValue = event => {
    changeValue(event.target.value, event.target.name);
  };

  return (
    <div className="field">
      {/* <label htmlFor={htmlFor} className="label">
        {placeholder}
      </label> */}
      <div className="control">
        <textarea
          id={htmlFor}
          name={name}
          required={isRequired ? "required" : ""}
          className="textarea has-fixed-size"
          type={type}
          placeholder={placeholder}
          onChange={handleChangeValue}
          value={value}
        />
      </div>
    </div>
  );
};

FieldTextArea.propTypes = {
  value: PropTypes.string,
  htmlFor: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isRequired: PropTypes.bool.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string
};

FieldTextArea.defaultProps = {
  value: ""
};

// == Export
export default FieldTextArea;
