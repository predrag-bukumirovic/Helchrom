import React from 'react'
import "../assets/scss/home.scss";

import chemicals from "../assets/images/Home/chemicals.png";
import electronics from "../assets/images/Home/electronics.png";
import energy from "../assets/images/Home/energy.png";
import pharma from "../assets/images/Home/pharma.png";
import oilandgas from "../assets/images/Home/oilandgas.png";
import foodandbio from "../assets/images/Home/foodandbio.png";

export default function WhoIcons() {
  return (
    <div className='our-home'>
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
    </div>
   
  )
}
