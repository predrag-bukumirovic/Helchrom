import React, { useEffect } from "react";
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

export default function Nav({ options, setOptions }) {
  const { contrastOption, highlightLinks } = options;

  useEffect(
    () => {
      // localStorage.setItem("contrastOption", options.contrastOption);
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

      switch (options.contrastOption) {
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
    [options.contrastOption]
  );

  useEffect(
    () => {
      localStorage.setItem("highlightLinks", JSON.stringify(highlightLinks));
    },
    [highlightLinks]
  );

  useEffect(
    () => {
      localStorage.setItem("contrastOption", JSON.stringify(contrastOption));
    },
    [contrastOption]
  );

  useEffect(
    () => {
      const links = document.querySelectorAll("a"); // Selektuj sve linkove
      links.forEach(link => {
        if (highlightLinks) {
          link.classList.add("highlighted-link"); // Dodaj klasu ako je opcija aktivna
        } else {
          link.classList.remove("highlighted-link"); // Ukloni klasu ako je deaktivirana
        }
      });
    },
    [highlightLinks]
  );

  const handleOptionClick = optionId => {
    setOptions(prevOptions => {
      switch (optionId) {
        case "contrast":
          return {
            ...prevOptions,
            contrastOption: (prevOptions.contrastOption + 1) % 4
          };
        case "highlight-links":
          return {
            ...prevOptions,
            highlightLinks: !prevOptions.highlightLinks
          };
        case "zoom":
          return {
            ...prevOptions,
            zoomLevel: Math.min(prevOptions.zoomLevel + 0.25, 2)
          };
        default:
          return prevOptions;
      }
    });
  };

  const navOptions = [
    {
      id: "contrast",
      label: () => getContrastText(),
      icon: () => getContrastIcon(),
      isActive: options.contrastOption > 0
    },
    {
      id: "highlight-links",
      label: "Highlight Links",
      icon: <IoLinkOutline />,
      isActive: options.highlightLinks
    },
    {
      id: "zoom",
      label: () => `Zoom`,
      icon: <TbTextSize />
    },
    {
      id: "text-spacing",
      label: "Text Spacing",
      icon: <RiTextSpacing />,
      isActive: options.zoomLevel > 1
    },
    { id: "hide-images", label: "Hide Images", icon: <LuImageOff /> },
    { id: "cursor", label: "Cursor", icon: <RxCursorArrow /> },
    { id: "line-height", label: "Line Height", icon: <RxLineHeight /> },
    { id: "text-align", label: "Text Align", icon: <GrTextAlignFull /> }
  ];

  const getContrastIcon = () => {
    switch (options.contrastOption) {
      case 1:
        return (
          <img style={{ width: 40 }} src={invert} alt="Invert" loading="lazy" />
        );
      case 2:
        return (
          <img style={{ width: 40 }} src={dark} alt="Dark" loading="lazy" />
        );
      case 3:
        return (
          <img style={{ width: 40 }} src={light} alt="Light" loading="lazy" />
        );
      default:
        return <IoMdContrast />;
    }
  };

  const getContrastText = () => {
    switch (options.contrastOption) {
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
