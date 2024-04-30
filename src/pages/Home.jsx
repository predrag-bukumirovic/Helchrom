import React, { useEffect, useState, useRef } from "react";
import {
  CCarousel,
  CCarouselCaption,
  CCarouselItem,
  CImage
} from "@coreui/react";
import Carousel from "react-multi-carousel";
// import AOS from "aos";
// import "aos/dist/aos.css";
import WhoIcons from "../components/WhoIcons";
import "../assets/scss/home.scss";
import "../assets/scss/slider.scss";
import "@coreui/coreui/dist/css/coreui.min.css";
import "react-multi-carousel/lib/styles.css";

import mainImg from "../assets/images/Home/main-img1.webp";
import mainImg1 from "../assets/images/Home/main-img2.webp";
import mainImg2 from "../assets/images/Home/main-img3.webp";
import Facts2010 from "../assets/images/Home/Founded.png";
import Facts6 from "../assets/images/Home/Operations.png";
import Facts7 from "../assets/images/Home/7days.png";
import Facts180 from "../assets/images/Home/180min.png";
import Factshappy from "../assets/images/Home/Happy.png";
import Facts5 from "../assets/images/Home/Inno.png";
import Story2013 from "../assets/images/Home/Story2013.webp";
import Story2010 from "../assets/images/Home/Story2010.webp";
import Story2015 from "../assets/images/Home/Story2015.webp";
import Story2016 from "../assets/images/Home/Story2016.webp";
import Story2020 from "../assets/images/Home/Story2020.webp";
import Story2023 from "../assets/images/Home/Story2023.webp";
import HCOne from "../assets/images/HCOne.png";
import icon1 from "../assets/images/Home/1.webp";
import icon2 from "../assets/images/Home/2.webp";
import icon3 from "../assets/images/Home/3.webp";
import icon4 from "../assets/images/Home/4.webp";
import icon5 from "../assets/images/Home/5.webp";
import quotation from "../assets/images/quotation.png";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 1
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

export default function Home() {
  const [numbers, setNumbers] = useState([0, 0, 0, 0, 0, 0]);
  const finalNumbers = [2010, 6, 7, 180, 50, 5];
  const animationStarted = useRef(false);
  const factsRef = useRef(null);

  useEffect(() => {
    const options = { root: null, rootMargin: "0px", threshold: 0.5 }; // Change this threshold value according to your need

    const observer = new IntersectionObserver(handleIntersect, options);

    if (factsRef.current) {
      observer.observe(factsRef.current);
    }

    return () => {
      if (factsRef.current) {
        observer.unobserve(factsRef.current);
      }
    };
  }, []);

  const handleIntersect = entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !animationStarted.current) {
        finalNumbers.forEach((finalNumber, index) => {
          animateNumber(index, finalNumber);
        });
        animationStarted.current = true;
      }
    });
  };

  const animateNumber = (index, finalNumber) => {
    const duration = 5000; // 5 seconds
    const stepTime = duration / finalNumber;
    let currentNumber = 0;

    const interval = setInterval(() => {
      currentNumber++;
      setNumbers(prevNumbers => {
        const newNumbers = [...prevNumbers];
        newNumbers[index] = currentNumber;
        return newNumbers;
      });

      if (currentNumber === finalNumber) {
        clearInterval(interval);
      }
    }, stepTime);
  };

  return (
    <div>
      <div className="slider">
        <CCarousel className="slider-main" controls transition="crossfade">
          <CCarouselItem>
            <a href="/about-us/who-are-we">
              <CImage className="d-block w-100" src={mainImg} alt="slide 1" />
              <CCarouselCaption className="img">
                <div>
                  <p>Who are we?</p>
                </div>
              </CCarouselCaption>
            </a>
          </CCarouselItem>
          <CCarouselItem>
            <a href="/competences&services/our-services">
              <CImage className="d-block w-100" src={mainImg1} alt="slide 2" />
              <CCarouselCaption className="img">
                <div>
                  <p>Our Services: Process Engineering</p>
                </div>
              </CCarouselCaption>
            </a>
          </CCarouselItem>
          <CCarouselItem>
            <a href="/about-us/our-values">
              <CImage className="d-block w-100" src={mainImg2} alt="slide 3" />
              <CCarouselCaption className="img">
                <div>
                  <p>How do we work?</p>
                </div>
              </CCarouselCaption>
            </a>
          </CCarouselItem>
        </CCarousel>

        <div className="box-img">
          <div>
            <a href="/about-us/who-are-we">
              <img src={mainImg} alt="Main" />
              <div className="img-text">
                <div>
                  <p>Who are we?</p>
                </div>
              </div>
            </a>
          </div>
          <div>
            <a href="/competences&services/our-services">
              <img src={mainImg1} alt="Main" />
              <div className="img-text">
                <div>
                  <p>Our Services: Process Engineering</p>
                </div>
              </div>
            </a>
          </div>
          <div>
            <a href="/about-us/our-values">
              <img src={mainImg2} alt="Main" />
              <div className="img-text">
                <div>
                  <p>How do we work?</p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>

      <div className="welcome container-main padding30">
        <h1>
          <p data-aos="fade-up" data-aos-duration="500">
            W
          </p>
          <p data-aos="fade-down" data-aos-duration="800">
            E
          </p>
          <p data-aos="fade-up" data-aos-duration="1100">
            L
          </p>
          <p data-aos="fade-down" data-aos-duration="1400">
            C
          </p>
          <p data-aos="fade-up" data-aos-duration="1700">
            O
          </p>
          <p data-aos="fade-down" data-aos-duration="2000">
            M
          </p>
          <p data-aos="fade-up" data-aos-duration="2300">
            E
          </p>{" "}
          <b>to Helmchron official website.</b>
        </h1>
        <p>
          Helmchron is a family-owned company dedicated to providing
          comprehensive and full-service engineering solutions for the
          manufacturing facilities of pharmaceuticals, chemicals, food and bio
          products, electronics, energy, and oil and gas. We take pride in
          contributing to the manufacturing of globally available, safe, and
          high-quality products since 2010.<br /> Our mission has remained the
          same since our beginnings - we improve the quality of life for
          everyone everywhere whilst keeping our environment healthy for the
          coming generations. <br /> Today, our scope is broader and our team
          more diverse providing unique perspectives, agility, and efficacy.<br />{" "}
          Our engineering solutions are now delivered to leaders and innovators
          across different industries with a focus on global impact, sustainable
          outcomes, and long-lasting partnerships.
        </p>

        <a href="/about-us/our-vision-and-mission">Read More</a>
      </div>

      <div className="our-home container-main padding30">
        <h2 className="title">OUR SERVICES</h2>
        <p style={{ textAlign: "center" }}>
          We provide end-to-end engineering services for manufacturing facility
          design and operations management.
        </p>

        <div>
          <div>
            <img src={icon1} alt="" />
          </div>
          <div>
            <img src={icon2} alt="" />
          </div>
          <div>
            <img src={icon3} alt="" />
          </div>
          <div>
            <img src={icon4} alt="" />
          </div>
          <div>
            <img src={icon5} alt="" />
          </div>
        </div>

        <center>
          <a className="book-btn" href="/contact">
            Book a meeting
          </a>
        </center>
      </div>

      <div className="unique">
        <div className="container-main padding30">
          <h2>Unique service concept</h2>
          <h3>
            HELMCHR<span>ONe</span>
          </h3>

          <div className="unique-row">
            <div className="text">
              <p>
                In a constant pursuit to upgrade our services and expertise, we
                noticed a significant gap in focus on one project`s outcomes
                that led to prolonged delivery time and budget overrun.
              </p>
              <p>
                To overcome this gap and meet the unique requirements of each of
                our clients, we have implemented an innovative service concept -
                Helmchron ONE.
              </p>
              <p>
                Helmchron ONE enables the complete focus of ONE team on ONE
                client and ONE project only.
              </p>
              <p>
                <b>One Team:</b> Each of our projects is assigned to one of our
                teams. The team is fully dedicated and accountable for the
                outcomes, ensuring that every aspect is meticulously considered
                and executed.
              </p>
              <p>
                <b>One Client:</b> We believe in forging strong, long-lasting
                partnerships, and that starts with putting the client first -
                each team delivers to one client only.
              </p>

              <p>
                <b>One Project:</b> By channeling our expertise, resources, and
                creativity into delivering the best results for one project, we
                ensure unmatched quality, efficiency, and effectiveness.
              </p>

              <p>Ready to focus on success and experience Helmchron ONE?</p>
            </div>
            <div className="img">
              <img src={HCOne} alt="HC One" />
            </div>
          </div>
        </div>
      </div>

      <div className="areas padding30 container-main">
        <div className="areas-text">
          <h2 className="title">OUR BUSINESS AREAS</h2>

          <p style={{ textAlign: "center" }}>
            Our areas of operations are aligned with our mission - to deliver
            impact globally. We are non-exclusively working in the following
            business sectors:
          </p>
        </div>
        <WhoIcons />
      </div>

      <div className="facts-box">
        <div className="facts container-main padding30">
          <h2 className="title">FACTS ABOUT US</h2>
          <div className="facts-row">
            <p>
              We are a team of highly skilled, focused and self-motivated
              enthusiasts passionate about outcomes, competencies, and
              partnerships. <br /> Our team is located in Belgrade, Serbia,
              however, we are driven by international projects and
              collaborations. <br /> We prioritize delivering high-quality
              solutions in process and chemical engineering, while upholding the
              utmost standards of integrity, agility, and accountability.
            </p>
          </div>

          <div ref={factsRef} className="facts-icon">
            <div className="icon-item">
              <img src={Facts2010} alt="" />
              <div className="text">
                <span className="word">founder in</span>
                <span className="number">
                  {numbers[0]}
                </span>
              </div>
            </div>
            <div className="icon-item">
              <img src={Facts6} alt="" />

              <div className="text">
                <span className="word">operations areas</span>
                <span className="number">
                  {numbers[1]}
                </span>
              </div>
            </div>
            <div className="icon-item">
              <img src={Facts7} alt="" />

              <div className="text">
                <span className="word">
                  numeba of week days we provide support to our clients
                </span>
                <span className="number">
                  {numbers[2]}
                </span>
              </div>
            </div>
            <div className="icon-item">
              <img src={Facts180} alt="" />

              <div className="text">
                <span className="number" style={{ lineHeight: "23px" }}>
                  {numbers[3]}{" "}
                  <span className="word-180">
                    {" "}minuter average feedback time
                  </span>
                </span>
              </div>
            </div>
            <div className="icon-item">
              <img src={Factshappy} alt="" />

              <div className="text">
                <span className="word">happy clients and partnets</span>
                <span className="number">
                  {" "}&gt; {numbers[4]}
                </span>
              </div>
            </div>
            <div className="icon-item">
              <img src={Facts5} alt="" />

              <div className="text" style={{ flexDirection: "column-reverse" }}>
                <span className="word">
                  published papers as a result of our inno lab
                </span>
                <span className="number">
                  &gt; {numbers[5]}
                </span>
              </div>
            </div>
          </div>

          <center>
            <a href="/about-us/who-are-we">Read more</a>
          </center>
        </div>
      </div>

      <div className="storyline container-main padding30">
        <h2 className="title">OUR STORYLINE</h2>

        <p style={{ textAlign: "center" }}>
          Our story began in 2010. and since then we have been providing
          services to international and local leaders.{" "}
        </p>

        <section className="storyline-box">
          <div className="box box1">
            <div className="text text1-1">
              <p>
                Our initial projects were community-focused, yet our vision was
                always global - to deliver solutions for international
                initiatives that enhance the quality of life for everyone
                everywhere.
              </p>
            </div>
            <div className="img-date img1-1">
              <img src={Story2013} alt="" />
              <span>2013</span>
            </div>
            <div className="text text1-2">
              <p>
                We were proud and enthusiastic to witness our outcomes
                materializing and our mission taking shape as we actively
                engaged in projects within the global market...
              </p>
            </div>
            <div className="img-date img1-2">
              <img src={Story2016} alt="" />
              <span>2016</span>
            </div>
            <div className="text text1-3">
              <p>
                Throughout the pandemic, our strong focus has been on projects
                within the pharmaceutical sector, aiming to achieve and sustain
                global health.
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
                We are making the first steps towards our vision, gaining
                valuable perspective from contributing to big, complex teams and
                projects.
              </p>
            </div>

            <div className="img-date img2-2">
              <span>2015</span>
              <img src={Story2015} alt="" />
            </div>
            <div className="text text2-2">
              <p>
                As we continue our growth and development with additional
                worldwide projects, we fine-tune our strategy towards new
                business areas to elevate our impact.
              </p>
            </div>

            <div className="img-date img2-3">
              <span>2020</span>
              <img src={Story2020} alt="" />
            </div>
            <div className="text text2-3">
              <p>
                We are committed to development and innovation, aiming to master
                the challenges of manufacturing and sustainability. Enduring
                value for the coming generations is our goal.
              </p>
            </div>
          </div>
        </section>
      </div>

      <div className="video">
        <p>We have at least one thing in common...</p>
        <center>
          <iframe
            height="500"
            width="1000"
            src="https://www.youtube.com/embed/KjxWR92Yb4o"
            title="Helmchron - Chemistry Connects Us"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </center>
      </div>

      <div className="testimonials container-main">
        <div className="slider-testi padding30">
          <h2 className="title">WE VALUE OUR PARTNERS' FEEDBACK</h2>
          <Carousel
            responsive={responsive}
            showDots={true}
            infinite={true}
            autoPlay={true}
            removeArrowOnDeviceType={[
              "tablet",
              "mobile",
              "desktop",
              "superLargeDesktop"
            ]}
          >
            <div className="testi-item">
              <img src={quotation} alt="quotation" />

              <div>
                <p>
                  Helmchron team demonstrated extensive expertise and all-time
                  availability that enabled solving the most challenging tasks
                  efficiently and successfully. {" "}
                </p>
                <p>
                  They managed well with an increased workload and adjusted
                  timeline. Their comprehensive experience, reliability, and
                  systematic approach resulted in great quality of delivered
                  work and our overall collaboration.{" "}
                </p>
              </div>
            </div>
            <div className="testi-item">
              <img src={quotation} alt="quotation" />

              <div>
                <p>
                  Due to their deep engineering expertise and experience,
                  Helmchron team was able to understand the project`s tasks
                  quickly and deliver results on time and within budget.{" "}
                </p>
                <p>
                  The team showed high motivation and an enthusiastic approach
                  to all the challenges and has overcome these with outstanding
                  initiative. They work precisely and with care for outcomes and
                  the rest of the team. These qualities enabled successful
                  delivery and our satisfaction.{" "}
                </p>
              </div>
            </div>
            <div className="testi-item">
              <img src={quotation} alt="quotation" />
              <div>
                <p>
                  Due to the wide scope of their expertise and interest, the
                  project`s outcomes were accomplished independently, precisely,
                  and concisely with great dedication and enthusiasm. We have
                  come to know Helmchron team as open-minded, pleasant to work
                  with, and strongly motivated.{" "}
                </p>
              </div>
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
}
