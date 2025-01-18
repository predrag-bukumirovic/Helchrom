import React from "react";
import "./styles/accessinility.css";

export default function Button({ options, setOptions }) {
  const handleReset = () => {
    setOptions({
      contrastOption: 0,
      highlightLinks: false,
      biggerText: false,
      textSpacing: false,
      hideImages: false,
      cursor: false,
      lineHeight: false,
      textAlign: false
    });
  };

  return (
    <div className="reset-btn">
      <button onClick={handleReset}>Reset All Settings</button>
    </div>
  );
}
