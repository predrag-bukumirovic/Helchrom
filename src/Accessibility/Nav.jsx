import React, { useState } from "react";
import "./accessinility.css";

import { IoMdContrast } from "react-icons/io";
import { IoLinkOutline, IoInvertMode } from "react-icons/io5";
import { TbTextSize } from "react-icons/tb";
import { RiTextSpacing } from "react-icons/ri";
import { LuImageOff } from "react-icons/lu";
import { RxCursorArrow, RxLineHeight } from "react-icons/rx";
import { GrTextAlignFull } from "react-icons/gr";

export default function Nav() {
  const [contrastOption, setContrastOption] = useState(0); // Praćenje stanja kontrasta

  // Funkcija za prebacivanje opcija kontrasta
  const handleContrastClick = () => {
    setContrastOption(prev => (prev + 1) % 3); // Rotira između 0, 1 i 2
  };

  // Promena ikone na osnovu opcije kontrasta
  const getContrastIcon = () => {
    switch (contrastOption) {
      case 1:
        return <IoInvertMode />; // Ikona za inverzne boje
      case 2:
        return <IoMdContrast style={{ color: "orange" }} />; // Ikona sa naglašenom bojom
      default:
        return <IoMdContrast />; // Podrazumevana ikona
    }
  };

  return (
    <nav className="nav-accessibility">
      <ul>
        <li>
          <button
            onClick={handleContrastClick}
            className={contrastOption > 0 ? "active-contrast" : ""}
          >
            {getContrastIcon()}
            <p>Contrast +</p>
            <div className="line-access">
              <div
                style={{
                  backgroundColor: contrastOption === 0 ? "orange" : ""
                }}
              />
              <div
                style={{
                  backgroundColor: contrastOption === 1 ? "orange" : ""
                }}
              />
              <div
                style={{
                  backgroundColor: contrastOption === 2 ? "orange" : ""
                }}
              />
            </div>
          </button>
        </li>
        <li>
          <button>
            <IoLinkOutline />
            <p>Highlight Links</p>
          </button>
        </li>
        <li>
          <button>
            <TbTextSize />
            <p>Bigger Text</p>
          </button>
        </li>
        <li>
          <button>
            <RiTextSpacing />
            <p>Text Spacing</p>
          </button>
        </li>
        <li>
          <button>
            <LuImageOff />
            <p>Hide Images</p>
          </button>
        </li>
        <li>
          <button>
            <RxCursorArrow />
            <p>Cursor</p>
          </button>
        </li>
        <li>
          <button>
            <RxLineHeight />
            <p>Line Height</p>
          </button>
        </li>
        <li>
          <button>
            <GrTextAlignFull />

            <p>Text Align</p>
          </button>
        </li>
      </ul>
    </nav>
  );
}
