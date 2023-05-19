import React from "react";
import "../assets/scss/header.scss";
import { GoGlobe } from "react-icons/go";
import Navbar from "../components/Navbar";

export default function Header() {
  return (
    <div className="w-100">
      <div className="header-box container-main">
        <div className="header-links">
          <a className="lng" href="/">
            <GoGlobe className="icon-lng" />ENGLISH
          </a>
          <a href="/contact">CONTACT</a>
        </div>
        <Navbar />
      </div>
    </div>
  );
}
