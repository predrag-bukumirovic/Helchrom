import React, { useEffect, useState } from "react";
import Header from "./Header";
import Nav from "./Nav";
import Button from "./Button";
import "./styles/accessinility.css";
import { FaCheck } from "react-icons/fa";

export default function Drawer({ isOpen, onClose, options, setOptions }) {
  const [showNotification, setShowNotification] = useState(false);

  // Resetovanje svih opcija
  const handleReset = () => {
    setOptions({
      contrastOption: 0,
      highlightLinks: false,
      biggerText: 1
    });

    // Resetovanje klasa i localStorage
    document.body.classList.remove(
      "contrast-invert",
      "contrast-high",
      "contrast-light"
    );
    document.documentElement.classList.remove(
      "contrast-invert",
      "contrast-high",
      "contrast-light"
    );

    document.querySelectorAll("a").forEach(link => {
      link.classList.remove("highlighted-link");
    });

    document.documentElement.style.transform = "scale(1)";

    localStorage.clear();

    // Prikaz notifikacije
    setShowNotification(true);
    setTimeout(() => {
      setShowNotification(false);
    }, 2000); // Sakrij notifikaciju nakon 2 sekunde
  };

  useEffect(
    () => {
      const links = document.querySelectorAll("a");

      const applyHighlight = () => {
        links.forEach(link => {
          if (options.highlightLinks) {
            link.classList.add("highlighted-link");
          } else {
            link.classList.remove("highlighted-link");
          }
        });
      };

      // Primeni stilove inicijalno
      applyHighlight();

      // Dodaj MutationObserver za praćenje promena DOM-a
      const observer = new MutationObserver(() => {
        const updatedLinks = document.querySelectorAll("a");
        updatedLinks.forEach(link => {
          if (options.highlightLinks) {
            link.classList.add("highlighted-link");
          } else {
            link.classList.remove("highlighted-link");
          }
        });
      });

      observer.observe(document.body, { childList: true, subtree: true });

      // Sačuvaj stanje u localStorage
      localStorage.setItem(
        "highlightLinks",
        JSON.stringify(options.highlightLinks)
      );

      // Clean-up: ukloni MutationObserver
      return () => {
        observer.disconnect();
      };
    },
    [options.highlightLinks]
  );

  //Bigger Text
  useEffect(
    () => {
      const html = document.documentElement;
      html.style.transform = `scale(${options.zoomLevel})`;
      html.style.transformOrigin = "0 0"; // Fiksira tačku skaliranja u gornjem levom uglu
      localStorage.setItem("zoomLevel", options.zoomLevel); // Sačuvaj stanje u localStorage
    },
    [options.zoomLevel]
  );

  // Efekat za primenu kontrastnih opcija
  useEffect(
    () => {
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

      // Sačuvaj stanje u localStorage
      localStorage.setItem(
        "contrastOption",
        JSON.stringify(options.contrastOption)
      );
    },
    [options.contrastOption]
  );

  return (
    <main className={`drawer ${isOpen ? "open" : ""}`}>
      <Header onClose={onClose} />
      {showNotification &&
        <div className="notification">
          <FaCheck /> Accessibility settings have been reset
        </div>}
      <Nav options={options} setOptions={setOptions} />
      <Button options={options} setOptions={setOptions} onClick={handleReset} />
    </main>
  );
}
