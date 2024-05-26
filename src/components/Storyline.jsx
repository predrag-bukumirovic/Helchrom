import React from "react";
import Story2013 from "../assets/images/Home/Story2013.webp";
import Story2010 from "../assets/images/Home/Story2010.webp";
import Story2015 from "../assets/images/Home/Story2015.webp";
import Story2016 from "../assets/images/Home/Story2016.webp";
import Story2020 from "../assets/images/Home/Story2020.webp";
import Story2023 from "../assets/images/Home/Story2023.webp";
import { useTranslation } from "react-i18next";

import TextReader from "../components/TextRender";

export default function Storyline() {
  const { t } = useTranslation();

  return (
    <div>
      <div className="storyline container-main padding30">
        <h2 className="title">
          {t("our_line.title")}
        </h2>

        <p
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <TextReader textKey="our_line.sub_text" />
          {t("our_line.sub_text")}
        </p>

        <section className="storyline-box">
          <div className="box box1">
            <div className="text text1-1">
              <p>
                <TextReader textKey="our_line.img_text1" />
                {t("our_line.img_text1")}
              </p>
            </div>
            <div className="img-date img1-1">
              <img src={Story2013} alt="" />
              <span>2013</span>
            </div>
            <div className="text text1-2">
              <p>
                <TextReader textKey="our_line.img_text3" />
                {t("our_line.img_text3")}
              </p>
            </div>
            <div className="img-date img1-2">
              <img src={Story2016} alt="" />
              <span>2016</span>
            </div>
            <div className="text text1-3">
              <p>
                <TextReader textKey="our_line.img_text5" />
                {t("our_line.img_text5")}
              </p>
            </div>
            <div className="img-date img1-3">
              <img src={Story2023} alt="" />
              <span>2023</span>
            </div>
          </div>
          <div className="story-line">
            <div className="item-round-line">
              <div className="round-line">
                <div className="line" />
                <div className="round" />
                <div className="line" />
              </div>
              <div className="round-line">
                <div className="line" />
                <div className="round" />
                <div className="line" />
              </div>

              <div className="round-line">
                <div className="line" />
                <div className="round" />
                <div className="line" />
              </div>

              <div className="round-line">
                <div className="line" />
                <div className="round" />
                <div className="line" />
              </div>

              <div className="round-line">
                <div className="line" />
                <div className="round" />
                <div className="line" />
              </div>

              <div className="round-line">
                <div className="line" />
                <div className="round" />
                <div className="line" />
              </div>
            </div>
          </div>
          <div className="box box2" style={{ alignItems: "start" }}>
            <div className="img-date img2-1">
              <span>2010</span>
              <img src={Story2010} alt="" />
            </div>
            <div className="text text2-1">
              <p>
                <TextReader textKey="our_line.img_text2" />
                {t("our_line.img_text2")}
              </p>
            </div>

            <div className="img-date img2-2">
              <span>2015</span>
              <img src={Story2015} alt="" />
            </div>
            <div className="text text2-2">
              <p>
                <TextReader textKey="our_line.img_text4" />
                {t("our_line.img_text4")}
              </p>
            </div>

            <div className="img-date img2-3">
              <span>2020</span>
              <img src={Story2020} alt="" />
            </div>
            <div className="text text2-3">
              <p>
                <TextReader textKey="our_line.img_text6" />
                {t("our_line.img_text6")}
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
