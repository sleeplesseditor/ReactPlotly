import PropTypes from "prop-types";
import React from "react";

import "./Toggle.scss";

export const ToggleButton = ({ disabled, label, selected, toggleSelected }) => {
    return (
        <div className="toggle-wrapper">
            <label className="toggle-label" for="dialog-button">{label}</label>
            <div className={`toggle-container ${selected ? "" : "disabled"}`} onClick={!disabled && toggleSelected}>
                <div className={`dialog-button ${selected ? "" : "off"}`} />
            </div>
        </div>
    );
}

ToggleButton.propTypes = {
  selected: PropTypes.bool.isRequired,
  toggleSelected: PropTypes.func.isRequired
};