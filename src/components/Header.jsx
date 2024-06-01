import React, { useEffect, useState } from "react";
import "../assets/scss/header.scss";
import { GoGlobe } from "react-icons/go";
import Navbar from "../components/Navbar";

export default function Header() {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(
    () => {
      const handleScroll = () => {
        const currentScrollPos = window.pageYOffset;
        setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 200);
        setPrevScrollPos(currentScrollPos);
      };

      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    },
    [prevScrollPos, visible]
  );
  return (
    <div className="header-box">
      <div className={visible ? "header" : "header-box hidden"}>
        <div className="header-links container-main">
          <div />
          <div>
            <p className="lng">
              <GoGlobe className="icon-lng" />ENGLISH
            </p>
          </div>
        </div>
      </div>
      <Navbar />
    </div>
  );
}
