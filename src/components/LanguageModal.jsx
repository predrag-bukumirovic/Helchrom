// LanguageModal.jsx
import React from "react";
import Modal from "react-modal";

Modal.setAppElement("#root"); // Ovo je važno za pristupačnost

const LanguageModal = ({ isOpen, onRequestClose, onSelectLanguage }) => {
  const handleLanguageChange = lang => {
    localStorage.setItem("selectedLanguage", lang);
    onSelectLanguage(lang);
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Select Language"
      style={{
        content: {
          top: "50%",
          left: "50%",
          right: "auto",
          bottom: "auto",
          transform: "translate(-50%, -50%)",
          padding: "20px",
          width: "300px",
          background: "white",
          borderRadius: "10px"
        },
        overlay: { backgroundColor: "rgba(0, 0, 0, 0.75)" }
      }}
    >
      <h2>Select Language</h2>
      <ul>
        <li onClick={() => handleLanguageChange("English")}>English</li>
        <li onClick={() => handleLanguageChange("Serbian")}>Serbian</li>
        {/* Dodaj ostale jezike ovde */}
      </ul>
      <button onClick={onRequestClose}>Close</button>
    </Modal>
  );
};

export default LanguageModal;
