import React from "react";
import "../assets/scss/home.scss";

import imgBefore from "../assets/images/imgBefore.png";
import imgAfter from "../assets/images/imgAfter.png";
import {
  ReactCompareSlider,
  ReactCompareSliderImage
} from "react-compare-slider";

const BeforeAfterSlider = () => {
  return (
    <div className="img before-after-slider">
      <ReactCompareSlider
        itemTwo={<ReactCompareSliderImage src={imgBefore} alt="Image one" />}
        itemOne={<ReactCompareSliderImage src={imgAfter} alt="Image two" />}
      />
    </div>
  );
};

export default BeforeAfterSlider;
