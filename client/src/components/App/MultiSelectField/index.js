import React from "react";
import PropTypes from "prop-types";

import Select from "react-select";
import "./style.css";

const MultiSelectData = ({ multiSelectData, changeValue }) => {
  const handleChange = selectedOptions => {
    const selectedOptionsArr = [];
    selectedOptions.map(selectedOption => {
      selectedOptionsArr.push(selectedOption.value);
    });
    changeValue(selectedOptionsArr, "skills");
  };
  return (
    <>
      {multiSelectData.map(item => (
        <div className="multi column is-3" key={item.name}>
          <label className="label is-small">{item.label}</label>
          <Select
            isMulti
            options={item.data}
            name={item.name}
            onChange={handleChange}
          />
        </div>
      ))}
    </>
  );
};

MultiSelectData.propTypes = {
  multiSelectData: PropTypes.array.isRequired,
  changeValue: PropTypes.func.isRequired
};

export default MultiSelectData;
