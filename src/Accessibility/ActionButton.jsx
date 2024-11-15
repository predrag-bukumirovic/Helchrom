// ActionButton.jsx
import React, { useState } from "react";
import { FaUniversalAccess } from "react-icons/fa";
import "./styles/accessinility.css";
import Drawer from "./Drawer";
import { FaCheck } from "react-icons/fa";

export default function ActionButton({ contrastOption }) {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const handleOpen = () => setDrawerOpen(true);
  const handleClose = () => setDrawerOpen(false);

  return (
    <div>
      <FaUniversalAccess className="action-btn" onClick={handleOpen} />
      {contrastOption > 0 && <FaCheck className="check-icon-on-button" />}
      <Drawer
        className="no-contrast"
        isOpen={isDrawerOpen}
        onClose={handleClose}
      />{" "}
      {/* Prosleđujemo onClose */}
    </div>
  );
}
