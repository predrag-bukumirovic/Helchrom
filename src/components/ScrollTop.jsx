import React, { useState, useEffect } from "react";
import "../assets/scss/scrollTop.scss";

import { SlArrowUp } from "react-icons/sl";

export default function ScrollTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const clickTopScroll = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <div>
      {isVisible &&
        <div onClick={clickTopScroll} className="scrollTop">
          <SlArrowUp />
        </div>}
    </div>
  );
}
