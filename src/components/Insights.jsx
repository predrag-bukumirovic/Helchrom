import React from "react";

// icon %
import Chemicals from "../assets/images/References/Chemicals.png";
import Electronics from "../assets/images/References/Electronics.png";
import Energy from "../assets/images/References/Energy.png";
import FoodBioproducts from "../assets/images/References/Food&Bioproducts.png";
import Oli from "../assets/images/References/Oil&Gas.png";
import Pharmaceuticals from "../assets/images/References/Pharmaceuticals&Lifesciences.png";
import { useTranslation } from "react-i18next";

export default function Insights() {
  const { t } = useTranslation();

  return (
    <div>
      <div className="icon-since container-main">
        <div data-aos="zoom-in">
          <img src={Pharmaceuticals} alt="Pharmaceuticals" />
          <div>
            <span>
              {t("navbar.pharma")}
            </span>
          </div>
        </div>
        <div data-aos="zoom-in">
          <img src={FoodBioproducts} alt="FoodBioproducts" />
          <div>
            <span>
              {t("navbar.food")}
            </span>
          </div>
        </div>

        <div data-aos="zoom-in">
          <img src={Chemicals} alt="Chemicals" />
          <div>
            <span>
              {t("navbar.chemicals")}
            </span>
          </div>
        </div>
        <div data-aos="zoom-in">
          <img src={Energy} alt="Energy" />
          <div>
            <span>
              {t("navbar.energy")}
            </span>
          </div>
        </div>
        <div data-aos="zoom-in">
          <img src={Electronics} alt="Electronics" />
          <div>
            <span>
              {t("navbar.electronics")}
            </span>
          </div>
        </div>
        <div data-aos="zoom-in">
          <img src={Oli} alt="Oli" />
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
