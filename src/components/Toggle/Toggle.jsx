import PropTypes from "prop-types";
import React from "react";

import "./Toggle.scss";

export const ToggleButton = ({ label, selected, toggleSelected }) => {
    return (
        <div className="toggle-wrapper">
            <label className="toggle-label" for="dialog-button">{label}</label>
            <div className={`toggle-container ${selected ? "" : "disabled"}`} onClick={toggleSelected}>
                <div className={`dialog-button ${selected ? "" : "disabled"}`} />
            </div>
        </div>
    );
}

ToggleButton.propTypes = {
  selected: PropTypes.bool.isRequired,
  toggleSelected: PropTypes.func.isRequired
};