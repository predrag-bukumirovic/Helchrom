import React, {lazy, useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cookies from "./components/Cookies";
import Thanks from "./pages/Thanks";

import AOS from "aos";
import "aos/dist/aos.css";
import ScrollTop from "./components/ScrollTop";
import Navbar from "./components/Navbar";
import Loader from "./components/Loader";
// import ActionButton from "./Accessibility/ActionButton";

const Blog = lazy(() => import("./pages/Blog"));
const Volleyball = lazy(() => import("./pages/Volleyball"));
const Diversity = lazy(() => import("./pages/Diversity"));
const TeamTalk = lazy(() => import("./pages/TeamTalk"));
const Sustainability = lazy(() => import("./pages/Sustainability"));
const Home = lazy(() => import('./pages/Home'))
const Career = lazy(() => import("./pages/Career"));
const News = lazy(() => import("./pages/News"));
const Contact = lazy(() => import("./pages/Contact"));
const WhoAreWe = lazy(() => import("./pages/WhoAreWe"));
const OurTeam = lazy(() => import("./pages/OurTeam"));
const References = lazy(() => import("./pages/References"));
const OurVision = lazy(() => import("./pages/OurVision"));
const OurValues = lazy(() => import("./pages/OurValues"));
const OurServices = lazy(() => import("./pages/OurServices"));
const Footer = lazy(() => import("./components/Footer"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const LegalStatement = lazy(() => import("./pages/LegalStatement"));
const Academy = lazy(() => import("./pages/Academy"));
const InnoLab = lazy(() => import("./pages/innoLab"));
const Navigator = lazy(() => import("./pages/Navigator"));
const One = lazy(() => import("./pages/One"));
const Divisions = lazy(() => import("./pages/Divisions"));

const Chemicals = lazy(() => import("./pages/Chemicals"));
const Achema = lazy(() => import("./pages/Achema"));
const K2022 = lazy(() => import("./pages/K2022"));
const NotFound = lazy(() => import("./pages/NotFound"));

const Electronics = lazy(() => import("./pages/Electronics"));
const Food = lazy(() => import("./pages/Food"));
const Energy = lazy(() => import("./pages/Energy"));
const Pharma = lazy(() => import("./pages/Pharma"));
const Oil = lazy(() => import("./pages/Oil"));

function App() {
  const [isVisible, setIsVisible] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
      setIsVisible(true);
    }, []);

    useEffect(() => {
      AOS.init({ duration: 1000, once: true });
    }, []);

    const handleLoaded = () => {
      setIsLoaded(true); // Postavi stanje kada se učitavanje završi
    };

  return <div className={`App ${isVisible ? "visible" : ""}`}>
    
      <Router>
        {isLoaded ?  (
          <>
          <Navbar/>
        <Routes>
          <Route path="/" element={<><Home/></>} />
          <Route path="/career" element={<Career />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/news" element={<News />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/volleyball" element={<Volleyball />} />
          <Route path="/blog/diversity" element={<Diversity />} />
          <Route path="/blog/sustainability" element={<Sustainability />} />
          <Route path="/about-us/who-are-we" element={<WhoAreWe />} />
          <Route path="/about-us/our-team" element={<OurTeam />} />
          <Route path="/about-us/our-vision-and-mission" element={<OurVision />} />
          <Route path="/about-us/our-values" element={<OurValues />} />
          <Route path="/our-services" element={<OurServices />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/legal-statement" element={<LegalStatement />} />
          <Route path="/chemicals" element={<Chemicals />} />
          <Route path="/pharma" element={<Pharma />} />
          <Route path="/news/achema" element={<Achema />} />
          <Route path="/news/k2022" element={<K2022 />} />
          <Route path="/news/team-talk" element={<TeamTalk />} />
          <Route path="/our-references" element={<References />} />
          <Route path="/initiatives/academy" element={<Academy />} />
          <Route path="/initiatives/innolab" element={<InnoLab />} />
          <Route path="/initiatives/navigator" element={<Navigator />} />
          <Route path="/initiatives/helmchrone" element={<One />} />
          <Route path="/electronics" element={<Electronics />} />
          <Route path="/food" element={<Food />} />
          <Route path="/energy" element={<Energy />} />
          <Route path="/oil&gas" element={<Oil />} />
          <Route path="/divisions" element={<Divisions />} />
          <Route path="/thanks" element={<Thanks />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>

        <Cookies />
        <Footer />
        {/* <ActionButton/> */}
        <ScrollTop />
        </>
        ) : (
          
        <Loader onLoaded={handleLoaded}/>  
        )}
      </Router>
    </div>;
}

export default App;