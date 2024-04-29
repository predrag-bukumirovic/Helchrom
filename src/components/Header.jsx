import React from "react";
import "../assets/scss/header.scss";
import { GoGlobe } from "react-icons/go";
import Navbar from "../components/Navbar";

export default function Header() {
  return (
    <div className="w-100">
      <div className="header-box">
        <div className="header-links container-main">
          <div />
          <div style={{ display: "flex", float: "right" }}>
            <p className="lng">
              <GoGlobe className="icon-lng" />ENGLISH
            </p>
          </div>
        </div>
        <Navbar />
      </div>
    </div>
  );
}
