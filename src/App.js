import React, {lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cookies from "./components/Cookies";
import Search from "./pages/Search";
import Thanks from "./pages/Thanks";
const Header = lazy(() => import("./components/Header"));
const Home = lazy(() => import('./pages/Home'))
const Career = lazy(() => import("./pages/Career"));
const News = lazy(() => import("./pages/News"));
const Contact = lazy(() => import("./pages/Contact"));
const WhoAreWe = lazy(() => import("./pages/WhoAreWe"));
const OurTeam = lazy(() => import("./pages/OurTeam"));
const OurVision = lazy(() => import("./pages/OurVision"));
const OurValues = lazy(() => import("./pages/OurValues"));
const OurCore = lazy(() => import("./pages/OurCore"));
const OurServices = lazy(() => import("./pages/OurServices"));
const Footer = lazy(() => import("./components/Footer"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const LegalStatement = lazy(() => import("./pages/LegalStatement"));
const Environment = lazy(() => import("./pages/Environment"));
const Vehicles = lazy(() => import("./pages/Vehicles"));
const Pharma = lazy(() => import("./pages/Pharma"));
const Chemicals = lazy(() => import("./pages/Chemicals"));
const Achema = lazy(() => import("./pages/Achema"));
const K2022 = lazy(() => import("./pages/K2022"));
const NotFound = lazy(() => import("./pages/NotFound"));

function App() {

  const renderLoader = () => <p>Loading</p>;


  return <Router>
      <div className="body-bg">
        <div className="App">
          <Suspense fallback={renderLoader()}>
            <Header />
            {/* <Navbar /> */}
          </Suspense>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/career" element={<Career />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/news" element={<News />} />
            <Route path="/about-us/who-are-we" element={<WhoAreWe />} />
            <Route path="/about-us/our-team" element={<OurTeam />} />
            <Route path="/about-us/our-vision-and-mission" element={<OurVision />} />
            <Route path="/about-us/our-values" element={<OurValues />} />
            <Route path="/competences&services/our-core-competencies" element={<OurCore />} />
            <Route path="/competences&services/our-services" element={<OurServices />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/legal-statement" element={<LegalStatement />} />
            <Route path="/search" element={<Search />} />
            <Route path="/chemicals" element={<Chemicals />} />
            <Route path="/pharma" element={<Pharma />} />
            <Route path="/environment" element={<Environment />} />
            <Route path="/vehicles" element={<Vehicles />} />
            <Route path="/news/achema" element={<Achema />} />
            <Route path="/news/k2022" element={<K2022 />} />
            <Route path="/thanks" element={<Thanks />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>

          <Cookies />
          <Footer />
        </div>
      </div>
    </Router>;
}

export default App;