import React, { useState } from "react";
import "../assets/scss/home.scss";

import chemicals from "../assets/images/Home/chemicals.webp";
import chemicalsColor from "../assets/images/Home/chemicalsColor.png";
import electronics from "../assets/images/Home/electronics.webp";
import electronicsColor from "../assets/images/Home/electronicsColor.png";
import energy from "../assets/images/Home/energy.webp";
import energyColor from "../assets/images/Home/energyColor.png";
import pharma from "../assets/images/Home/pharma.webp";
import pharmaColor from "../assets/images/Home/pharmaColor.png";
import oilandgas from "../assets/images/Home/oilandgas.webp";
import oilandgasColor from "../assets/images/Home/oilandgasColor.png";
import foodandbio from "../assets/images/Home/foodandbio.webp";
import foodandbioColor from "../assets/images/Home/foodandbioColor.png";
import { useTranslation } from "react-i18next";

export default function WhoIcons() {
  const [hoveredImage, setHoveredImage] = useState(null);
  const { t } = useTranslation();

  const handleMouseEnter = image => {
    setHoveredImage(image);
  };

  const handleMouseLeave = () => {
    setHoveredImage(null);
  };

  const images = [
    {
      default: pharma,
      color: pharmaColor,
      alt: "Icon Pharma",
      link: "/pharma"
    },
    {
      default: foodandbio,
      color: foodandbioColor,
      alt: "Icon foodandbio",
      link: "/food"
    },
    {
      default: chemicals,
      color: chemicalsColor,
      alt: "Icon chemicals",
      link: "/chemicals"
    },
    {
      default: electronics,
      color: electronicsColor,
      alt: "Icon electronics",
      link: "/electronics"
    },
    {
      default: energy,
      color: energyColor,
      alt: "Icon energy",
      link: "/energy"
    },
    {
      default: oilandgas,
      color: oilandgasColor,
      alt: "Icon oilandgas",
      link: "/oil&gas"
    }
  ];

  return (
    <div className="our-home">
      <div className="areas-icon">
        {images.map((image, index) =>
          <div
            key={index}
            onMouseEnter={() => handleMouseEnter(image.color)}
            onMouseLeave={handleMouseLeave}
          >
            <a href={image.link}>
              <img
                loading="lazy"
                data-aos="zoom-in"
                src={hoveredImage === image.color ? image.color : image.default}
                alt={image.alt}
              />
            </a>
          </div>
        )}
      </div>

      <center style={{ marginTop: 50 }}>
        <a className="book-btn" href="/contact">
          {t("read_more")}
        </a>
      </center>
    </div>
  );
}
