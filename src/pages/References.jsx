import React, { useState, useEffect, useRef } from "react";
import "../assets/scss/slider.scss";
import "../assets/scss/home.scss";
import "../assets/scss/services.scss";
import "../assets/scss/references.scss";

import { CCarousel, CCarouselItem, CImage } from "@coreui/react";

import mainImg from "../assets/images/References/Slika1.jpg";
import mainImg1 from "../assets/images/References/Slika2.jpg";
import mainImg2 from "../assets/images/References/Slika3.png";

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

// card
import card1 from "../assets/images/References/cards/1.png";
import card2 from "../assets/images/References/cards/2.png";
import card3 from "../assets/images/References/cards/3.png";
import card4 from "../assets/images/References/cards/4.png";
import card5 from "../assets/images/References/cards/5.png";
import card6 from "../assets/images/References/cards/6.png";
import card7 from "../assets/images/References/cards/7.png";
import card8 from "../assets/images/References/cards/8.png";
import card9 from "../assets/images/References/cards/9.png";
import card10 from "../assets/images/References/cards/10.png";
import card11 from "../assets/images/References/cards/11.png";
import card12 from "../assets/images/References/cards/12.png";
import card13 from "../assets/images/References/cards/13.png";
import card14 from "../assets/images/References/cards/14.png";
import card15 from "../assets/images/References/cards/15.png";
import card16 from "../assets/images/References/cards/16.png";
import card17 from "../assets/images/References/cards/17.png";

// icon %
import Chemicals from "../assets/images/References/Chemicals.png";
import Electronics from "../assets/images/References/Electronics.png";
import Energy from "../assets/images/References/Energy.png";
import FoodBioproducts from "../assets/images/References/Food&Bioproducts.png";
import Oli from "../assets/images/References/Oil&Gas.png";
import Pharmaceuticals from "../assets/images/References/Pharmaceuticals&Lifesciences.png";

const mainImages = [mainImg, mainImg1, mainImg2];

const Modal = ({ isOpen, toggleModal, imageSrc }) => {
  const [modalState, setModalState] = useState(isOpen);

  useEffect(
    () => {
      setModalState(isOpen);

      if (isOpen) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "unset";
      }
    },
    [isOpen]
  );

  const handleClose = () => {
    toggleModal();
  };

  return (
    <div
      className={`modal ${modalState ? "open" : "closed"}`}
      onClick={handleClose}
    >
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <img onClick={handleClose} src={imageSrc} alt="Slika" />
      </div>
    </div>
  );
};

export default function References() {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState("");

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  const handleButtonClick = imageSrc => {
    setCurrentImage(imageSrc);
    toggleModal();
  };

  const sectionRefs = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null)
  ];

  const handleClick = index => {
    sectionRefs[index].current.scrollIntoView({ behavior: "smooth" });
  };
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
          <div onClick={() => handleClick(0)}>Pharma</div>
          <div onClick={() => handleClick(1)}>Food & Bio</div>
          <div onClick={() => handleClick(2)}>Chemicals</div>
          <div onClick={() => handleClick(3)}>Electronics</div>
          <div onClick={() => handleClick(4)}>Energy</div>
          <div onClick={() => handleClick(5)}>Oil & Gas</div>
        </div>
      </div>

      <div className="references-container">
        {/* row 1 */}
        <div
          ref={sectionRefs[0]}
          style={{ background: "var(--light-blue-color)" }}
          className="reference"
        >
          <div className="container-main">
            <div className="vertical-text reference-vertical">
              <h4 style={{ WebkitTextStroke: "1px var(--dark-blue-color)" }}>
                PHARMA
              </h4>
            </div>
            <div className="text">
              <h3 className="title">
                vetter pharma <br /> <span className="text-stroke">2022</span>
              </h3>
              <p>
                Detailed engineering and construction planning of clean mediums
                for the new production plant.
              </p>

              <span
                onClick={() => handleButtonClick(card1)}
                style={{ background: "var(--dark-blue-color)" }}
                className="book-btn"
              >
                Read more
              </span>
              <Modal
                isOpen={modalOpen}
                toggleModal={toggleModal}
                imageSrc={currentImage}
              />
            </div>
            <div className="ref-img">
              <img src={Vetter} alt="Vetter" />
            </div>
          </div>
        </div>

        {/* row 2 */}
        <div className="reference">
          <div className="container-main reverse">
            <div className="vertical-text reference-vertical">
              <h4 style={{ WebkitTextStroke: "1px var(--dark-blue-color)" }}>
                PHARMA
              </h4>
            </div>
            <div className="text">
              <h3 className="title">
                novartis <br /> <span className="text-stroke">2019</span>
              </h3>

              <p>
                Detailed engineering for the new production plant of innovative
                therapies.
              </p>

              <span
                onClick={() => handleButtonClick(card2)}
                style={{ background: "var(--dark-blue-color)" }}
                className="book-btn"
              >
                Read more
              </span>
            </div>
            <div className="ref-img">
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
            <div className="vertical-text reference-vertical">
              <h4 style={{ WebkitTextStroke: "1px var(--dark-blue-color)" }}>
                PHARMA
              </h4>
            </div>
            <div className="text">
              <h3 className="title">
                roche diagnostics <br />
                <span className="text-stroke">2020</span>
              </h3>

              <p>
                Detailed engineering for the new production plant of medical
                device.
              </p>

              <span
                onClick={() => handleButtonClick(card3)}
                style={{ background: "var(--dark-blue-color)" }}
                className="book-btn"
              >
                Read more
              </span>
            </div>

            <div className="ref-img">
              <img src={RocheDiagnostics} alt="RocheDiagnostics" />
            </div>
          </div>
        </div>

        {/* row 4 */}
        <div className="reference">
          <div className="container-main reverse">
            <div className="vertical-text reference-vertical">
              <h4 style={{ WebkitTextStroke: "1px var(--dark-blue-color)" }}>
                PHARMA
              </h4>
            </div>
            <div className="text">
              <h3 className="title">
                bachem <br /> <span className="text-stroke">2023</span>
              </h3>

              <p>Piping and support design for the new production plant.</p>

              <span
                onClick={() => handleButtonClick(card4)}
                style={{ background: "var(--dark-blue-color)" }}
                className="book-btn"
              >
                Read more
              </span>
            </div>
            <div className="ref-img">
              <img src={Bachem} alt="Bachem" />
            </div>
          </div>
        </div>

        {/* row 5 */}
        <div
          ref={sectionRefs[1]}
          className="reference"
          style={{ background: "var(--light-green-color)" }}
        >
          <div className="container-main">
            <div className="vertical-text reference-vertical">
              <h4 style={{ WebkitTextStroke: "1px var(--green-color)" }}>
                FOOD
              </h4>
            </div>
            <div className="text">
              <h3 className="title">
                dsm <br /> <span className="text-stroke green">2021</span>
              </h3>

              <p>
                Pre-planning for the new production plant of cattle feed
                additive.
              </p>

              <span
                onClick={() => handleButtonClick(card5)}
                style={{ background: "var(--green-color)" }}
                className="book-btn"
              >
                Read more
              </span>
            </div>
            <div className="ref-img">
              <img src={DSM} alt="DSM" />
            </div>
          </div>
        </div>

        <div className="reference">
          <div className="container-main reverse">
            <div className="vertical-text reference-vertical">
              <h4 style={{ WebkitTextStroke: "1px var(--green-color)" }}>
                FOOD
              </h4>
            </div>
            <div className="text">
              <h3 className="title">
                destilla <br /> <span className="text-stroke green">2023</span>
              </h3>

              <p>
                Basic engineering and consulting for a new extraction plant.
              </p>

              <span
                onClick={() => handleButtonClick(card6)}
                style={{ background: "var(--green-color)" }}
                className="book-btn"
              >
                Read more
              </span>
            </div>

            <div className="ref-img">
              <img src={Destilla} alt="Destilla" />
            </div>
          </div>
        </div>

        <div
          className="reference"
          style={{ background: "var(--light-green-color)" }}
        >
          <div className="container-main">
            <div className="vertical-text reference-vertical">
              <h4 style={{ WebkitTextStroke: "1px var(--green-color)" }}>
                FOOD
              </h4>
            </div>
            <div className="text">
              <h3 className="title">
                primopus <br /> <span className="text-stroke green">2023</span>
              </h3>

              <p>Detailed engineering for the new production segment.</p>

              <span
                onClick={() => handleButtonClick(card7)}
                style={{ background: "var(--green-color)" }}
                className="book-btn"
              >
                Read more
              </span>
            </div>

            <div className="ref-img">
              <img src={primopus} alt="primopus" />
            </div>
          </div>
        </div>

        <div className="reference">
          <div className="container-main reverse">
            <div className="vertical-text reference-vertical">
              <h4 style={{ WebkitTextStroke: "1px var(--green-color)" }}>
                FOOD
              </h4>
            </div>
            <div className="text">
              <h3 className="title">
                jungbunzlauer <br />{" "}
                <span className="text-stroke green">2022</span>
              </h3>

              <p>
                Pre-planning and basic engineering of the new production plant
                for bio products.
              </p>

              <span
                onClick={() => handleButtonClick(card8)}
                style={{ background: "var(--green-color)" }}
                className="book-btn"
              >
                Read more
              </span>
            </div>
            <div className="ref-img">
              <img src={Jungbunzlauer} alt="Jungbunzlauer" />
            </div>
          </div>
        </div>

        <div
          className="reference"
          style={{ background: "var(--light-green-color)" }}
        >
          <div className="container-main">
            <div className="vertical-text reference-vertical">
              <h4 style={{ WebkitTextStroke: "1px var(--green-color)" }}>
                FOOD
              </h4>
            </div>
            <div className="text">
              <h3 className="title">
                exyte <br /> <span className="text-stroke green">2023</span>
              </h3>

              <p>
                Basic engineering of the new production plant for nutrition
                yeast.
              </p>

              <span
                onClick={() => handleButtonClick(card9)}
                style={{ background: "var(--green-color)" }}
                className="book-btn"
              >
                Read more
              </span>
            </div>
            <div className="ref-img">
              <img src={Exyte} alt="Exyte" />
            </div>
          </div>
        </div>

        <div className="reference" ref={sectionRefs[2]}>
          <div className="container-main reverse">
            <div className="vertical-text reference-vertical">
              <h4 style={{ WebkitTextStroke: "1px var(--brend-color)" }}>
                CHEMICALS
              </h4>
            </div>
            <div className="text">
              <h3 className="title">
                basf <br /> <span className="text-stroke orange">2022</span>
              </h3>

              <p>
                Detailed engineering for the new production plant of vitamin A.
              </p>

              <span
                onClick={() => handleButtonClick(card10)}
                style={{ background: "var(--brend-color)" }}
                className="book-btn"
              >
                Read more
              </span>
            </div>
            <div className="ref-img">
              <img src={BASF} alt="Basf" />
            </div>
          </div>
        </div>

        <div
          className="reference"
          style={{ background: "var(--light-orange-color)" }}
        >
          <div className="container-main">
            <div className="vertical-text reference-vertical">
              <h4 style={{ WebkitTextStroke: "1px var(--brend-color)" }}>
                CHEMICALS
              </h4>
            </div>
            <div className="text">
              <h3 className="title">
                bayer <br /> <span className="text-stroke orange">2023</span>
              </h3>

              <p>
                Detailed engineering of the vacuum system in an existing
                pesticide plant.
              </p>

              <span
                onClick={() => handleButtonClick(card11)}
                style={{ background: "var(--brend-color)" }}
                className="book-btn"
              >
                Read more
              </span>
            </div>
            <div className="ref-img">
              <img src={Bayer} alt="Bayer" />
            </div>
          </div>
        </div>

        <div className="reference">
          <div className="container-main reverse">
            <div className="vertical-text reference-vertical">
              <h4 style={{ WebkitTextStroke: "1px var(--brend-color)" }}>
                CHEMICALS
              </h4>
            </div>
            <div className="text">
              <h3 className="title">
                vinex <br /> <span className="text-stroke orange">2018</span>
              </h3>

              <p>
                All engineering phases for the new ethanol production plant.
              </p>

              <span
                onClick={() => handleButtonClick(card12)}
                style={{ background: "var(--brend-color)" }}
                className="book-btn"
              >
                Read more
              </span>
            </div>
            <div className="ref-img">
              <img src={Vinex} alt="Vinex" />
            </div>
          </div>
        </div>

        <div
          ref={sectionRefs[3]}
          className="reference"
          style={{ background: "var(--light-orange-color)" }}
        >
          <div className="container-main">
            <div className="vertical-text reference-vertical">
              <h4 style={{ WebkitTextStroke: "1px var(--dark-blue-color)" }}>
                ELECTRONICS
              </h4>
            </div>
            <div className="text">
              <h3 className="title">
                tesla <br /> <span className="text-stroke blue">2023</span>
              </h3>

              <p>Pre-planning for the new production plant for batteries.</p>

              <span
                onClick={() => handleButtonClick(card13)}
                style={{ background: "var(--dark-blue-color)" }}
                className="book-btn"
              >
                Read more
              </span>
            </div>
            <div className="ref-img">
              <img src={Tesla} alt="Tesla" />
            </div>
          </div>
        </div>

        <div className="reference" ref={sectionRefs[4]}>
          <div className="container-main reverse">
            <div className="vertical-text reference-vertical">
              <h4 style={{ WebkitTextStroke: "1px var(--green-color)" }}>
                ENETRGY
              </h4>
            </div>
            <div className="text">
              <h3 className="title">
                jaenschwalde <br />{" "}
                <span className="text-stroke green">2022</span>
              </h3>

              <p>Detailed engineering of district heating system.</p>

              <span
                onClick={() => handleButtonClick(card14)}
                style={{ background: "var(--green-color)" }}
                className="book-btn"
              >
                Read more
              </span>
            </div>
            <div className="ref-img">
              <img src={Jaenschwalde} alt="Jaenschwalde" />
            </div>
          </div>
        </div>

        <div
          className="reference"
          style={{ background: "var(--light-green-color)" }}
        >
          <div className="container-main">
            <div className="vertical-text reference-vertical">
              <h4 style={{ WebkitTextStroke: "1px var(--green-color)" }}>
                ENETRGY
              </h4>
            </div>
            <div className="text">
              <h3 className="title">
                udarnaya <br /> <span className="text-stroke green">2017</span>
              </h3>

              <p>Detailed engineering for the new steam plant.</p>

              <span
                onClick={() => handleButtonClick(card15)}
                style={{ background: "var(--green-color)" }}
                className="book-btn"
              >
                Read more
              </span>
            </div>
            <div className="ref-img">
              <img src={Udarnaya} alt="Udarnaya" />
            </div>
          </div>
        </div>

        <div className="reference">
          <div className="container-main reverse">
            <div className="vertical-text reference-vertical">
              <h4 style={{ WebkitTextStroke: "1px var(--green-color)" }}>
                ENETRGY
              </h4>
            </div>
            <div className="text">
              <h3 className="title">
                mvv <br /> <span className="text-stroke green">2020</span>
              </h3>

              <p>Detailed engineering for the new steam duct.</p>

              <span
                onClick={() => handleButtonClick(card16)}
                style={{ background: "var(--green-color)" }}
                className="book-btn"
              >
                Read more
              </span>
            </div>
            <div className="ref-img">
              <img src={MVV} alt="MVV" />
            </div>
          </div>
        </div>

        <div
          ref={sectionRefs[5]}
          className="reference"
          style={{ background: "var(--light-orange-color)" }}
        >
          <div className="container-main">
            <div className="vertical-text reference-vertical">
              <h4 style={{ WebkitTextStroke: "1px var(--brend-color)" }}>
                OIL & GAS
              </h4>
            </div>
            <div className="text">
              <h3 className="title">
                omv <br /> <span className="text-stroke orange">2016</span>
              </h3>

              <p>Pipe design for the plant revamp.</p>

              <span
                onClick={() => handleButtonClick(card17)}
                style={{ background: "var(--brend-color)" }}
                className="book-btn"
              >
                Read more
              </span>
            </div>
            <div className="ref-img">
              <img src={OMV} alt="OMV" />
            </div>
          </div>
        </div>
      </div>

      <div className="insights container-main padding30">
        <h2 className="title">our projects insights</h2>
        <center>
          <p>Share of projects per business area</p>
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
