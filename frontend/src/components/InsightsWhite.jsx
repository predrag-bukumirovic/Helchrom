import React from "react";

// icon %
import Chemicals from "../assets/images/Division/ChemicalsWhite.png";
import Electronics from "../assets/images/Division/ElectronicsWhite.png";
import Energy from "../assets/images/Division/EnergyWhite.png";
import FoodBioproducts from "../assets/images/Division/FoodWhite.png";
import Oli from "../assets/images/Division/Oilwhite.png";
import Pharmaceuticals from "../assets/images/Division/PharmaWhite.png";
import { useTranslation } from "react-i18next";

export default function Insights() {
  const { t } = useTranslation();

  return (
    <div>
      <div className="icon-since container-main">
        <div data-aos="zoom-in">
          <img loading="lazy" src={Pharmaceuticals} alt="Pharmaceuticals" />
          <div>
            <span>
              {t("navbar.pharma")}
            </span>
          </div>
        </div>
        <div data-aos="zoom-in">
          <img loading="lazy" src={FoodBioproducts} alt="FoodBioproducts" />
          <div>
            <span>
              {t("navbar.food")}
            </span>
          </div>
        </div>

        <div data-aos="zoom-in">
          <img loading="lazy" src={Chemicals} alt="Chemicals" />
          <div>
            <span>
              {t("navbar.chemicals")}
            </span>
          </div>
        </div>
        <div data-aos="zoom-in">
          <img loading="lazy" src={Energy} alt="Energy" />
          <div>
            <span>
              {t("navbar.energy")}
            </span>
          </div>
        </div>
        <div data-aos="zoom-in">
          <img loading="lazy" src={Electronics} alt="Electronics" />
          <div>
            <span>
              {t("navbar.electronics")}
            </span>
          </div>
        </div>
        <div data-aos="zoom-in">
          <img loading="lazy" src={Oli} alt="Oli" />
          <div>
            <span>
              {t("navbar.oil")}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
