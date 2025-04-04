// ActionButton.jsx
import React from "react";
import { FaUniversalAccess } from "react-icons/fa";
import "./styles/accessinility.css";
// import Drawer from "./Drawer";
import { FaCheck } from "react-icons/fa";

export default function ActionButton({ options, setOptions, onOpen }) {
  // const [isDrawerOpen, setDrawerOpen] = useState(false);

  // const handleOpen = () => setDrawerOpen(true);
  // const handleClose = () => setDrawerOpen(false);

  // Proveravamo da li je bilo koja opcija aktivna
  const isAnyOptionActive = Object.values(options).includes(true);

  return (
    <div>
      <FaUniversalAccess className="action-btn" onClick={onOpen} />
      {isAnyOptionActive > 0 && <FaCheck className="check-icon-on-button" />}
    </div>
  );
}
