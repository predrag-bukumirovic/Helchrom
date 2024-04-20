import React from "react";
import "../assets/scss/footer.scss";
import TikTok from "../assets/images/tiktok.webp";
import Instagram from "../assets/images/instagram.webp";
import Linkedine from "../assets/images/linkedine.webp";
import Twitter from "../assets/images/twitter.webp";
import Logo from "../assets/images/logowhite.webp";

export default function Footer() {
  return (
    <footer>
      <div className="w-100">
        <div className="">
          <div className="footer-container">
            <div className="footer-box container-main">
              <div className="logo">
                <img src={Logo} alt="Logo" />
              </div>
              <div className="map-links">
                <p>
                  <b>Quick</b> links
                </p>
                <a href="/about-us/who-are-we">Who are we?</a>
                <a href="/competences&services/our-services">Services</a>
                <a href="/about-us/our-values">How do we work?</a>
              </div>
              <div>
                <a href="/privacy-policy">Privacy policy</a>
                <a href="/legal-statement">Legal statement</a>
              </div>
              <div className="internet">
                <p>
                  <b>Let`s</b> interact
                </p>
                <div>
                  <a
                    href="https://www.linkedin.com/company/helmchron/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      style={{ marginLeft: 0 }}
                      src={Linkedine}
                      alt="Instagram"
                    />
                  </a>
                  <a
                    href="https://twitter.com/HelmchronGlobal"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={Twitter} alt="Instagram" />
                  </a>
                  <a
                    href="https://www.instagram.com/helmchron_global/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={Instagram} alt="Instagram" />
                  </a>
                  <a
                    href="https://www.tiktok.com/@helmchron_global"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={TikTok} alt="TikTok" />
                  </a>
                </div>
              </div>
              <div className="footer-contact">
                <p>
                  <b>Contact</b> us
                </p>
                <a href="mailto:office@helmchron.com">office@helmchron.com</a>
              </div>
            </div>
            <div className="copyright container-main">
              <div>
                Helmchron © 2023 {/*{new Date().getFullYear()} {""} */}
                <a href="/privacy-policy">Privacy policy</a> | by{" "}
                <a
                  href="http://www.gold-digital.rs"
                  target="_blank"
                  rel="noreferrer"
                >
                  Gold Digital
                </a>
              </div>
              <div />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
