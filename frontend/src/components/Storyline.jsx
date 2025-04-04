import React from "react";
import "../assets/scss/storyLine.scss";
import { useTranslation } from "react-i18next";
import Story2013 from "../assets/images/Home/Story2013.webp";
import Story2010 from "../assets/images/Home/Story2010.webp";
import Story2015 from "../assets/images/Home/Story2015.webp";
import Story2016 from "../assets/images/Home/Story2016.webp";
import Story2020 from "../assets/images/Home/Story2020.webp";
import Story2023 from "../assets/images/Home/Story2023.webp";

import TextReader from "../components/TextRender";

export default function StoryLineProbe() {
  const { t } = useTranslation();

  const storyText = [
    t("our_line.title"),
    t("our_line.sub_text"),
    t("our_line.img_text1"),
    t("our_line.img_text2"),
    t("our_line.img_text3"),
    t("our_line.img_text4"),
    t("our_line.img_text5"),
    t("our_line.img_text6")
  ];

  return (
    <section className="story-line container-main">
      <h2 className="title">
        {t("our_line.title")}
      </h2>

      <p style={{ textAlign: "center" }}>
        {t("our_line.sub_text")}
        <TextReader texts={storyText} />
      </p>
      <div className="item">
        <div className="line" />
        <div className="story-line-item">
          <div className="text bottom-line">
            <p>
              {t("our_line.img_text1")}
            </p>
          </div>
          <div className="line-ver" />
          <div className="round" />
          <div className="line-ver" />
          <div className="img">
            <span>2010</span>
            <img loading="lazy" src={Story2010} alt="Story2010" />
          </div>
        </div>
        <div className="story-line-item">
          <div className="img">
            <img loading="lazy" src={Story2013} alt="Story2013" />
            <span>2013</span>
          </div>
          <div className="line-ver" />
          <div className="round" />
          <div className="line-ver" />
          <div className="text up-line">
            <p>
              {t("our_line.img_text2")}
            </p>
          </div>
        </div>
        <div className="story-line-item">
          <div className="text bottom-line">
            <p>
              {t("our_line.img_text3")}
            </p>
          </div>
          <div className="line-ver" />
          <div className="round" />
          <div className="line-ver" />
          <div className="img">
            <span>2015</span>
            <img loading="lazy" src={Story2015} alt="Story2015" />
          </div>
        </div>
        <div className="story-line-item">
          <div className="img">
            <img loading="lazy" src={Story2016} alt="Story2016" />
            <span>2016</span>
          </div>
          <div className="line-ver" />
          <div className="round" />
          <div className="line-ver" />
          <div className="text up-line">
            <p>
              {t("our_line.img_text4")}
            </p>
          </div>
        </div>
        <div className="story-line-item">
          <div className="text bottom-line">
            <p>
              {t("our_line.img_text5")}
            </p>
          </div>
          <div className="line-ver" />
          <div className="round" />
          <div className="line-ver" />
          <div className="img">
            <span>2020</span>
            <img loading="lazy" src={Story2020} alt="Story2020" />
          </div>
        </div>
        <div className="story-line-item">
          <div className="img">
            <img loading="lazy" src={Story2023} alt="Story2023" />
            <span>2023</span>
          </div>
          <div className="line-ver" />
          <div className="round" />
          <div className="line-ver" />
          <div className="text up-line">
            <p>
              {t("our_line.img_text6")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
