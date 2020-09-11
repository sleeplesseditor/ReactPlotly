import PropTypes from "prop-types";
import React from "react";

import "./Toggle.scss";

export const ToggleButton = ({ disabled, label, toggleSelected }) => {
    return (
        <div className="toggle-wrapper">
            <label className="info-label" htmlFor="toggle-button">{label}</label>
            <label className="toggle-label">
                <input type="checkbox" id='toggle-button' disabled={disabled} onClick={toggleSelected} />
                <span className="slider round"></span>
            </label>
        </div>
    );
}

ToggleButton.propTypes = {
  selected: PropTypes.bool,
  toggleSelected: PropTypes.func.isRequired
};