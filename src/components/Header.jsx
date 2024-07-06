import React from "react";
import "../assets/scss/header.scss";
import { GoGlobe } from "react-icons/go";
import useScrollDirection from "./useScrollDirection";
import Navbar from "../components/Navbar";

export default function Header() {
  const scrollDirection = useScrollDirection();

  return (
    <div
      className={`header-box ${scrollDirection === "down" ? "hide" : "show"}`}
    >
      <div className="header">
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
