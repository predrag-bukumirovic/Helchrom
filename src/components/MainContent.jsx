import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Loader from "./components/Loader";

const MainContent = ({ isInitialLoad }) => {
  const location = useLocation();
  const [showLoader, setShowLoader] = useState(false);

  useEffect(
    () => {
      // Pokaži loader prilikom promene stranice
      setShowLoader(true);
      const timer = setTimeout(() => setShowLoader(false), 1000); // Trajanje loadera pri navigaciji

      return () => clearTimeout(timer);
    },
    [location]
  );

  return (
    <div>
      {showLoader
        ? <Loader onLoaded={() => {}} isInitial={false} /> // Loader bez slova
        : <div className="page-content">
            {/* Sadržaj stranice */}
          </div>}
    </div>
  );
};

export default MainContent;
