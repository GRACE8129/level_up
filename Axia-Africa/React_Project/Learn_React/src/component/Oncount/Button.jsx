import React from "react";

const Button = ({ onClick, label }) => {
  return (
    <button onClick={onClick} className="counter-button">
      {label}
    </button>
  );
};

export default Button;
