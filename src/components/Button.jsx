import React from "react";
import "./Button.css";

const Button = ({ text }) => {
  return (
    <div className="section2__cta">
            <button className="section2__cta-button">
              {text}
            </button>
          </div>
  );
};

export default Button;
