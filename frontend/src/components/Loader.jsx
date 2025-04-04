// Loader.js
import React, { useEffect, useState } from "react";
import "../assets/scss/loader.css"; // Uvezi CSS stilove]

const Loader = ({ onLoaded, isInitial }) => {
  const [loading, setLoading] = useState(true);

  useEffect(
    () => {
      const timer = setTimeout(() => {
        setLoading(false);
        onLoaded(); // Pozivaj funkciju kada se učitavanje završi
      }, 800); // Postavi vreme trajanja učitavanja (3 sekunde)

      return () => clearTimeout(timer); // Očisti timer kada se komponenta unmountuje
    },
    [onLoaded]
  );

  return (
    <div className={`loader ${loading ? "active" : ""}`}>
      <div className="logo-loader">
        {Array.from("HELMCHRON").map((letter, index) =>
          <div key={index} className="letter" style={{ "--i": index }}>
            {letter}
          </div>
        )}
      </div>
    </div>
  );
};

export default Loader;
