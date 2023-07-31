import React, { useState } from "react";
import logo from "../assets/images/logo.webp";
import "../assets/scss/navbar.css";
import { GoSearch } from "react-icons/go";
import { BiChevronDown } from "react-icons/bi";
import { TfiClose, TfiEmail } from "react-icons/tfi";
import { AiOutlineCaretDown } from "react-icons/ai";
import TikTok from "../assets/images/tiktok.webp";
import Instagram from "../assets/images/instagram.webp";
import Linkedine from "../assets/images/linkedine.webp";
import Twitter from "../assets/images/twitter.webp";
import { createSearchParams, useNavigate } from "react-router-dom";

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);
  const [downMenuAbout, setDownMenuAbout] = useState(false);
  const [downMenu, setDownMenu] = useState(false);
  const [search, setSearch] = useState("");

  const navigate = useNavigate();

  function CustomLink({ href, children, ...props }) {
    const path = window.location.pathname;
    return (
      <li>
        <a className={path === href ? "active" : ""} href={href} {...props}>
          {children}
        </a>
      </li>
    );
  }

  const handleKeyDown = event => {
    if (event.key === "Enter" && search.length >= 3) {
      navigate({
        pathname: "/search",
        search: `?${createSearchParams({ q: search })}`
      });
      document.activeElement.blur();
    }
  };

  return (
    <div className="navbar-box container-main">
      <div
        onClick={() => setOpenMenu(false)}
        className={"menu-background " + (openMenu && "active")}
      />
      <div className="logo">
        <a href="/">
          <img src={logo} alt="Helmchron Logo" />
        </a>
      </div>
      <div className="menu">
        <nav>
          <ul className={`${openMenu ? "active" : "menu"}`}>
            <div className="logo-mobile-menu">
              <img src={logo} alt="" />
              <TfiClose
                className="close-menu"
                onClick={() => setOpenMenu(false)}
              />
            </div>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <span
                className="about-us"
                onClick={() => setDownMenuAbout(!downMenuAbout)}
              >
                about us <BiChevronDown />
              </span>
              <ol
                style={{ display: "none" }}
                className={`${downMenuAbout ? "active" : "menu-down"}`}
              >
                <li>
                  <CustomLink href="/about-us/who-are-we">
                    Who are we?
                  </CustomLink>
                </li>
                <li>
                  <CustomLink href="/about-us/our-team">Our team</CustomLink>
                </li>
                <li>
                  <CustomLink href="/about-us/our-vision-and-mission">
                    Our vision and mission
                  </CustomLink>
                </li>
                <li>
                  <CustomLink href="/about-us/our-values">
                    Our values{" "}
                  </CustomLink>
                </li>
              </ol>
            </li>
            <li>
              <span onClick={() => setDownMenu(!downMenu)} className="com-ser">
                competences & services <BiChevronDown />
              </span>
              <ol
                style={{ display: "none" }}
                className={`${downMenu ? "active" : "menu-down"}`}
              >
                <li>
                  <CustomLink href="/competences&services/our-core-competencies">
                    Our core competencies
                  </CustomLink>
                </li>
                <li>
                  <CustomLink href="/competences&services/our-services">
                    Our services
                  </CustomLink>
                </li>
              </ol>
            </li>

            <CustomLink href="/career">career</CustomLink>

            <CustomLink href="/news">news</CustomLink>

            {/* Mreze */}

            <div className="internet-mob">
              <p>
                <b>Let`s</b> interact
              </p>
              <div>
                <a
                  href="https://www.linkedin.com/company/helmchron/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    style={{ marginLeft: 0 }}
                    src={Linkedine}
                    alt="Instagram"
                  />
                </a>
                <a
                  href="https://twitter.com/HelmchronGlobal"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={Twitter} alt="Instagram" />
                </a>
                <a
                  href="https://www.instagram.com/helmchron_global/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={Instagram} alt="Instagram" />
                </a>
                <a
                  href="https://www.tiktok.com/@helmchron_global"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={TikTok} alt="TikTok" />
                </a>
              </div>
            </div>

            {/* Mreze */}
          </ul>
        </nav>
      </div>
      <div className="search">
        <input
          type="text"
          placeholder="Search"
          value={search}
          onChange={e => setSearch(e.target.value)}
          onKeyUp={handleKeyDown}
        />
        
        <ul>
          <li>
            <div className="lng-change" onClick={() => setDownMenu(!downMenu)}>
              EN <AiOutlineCaretDown className="down-icon"/>
            </div>

            <ol style={{ display: "none" }}
                className={`${downMenu ? "active" : "lng-menu"}`}>
              <li><a href="/">EN</a></li>
              <li><a href="/">SR</a></li>
              <li><a href="/">GR</a></li>
            </ol>
          </li>

          <li>
            <div className="email-mobile">
              <a href="/contact">
                <TfiEmail className="email-icon"/>
              </a>
            </div>
          </li>

          <li>
            <div className="search-mobile">
              <GoSearch className="search-icon"/>
            </div>
          </li>
        </ul>
        <div className="burger-icon" onClick={() => setOpenMenu(!openMenu)}>
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
      </div>
    </div>
  );
}
