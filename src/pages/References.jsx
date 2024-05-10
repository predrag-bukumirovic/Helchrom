import React from "react";
import "../assets/scss/slider.scss";
import "../assets/scss/home.scss";
import "../assets/scss/services.scss";
import "../assets/scss/references.scss";

import { CCarousel, CCarouselItem, CImage } from "@coreui/react";

import mainImg from "../assets/images/OurCore/c-s1.jpg";
import mainImg1 from "../assets/images/OurCore/c-s2.webp";
import mainImg2 from "../assets/images/OurCore/c-s3.webp";

// images references
import Vetter from "../assets/images/References/VetterPharma.png";
import Novartis from "../assets/images/References/Novartis.png";
import RocheDiagnostics from "../assets/images/References/RocheDiagnostics.png";
import Bachem from "../assets/images/References/Bachem.png";
import DSM from "../assets/images/References/DSM.png";
import Destilla from "../assets/images/References/Destilla.png";
import primopus from "../assets/images/References/primopus.png";
import Jungbunzlauer from "../assets/images/References/Jungbunzlauer.png";
import Exyte from "../assets/images/References/Exyte.png";
import BASF from "../assets/images/References/BASF.png";
import Bayer from "../assets/images/References/Bayer.png";
import Vinex from "../assets/images/References/Vinex.png";
import Tesla from "../assets/images/References/Tesla.png";
import Jaenschwalde from "../assets/images/References/Jaenschwalde.png";
import Udarnaya from "../assets/images/References/Udarnaya.png";
import MVV from "../assets/images/References/MVV.png";
import OMV from "../assets/images/References/OMV.png";
import Projectsperyear from "../assets/images/References/Projectsperyear.png";
import Servicesdistribution from "../assets/images/References/Servicesdistribution.png";

// icon %
import Chemicals from "../assets/images/References/Chemicals.png";
import Electronics from "../assets/images/References/Electronics.png";
import Energy from "../assets/images/References/Energy.png";
import FoodBioproducts from "../assets/images/References/Food&Bioproducts.png";
import Oli from "../assets/images/References/Oil&Gas.png";
import Pharmaceuticals from "../assets/images/References/Pharmaceuticals&Lifesciences.png";

const mainImages = [mainImg, mainImg1, mainImg2];

export default function References() {
  return (
    <div>
      <div className="slider">
        <CCarousel className="slider-main" controls transition="crossfade">
          {mainImages.map((image, index) =>
            <CCarouselItem key={index}>
              <CImage
                className="d-block w-100"
                src={image}
                alt={`slide ${index + 1}`}
              />
            </CCarouselItem>
          )}
        </CCarousel>
        <div className="box-img">
          {mainImages.map((image, index) =>
            <div key={index}>
              <img src={image} alt="Main" />
            </div>
          )}
        </div>
      </div>

      <div className="container-main padding30">
        <h2 className="title">our references</h2>

        <p>
          Our reference page contains our most relevant projects per each of our
          business areas. Explore our milestones and collaborations and learn
          how we contribute to different industries worldwide. For a
          comprehensive list of references, please book a meeting with our team.
        </p>
      </div>

      <div className="container-main padding30">
        <div className="icon-core references">
          <div>Pharmaceuticals & Life sciences</div>
          <div>Food & Bio</div>
          <div>Chemicals</div>
          <div>Electronics</div>
          <div>Energy</div>
          <div>Oil & Gas</div>
        </div>
      </div>

      <div className="references-container">
        {/* row 1 */}
        <div
          style={{ background: "var(--light-blue-color)" }}
          className="reference"
        >
          <div className="container-main">
            <div className="vertical-text">
              <h4 style={{ WebkitTextStroke: "1px var(--dark-blue-color)" }}>
                PHARMA
              </h4>
            </div>
            <div className="text">
              <h3 className="title">vetter pharma</h3>
              <p>
                Detailed engineering and construction planning of clean mediums
                for the new production plant.
              </p>

              <span
                style={{ background: "var(--dark-blue-color)" }}
                className="book-btn"
              >
                Read more
              </span>
            </div>
            <div>
              <img src={Vetter} alt="Vetter" />
            </div>
          </div>
        </div>

        {/* row 2 */}
        <div className="reference">
          <div className="container-main reverse">
            <div className="vertical-text">
              <h4 style={{ WebkitTextStroke: "1px var(--dark-blue-color)" }}>
                PHARMA
              </h4>
            </div>
            <div className="text">
              <h3 className="title">novartis</h3>

              <p>
                Detailed engineering for the new production plant of innovative
                therapies.
              </p>

              <span
                style={{ background: "var(--dark-blue-color)" }}
                className="book-btn"
              >
                Read more
              </span>
            </div>
            <div>
              <img src={Novartis} alt="Novartis" />
            </div>
          </div>
        </div>

        {/* row 3 */}
        <div
          style={{ background: "var(--light-blue-color)" }}
          className="reference"
        >
          <div className="container-main">
            <div className="vertical-text">
              <h4 style={{ WebkitTextStroke: "1px var(--dark-blue-color)" }}>
                PHARMA
              </h4>
            </div>
            <div className="text">
              <h3 className="title">roche diagnostics</h3>

              <p>
                Detailed engineering for the new production plant of medical
                device.
              </p>

              <span
                style={{ background: "var(--dark-blue-color)" }}
                className="book-btn"
              >
                Read more
              </span>
            </div>

            <div>
              <img src={RocheDiagnostics} alt="RocheDiagnostics" />
            </div>
          </div>
        </div>

        {/* row 4 */}
        <div className="reference">
          <div className="container-main reverse">
            <div className="vertical-text">
              <h4 style={{ WebkitTextStroke: "1px var(--dark-blue-color)" }}>
                PHARMA
              </h4>
            </div>
            <div className="text">
              <h3 className="title">bachem</h3>

              <p>Piping and support design for the new production plant.</p>

              <span
                style={{ background: "var(--dark-blue-color)" }}
                className="book-btn"
              >
                Read more
              </span>
            </div>
            <div>
              <img src={Bachem} alt="Bachem" />
            </div>
          </div>
        </div>

        {/* row 5 */}
        <div
          className="reference"
          style={{ background: "var(--light-green-color)" }}
        >
          <div className="container-main">
            <div className="vertical-text">
              <h4 style={{ WebkitTextStroke: "1px var(--green-color)" }}>
                FOOD
              </h4>
            </div>
            <div className="text">
              <h3 className="title">dsm</h3>

              <p>
                Pre-planning for the new production plant of cattle feed
                additive.
              </p>

              <span
                style={{ background: "var(--green-color)" }}
                className="book-btn"
              >
                Read more
              </span>
            </div>
            <div>
              <img src={DSM} alt="DSM" />
            </div>
          </div>
        </div>

        <div className="reference">
          <div className="container-main reverse">
            <div className="vertical-text">
              <h4 style={{ WebkitTextStroke: "1px var(--green-color)" }}>
                FOOD
              </h4>
            </div>
            <div className="text">
              <h3 className="title">destilla</h3>

              <p>
                Basic engineering and consulting for a new extraction plant.
              </p>

              <span
                style={{ background: "var(--green-color)" }}
                className="book-btn"
              >
                Read more
              </span>
            </div>

            <div>
              <img src={Destilla} alt="Destilla" />
            </div>
          </div>
        </div>

        <div
          className="reference"
          style={{ background: "var(--light-green-color)" }}
        >
          <div className="container-main">
            <div className="vertical-text">
              <h4 style={{ WebkitTextStroke: "1px var(--green-color)" }}>
                FOOD
              </h4>
            </div>
            <div className="text">
              <h3 className="title">primopus</h3>

              <p>Detailed engineering for the new production segment.</p>

              <span
                style={{ background: "var(--green-color)" }}
                className="book-btn"
              >
                Read more
              </span>
            </div>

            <div>
              <img src={primopus} alt="primopus" />
            </div>
          </div>
        </div>

        <div className="reference">
          <div className="container-main reverse">
            <div className="vertical-text">
              <h4 style={{ WebkitTextStroke: "1px var(--green-color)" }}>
                FOOD
              </h4>
            </div>
            <div className="text">
              <h3 className="title">jungbunzlauer</h3>

              <p>
                Pre-planning and basic engineering of the new production plant
                for bio products.
              </p>

              <span
                style={{ background: "var(--green-color)" }}
                className="book-btn"
              >
                Read more
              </span>
            </div>
            <div>
              <img src={Jungbunzlauer} alt="Jungbunzlauer" />
            </div>
          </div>
        </div>

        <div
          className="reference"
          style={{ background: "var(--light-green-color)" }}
        >
          <div className="container-main">
            <div className="vertical-text">
              <h4 style={{ WebkitTextStroke: "1px var(--green-color)" }}>
                FOOD
              </h4>
            </div>
            <div className="text">
              <h3 className="title">exyte</h3>

              <p>
                Basic engineering of the new production plant for nutrition
                yeast.
              </p>

              <span
                style={{ background: "var(--green-color)" }}
                className="book-btn"
              >
                Read more
              </span>
            </div>
            <div>
              <img src={Exyte} alt="Exyte" />
            </div>
          </div>
        </div>

        <div className="reference">
          <div className="container-main reverse">
            <div className="vertical-text">
              <h4 style={{ WebkitTextStroke: "1px var(--brend-color)" }}>
                CHEMICALS
              </h4>
            </div>
            <div className="text">
              <h3 className="title">basf</h3>

              <p>
                Detailed engineering for the new production plant of vitamin A.
              </p>

              <span
                style={{ background: "var(--brend-color)" }}
                className="book-btn"
              >
                Read more
              </span>
            </div>
            <div>
              <img src={BASF} alt="Basf" />
            </div>
          </div>
        </div>

        <div
          className="reference"
          style={{ background: "var(--light-orange-color)" }}
        >
          <div className="container-main">
            <div className="vertical-text">
              <h4 style={{ WebkitTextStroke: "1px var(--brend-color)" }}>
                CHEMICALS
              </h4>
            </div>
            <div className="text">
              <h3 className="title">bayer</h3>

              <p>
                Detailed engineering of the vacuum system in an existing
                pesticide plant.
              </p>

              <span
                style={{ background: "var(--brend-color)" }}
                className="book-btn"
              >
                Read more
              </span>
            </div>
            <div>
              <img src={Bayer} alt="Bayer" />
            </div>
          </div>
        </div>

        <div className="reference">
          <div className="container-main reverse">
            <div className="vertical-text">
              <h4 style={{ WebkitTextStroke: "1px var(--brend-color)" }}>
                CHEMICALS
              </h4>
            </div>
            <div className="text">
              <h3 className="title">vinex</h3>

              <p>
                All engineering phases for the new ethanol production plant.
              </p>

              <span
                style={{ background: "var(--brend-color)" }}
                className="book-btn"
              >
                Read more
              </span>
            </div>
            <div>
              <img src={Vinex} alt="Vinex" />
            </div>
          </div>
        </div>

        <div
          className="reference"
          style={{ background: "var(--light-orange-color)" }}
        >
          <div className="container-main">
            <div className="vertical-text">
              <h4 style={{ WebkitTextStroke: "1px var(--dark-blue-color)" }}>
                ELECTRONICS
              </h4>
            </div>
            <div className="text">
              <h3 className="title">tesla</h3>

              <p>Pre-planning for the new production plant for batteries.</p>

              <span
                style={{ background: "var(--dark-blue-color)" }}
                className="book-btn"
              >
                Read more
              </span>
            </div>
            <div>
              <img src={Tesla} alt="Tesla" />
            </div>
          </div>
        </div>

        <div className="reference">
          <div className="container-main reverse">
            <div className="vertical-text">
              <h4 style={{ WebkitTextStroke: "1px var(--green-color)" }}>
                ENETRGY
              </h4>
            </div>
            <div className="text">
              <h3 className="title">jaenschwalde</h3>

              <p>Detailed engineering of district heating system.</p>

              <span
                style={{ background: "var(--green-color)" }}
                className="book-btn"
              >
                Read more
              </span>
            </div>
            <div>
              <img src={Jaenschwalde} alt="Jaenschwalde" />
            </div>
          </div>
        </div>

        <div
          className="reference"
          style={{ background: "var(--light-green-color)" }}
        >
          <div className="container-main">
            <div className="vertical-text">
              <h4 style={{ WebkitTextStroke: "1px var(--green-color)" }}>
                ENETRGY
              </h4>
            </div>
            <div className="text">
              <h3 className="title">udarnaya</h3>

              <p>Detailed engineering for the new steam plant.</p>

              <span
                style={{ background: "var(--green-color)" }}
                className="book-btn"
              >
                Read more
              </span>
            </div>
            <div>
              <img src={Udarnaya} alt="Udarnaya" />
            </div>
          </div>
        </div>

        <div className="reference">
          <div className="container-main reverse">
            <div className="vertical-text">
              <h4 style={{ WebkitTextStroke: "1px var(--green-color)" }}>
                ENETRGY
              </h4>
            </div>
            <div className="text">
              <h3 className="title">mvv</h3>

              <p>Detailed engineering for the new steam duct.</p>

              <span
                style={{ background: "var(--green-color)" }}
                className="book-btn"
              >
                Read more
              </span>
            </div>
            <div>
              <img src={MVV} alt="MVV" />
            </div>
          </div>
        </div>

        <div
          className="reference"
          style={{ background: "var(--light-orange-color)" }}
        >
          <div className="container-main">
            <div className="vertical-text">
              <h4 style={{ WebkitTextStroke: "1px var(--brend-color)" }}>
                OIL & GAS
              </h4>
            </div>
            <div className="text">
              <h3 className="title">omv</h3>

              <p>Pipe design for the plant revamp.</p>

              <span
                style={{ background: "var(--brend-color)" }}
                className="book-btn"
              >
                Read more
              </span>
            </div>
            <div>
              <img src={OMV} alt="OMV" />
            </div>
          </div>
        </div>
      </div>

      <div className="insights container-main padding30">
        <h2 className="title">our projects insights</h2>
        <center>
          <p>Share od projects per business area</p>
        </center>

        <div className="icon-since container-main">
          <div>
            <img src={FoodBioproducts} alt="FoodBioproducts" />
            <div>
              <span>
                Food & <br /> Bioproducts
              </span>
            </div>
          </div>
          <div>
            <img src={Pharmaceuticals} alt="Pharmaceuticals" />
            <div>
              <span>
                Pharma & <br />Lifesciences
              </span>
            </div>
          </div>
          <div>
            <img src={Chemicals} alt="Chemicals" />
            <div>
              <span>Chemicals</span>
            </div>
          </div>
          <div>
            <img src={Energy} alt="Energy" />
            <div>
              <span>Energy</span>
            </div>
          </div>
          <div>
            <img src={Electronics} alt="Electronics" />
            <div>
              <span>Electronics</span>
            </div>
          </div>
          <div>
            <img src={Oli} alt="Oli" />
            <div>
              <span>Oil & Gas</span>
            </div>
          </div>
        </div>

        <div className="statistics container-main">
          <div>
            <span style={{ margin: "0 0 30px 12px" }}>Projects per year</span>
            <img
              className="per-year"
              src={Projectsperyear}
              alt="Projectsperyear"
            />
          </div>
          <div className="months">
            <span>Average project duration</span>
            <div>
              <p>
                <b>11</b> <br /> months
              </p>
            </div>
          </div>
          <div>
            <span style={{ margin: "0 0 30px 20px" }}>
              Services distribution
            </span>
            <img
              className="distribution"
              src={Servicesdistribution}
              alt="Servicesdistribution"
            />
          </div>
        </div>

        <div className="container-main" style={{ marginTop: 100 }}>
          <center>
            <p style={{ fontSize: 11 }}>
              Please note that our portfolio of projects showcases the extensive
              expertise and experience of our leadership team. While some
              projects may not have been delivered under the brand name
              Helmchron, they reflect the collective knowledge and capabilities
              honed throughout our careers. The reference list aims to present
              the depth of our expertise and the know-how behind it remains
              firmly rooted in many years of dedicated experience.
            </p>
          </center>
        </div>
      </div>
    </div>
  );
}
