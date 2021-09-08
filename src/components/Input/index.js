import React from "react";
import "./styles.css";

export const Input = ({ type, name, handleInputs, icon, value }) => {
    return (
        <label className="style_input">
            <div className="box_icon">
                <img src={icon} alt={name} />
            </div>
            <input
                type={type}
                onChange={handleInputs}
                name={name}
                value={value}
            />
        </label>
    );
};
