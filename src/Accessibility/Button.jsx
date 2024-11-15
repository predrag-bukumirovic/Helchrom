import React from "react";
import "./styles/accessinility.css";

export default function Button({ onReset }) {
  const handleReset = () => {
    localStorage.removeItem("contrastOption");
    localStorage.removeItem("highlightLinks");

    if (onReset) {
      onReset();
    }
  };

  return (
    <div className="reset-btn">
      <button onClick={handleReset}>Reset All Settings</button>
    </div>
  );
}
