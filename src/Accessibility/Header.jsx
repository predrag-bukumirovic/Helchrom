import React from "react";
import "./accessinility.css";

export default function Header({ onClose }) {
  return (
    <header>
      <span>Accessibility Menu</span>
      <button onClick={onClose}>x</button>
    </header>
  );
}
