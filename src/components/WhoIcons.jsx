import React from "react";
import "../assets/scss/home.scss";

import chemicals from "../assets/images/Home/chemicals.webp";
import electronics from "../assets/images/Home/electronics.webp";
import energy from "../assets/images/Home/energy.webp";
import pharma from "../assets/images/Home/pharma.webp";
import oilandgas from "../assets/images/Home/oilandgas.webp";
import foodandbio from "../assets/images/Home/foodandbio.webp";

export default function WhoIcons() {
  return (
    <div className="our-home">
      <div className="areas-icon">
        <div>
          <img src={pharma} alt="" />
        </div>
        <div>
          <img src={foodandbio} alt="" />
        </div>
        <div>
          <img src={chemicals} alt="" />
        </div>
        <div>
          <img src={electronics} alt="" />
        </div>
        <div>
          <img src={energy} alt="" />
        </div>
        <div>
          <img src={oilandgas} alt="" />
        </div>
      </div>

      <center style={{ marginTop: 50 }}>
        <a className="book-btn" href="/contact">
          Book a meeting
        </a>
      </center>
    </div>
  );
}
