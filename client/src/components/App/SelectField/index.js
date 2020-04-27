// == Import npm
import React, { Fragment } from "react";
import PropTypes from "prop-types";

// == Import
import "./style.css";

const FieldSelect = ({ datas, changeValue }) => {
  const handleChangeValue = event => {
    changeValue(event.target.value, event.target.name);
  };

  return (
    <Fragment>
      {datas.map(item => (
        <div key={item.name} className="select column is-3">
          <div className="field">
            <label className="label is-small">{item.label}</label>
            <div className="control">
              <div>
                <select name={item.name} onChange={handleChangeValue}>
                  <option defaultValue="" selected disabled>
                    {item.placeholder}
                  </option>
                  {item.data.map(val => (
                    <option key={val} defaultValue={val}>
                      {val}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
      ))}
    </Fragment>
  );
};

FieldSelect.proTypes = {
  datas: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired
    })
  ),
  changeValue: PropTypes.func.isRequired
};

export default FieldSelect;
