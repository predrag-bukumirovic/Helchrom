import React, { useEffect, useState } from "react";
import "./styles/accessinility.css";

import { IoMdContrast } from "react-icons/io";
import { IoLinkOutline } from "react-icons/io5";
import { TbTextSize } from "react-icons/tb";
import { RiTextSpacing } from "react-icons/ri";
import { LuImageOff } from "react-icons/lu";
import { RxCursorArrow, RxLineHeight } from "react-icons/rx";
import { GrTextAlignFull } from "react-icons/gr";

import invert from "./img/1.png";
import dark from "./img/2.png";
import light from "./img/3.png";

export default function Nav({ contrastOption, setContrastOption }) {
  const [highlightLinks, setHighlightLinks] = useState(() => {
    const savedHighlightLinks = localStorage.getItem("highlightLinks");
    return savedHighlightLinks ? JSON.parse(savedHighlightLinks) : false;
  });

  useEffect(
    () => {
      localStorage.setItem("contrastOption", contrastOption);
      const body = document.body;
      const html = document.documentElement;

      body.classList.remove(
        "contrast-invert",
        "contrast-high",
        "contrast-light"
      );
      html.classList.remove(
        "contrast-invert",
        "contrast-high",
        "contrast-light"
      );

      switch (contrastOption) {
        case 1:
          html.classList.add("contrast-invert");
          break;
        case 2:
          body.classList.add("contrast-high");
          break;
        case 3:
          body.classList.add("contrast-light");
          break;
        default:
          break;
      }
    },
    [contrastOption]
  );

  useEffect(
    () => {
      const links = document.querySelectorAll("a");
      if (highlightLinks) {
        links.forEach(link => link.classList.add("highlighted-link"));
      } else {
        links.forEach(link => link.classList.remove("highlighted-link"));
      }
      localStorage.setItem("highlightLinks", JSON.stringify(highlightLinks));
    },
    [highlightLinks]
  );

  const handleOptionClick = optionId => {
    switch (optionId) {
      case "contrast":
        setContrastOption(prev => (prev + 1) % 4);
        break;
      case "highlight-links":
        setHighlightLinks(prev => !prev);
        break;
      case "bigger-text":
        // Dodajte logiku za Bigger Text
        break;
      case "text-spacing":
        // Dodajte logiku za Text Spacing
        break;
      case "hide-images":
        // Dodajte logiku za Hide Images
        break;
      case "cursor":
        // Dodajte logiku za Cursor
        break;
      case "line-height":
        // Dodajte logiku za Line Height
        break;
      case "text-align":
        // Dodajte logiku za Text Align
        break;
      default:
        break;
    }
  };

  const navOptions = [
    {
      id: "contrast",
      label: () => getContrastText(),
      icon: () => getContrastIcon(),
      isActive: contrastOption > 0
    },
    {
      id: "highlight-links",
      label: "Highlight Links",
      icon: <IoLinkOutline />,
      isActive: highlightLinks
    },
    { id: "bigger-text", label: "Bigger Text", icon: <TbTextSize /> },
    { id: "text-spacing", label: "Text Spacing", icon: <RiTextSpacing /> },
    { id: "hide-images", label: "Hide Images", icon: <LuImageOff /> },
    { id: "cursor", label: "Cursor", icon: <RxCursorArrow /> },
    { id: "line-height", label: "Line Height", icon: <RxLineHeight /> },
    { id: "text-align", label: "Text Align", icon: <GrTextAlignFull /> }
  ];

  const getContrastIcon = () => {
    switch (contrastOption) {
      case 1:
        return <img style={{ width: 40 }} src={invert} alt="Invert" />;
      case 2:
        return <img style={{ width: 40 }} src={dark} alt="Dark" />;
      case 3:
        return <img style={{ width: 40 }} src={light} alt="Light" />;
      default:
        return <IoMdContrast />;
    }
  };

  const getContrastText = () => {
    switch (contrastOption) {
      case 1:
        return "Invert Colors";
      case 2:
        return "High Contrast";
      case 3:
        return "Light Mode";
      default:
        return "Contrast +";
    }
  };

  return (
    <nav className="nav-accessibility">
      <ul>
        {navOptions.map(option =>
          <li key={option.id}>
            <button
              onClick={() => handleOptionClick(option.id)}
              className={option.isActive ? "active-option" : ""}
            >
              {typeof option.icon === "function" ? option.icon() : option.icon}
              <p>
                {typeof option.label === "function"
                  ? option.label()
                  : option.label}
              </p>
            </button>
          </li>
        )}
      </ul>
    </nav>
  );
}
