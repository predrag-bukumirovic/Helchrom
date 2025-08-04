import { CCarousel, CCarouselItem, CImage } from "@coreui/react";
import "../assets/scss/news.scss";
import mainImg from "../assets/images/Blog/Baner1.png";
import mainImg1 from "../assets/images/Blog/Baner2.png";
import mainImg2 from "../assets/images/Blog/Baner3.png";

import Diversity from "../assets/images/Blog/Diversity.png";
import Odbojka from "../assets/images/Blog/Odbojka.png";
import Sustainability from "../assets/images/Blog/Sustainability.png";
import Closed from "../assets/images/Blog/ClosedSystems/closed.png";
import Roda from "../assets/images/Blog/Roda/4.webp";
import Insulin from "../assets/images/Blog/Insulin/insulinLP.png";
import CoCreation from "../assets/images/Blog/CoCreation/landing.png";
import IntegratingAI from "../assets/images/Blog/IntegratingAI/4.webp";
import Gmp from "../assets/images/Blog/Gmp/Blog.png";

import { useTranslation } from "react-i18next";
import TextReader from "../components/TextRender";

export default function Blog() {
  const { t } = useTranslation();

  const headerText = [t("blog.title"), t("blog.text")];

  const blog9Text = [
    t("blog.blog9.title"),
    t("blog.blog9.text"),
    t("read_more"),
  ];

  const blog8Text = [
    t("blog.blog8.title"),
    t("blog.blog8.text"),
    t("read_more"),
  ];

  const blog7Text = [
    t("blog.blog7.title"),
    t("blog.blog7.text"),
    t("read_more"),
  ];

  const blog6Text = [
    t("blog.blog6.title"),
    t("blog.blog6.text"),
    t("read_more"),
  ];

  const blog5Text = [
    t("blog.blog5.title"),
    t("blog.blog5.text"),
    t("read_more"),
  ];

  const blog4Text = [
    t("blog.blog4.title"),
    t("blog.blog4.text"),
    t("read_more"),
  ];
  const blog3Text = [
    t("blog.blog3.title"),
    t("blog.blog3.text"),
    t("read_more"),
  ];
  const blog2Text = [
    t("blog.blog2.title"),
    t("blog.blog2.text"),
    t("read_more"),
  ];
  const blog1Text = [
    t("blog.blog1.title"),
    t("blog.blog1.text"),
    t("read_more"),
  ];

  return (
    <div>
      {/* Slider start */}
      <div className="slider">
        <CCarousel className="slider-main" controls transition="crossfade">
          <CCarouselItem>
            <CImage className="d-block w-100" src={mainImg} alt="slide 1" />
          </CCarouselItem>
          <CCarouselItem>
            <CImage className="d-block w-100" src={mainImg1} alt="slide 2" />
          </CCarouselItem>
          <CCarouselItem>
            <CImage className="d-block w-100" src={mainImg2} alt="slide 3" />
          </CCarouselItem>
        </CCarousel>
        <div className="box-img">
          <div>
            <img
              src={mainImg}
              alt="Helmchron Career - Slide 1"
              loading="lazy"
            />
          </div>
          <div>
            <img
              src={mainImg1}
              alt="Helmchron Career - Slide 2"
              loading="lazy"
            />
          </div>
          <div>
            <img
              src={mainImg2}
              alt="Helmchron Career - Slide 3"
              loading="lazy"
            />
          </div>
        </div>
      </div>
      {/* Slider end */}

      <div className="container-main padding30">
        <h1 className="title">
          {t("blog.title")}
          <TextReader texts={headerText} />
        </h1>

        <center>
          <p>{t("blog.text")}</p>
        </center>

        <div className="news-box padding30">
          <TextReader texts={blog9Text} />
          <div>
            <div>
              <h2 style={{ textTransform: "uppercase" }}>
                {t("blog.blog9.title")}
              </h2>
              <p dangerouslySetInnerHTML={{ __html: t("blog.blog9.text") }} />

              <a
                href="/blog/gmp"
                aria-label="Read more about sustainable fashion"
              >
                {t("read_more")}
              </a>
            </div>
            <div>
              <img src={Gmp} alt="Gmp" loading="lazy" />
            </div>
          </div>
          <div className="line" />
        </div>

        <div className="news-box padding30">
          <TextReader texts={blog8Text} />
          <div>
            <div>
              <h2 style={{ textTransform: "uppercase" }}>
                {t("blog.blog8.title")}
              </h2>
              <p dangerouslySetInnerHTML={{ __html: t("blog.blog8.text") }} />

              <a
                href="/blog/integrating-ai"
                aria-label="Read more about sustainable fashion"
              >
                {t("read_more")}
              </a>
            </div>
            <div>
              <img src={IntegratingAI} alt="IntegratingAI" loading="lazy" />
            </div>
          </div>
          <div className="line" />
        </div>

        <div className="news-box padding30">
          <TextReader texts={blog7Text} />
          <div>
            <div>
              <h2 style={{ textTransform: "uppercase" }}>
                {t("blog.blog7.title")}
              </h2>
              <p dangerouslySetInnerHTML={{ __html: t("blog.blog7.text") }} />

              <a
                href="/blog/co-creation"
                aria-label="Read more about sustainable fashion"
              >
                {t("read_more")}
              </a>
            </div>
            <div>
              <img src={CoCreation} alt="Co creation" loading="lazy" />
            </div>
          </div>
          <div className="line" />
        </div>

        <div className="news-box padding30">
          <TextReader texts={blog6Text} />
          <div>
            <div>
              <h2 style={{ textTransform: "uppercase" }}>
                {t("blog.blog6.title")}
              </h2>
              <p>{t("blog.blog6.text")}</p>
              <a
                href="/blog/insulin"
                aria-label="Read more about sustainable fashion"
              >
                {t("read_more")}
              </a>
            </div>
            <div>
              <img src={Insulin} alt="Insulin" loading="lazy" />
            </div>
          </div>
          <div className="line" />
        </div>

        <div className="news-box padding30">
          <TextReader texts={blog5Text} />
          <div>
            <div>
              <h2 style={{ textTransform: "uppercase" }}>
                {t("blog.blog5.title")}
              </h2>
              <p>{t("blog.blog5.text")}</p>
              <a
                href="/blog/closed-systems"
                aria-label="Read more about sustainable fashion"
              >
                {t("read_more")}
              </a>
            </div>
            <div>
              <img src={Closed} alt="Roda" loading="lazy" />
            </div>
          </div>
          <div className="line" />
        </div>

        <div className="news-box padding30">
          <TextReader texts={blog4Text} />
          <div>
            <div>
              <h2>{t("blog.blog4.title")}</h2>
              <p>{t("blog.blog4.text")}</p>
              <a
                href="/blog/roda"
                aria-label="Read more about sustainable fashion"
              >
                {t("read_more")}
              </a>
            </div>
            <div>
              <img src={Roda} alt="Roda" loading="lazy" />
            </div>
          </div>
          <div className="line" />
        </div>

        <div className="news-box padding30">
          <TextReader texts={blog3Text} />
          <div>
            <div>
              <h2>{t("blog.blog3.title")}</h2>
              <p>{t("blog.blog3.text")}</p>
              <a
                href="/blog/sustainability"
                aria-label="Read more about sustainable fashion"
              >
                {t("read_more")}
              </a>
            </div>
            <div>
              <img
                loading="lazy"
                src={Sustainability}
                alt="A WORKPLACE WHERE WE FEEL INCLUDED"
              />
            </div>
          </div>
          <div className="line" />
        </div>

        <div className="news-box padding30">
          <TextReader texts={blog2Text} />
          <div>
            <div>
              <h2>{t("blog.blog2.title")}</h2>
              <p>{t("blog.blog2.text")}</p>
              <a
                href="/blog/diversity"
                aria-label="Read more about sustainable fashion"
              >
                {t("read_more")}
              </a>
            </div>
            <div>
              <img
                loading="lazy"
                src={Diversity}
                alt="A WORKPLACE WHERE WE FEEL INCLUDED"
              />
            </div>
          </div>
          <div className="line" />
        </div>

        <div className="news-box padding30">
          <TextReader texts={blog1Text} />
          <div>
            <div>
              <h2>{t("blog.blog1.title")}</h2>
              <p>{t("blog.blog1.text")}</p>
              <a
                href="/blog/volleyball"
                aria-label="Read more about sustainable fashion"
              >
                {t("read_more")}
              </a>
            </div>
            <div>
              <img
                loading="lazy"
                src={Odbojka}
                alt="SUPPORTING JUNIOR FEMALE VOLLEYBALL TEAM"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
