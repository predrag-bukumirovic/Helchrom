// ActionButton.jsx
import React, { useState } from "react";
import { FaUniversalAccess } from "react-icons/fa";
import "./accessinility.css";
import Drawer from "./Drawer";

export default function ActionButton() {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const handleOpen = () => setDrawerOpen(true);
  const handleClose = () => setDrawerOpen(false);

  return (
    <>
      <FaUniversalAccess className="action-btn" onClick={handleOpen} />
      <Drawer isOpen={isDrawerOpen} onClose={handleClose} /> {/* Prosleđujemo onClose */}
    </>
  );
}
