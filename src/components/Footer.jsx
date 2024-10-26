import React, { useState } from "react";
import "../assets/scss/footer.scss";
import TikTok from "../assets/images/tiktok.webp";
import Instagram from "../assets/images/instagram.webp";
import Linkedine from "../assets/images/linkedine.webp";
import Twitter from "../assets/images/twitter.png";
import Logo from "../assets/images/logowhite.webp";
import { useTranslation } from "react-i18next";
import LanguageModal from "./LanguageModal";

export default function Footer() {
  const { t } = useTranslation();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

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
                <p dangerouslySetInnerHTML={{ __html: t("quick_links") }} />
                <a href="/about-us/who-are-we">
                  {t("navbar.who_are_we")}
                </a>
                <a href="/our-services">
                  {t("navbar.our_services")}
                </a>
                <a href="/about-us/our-values">
                  {t("navbar.how_do_we_work")}
                </a>
              </div>
              <div>
                <a href="/privacy-policy">
                  {t("policy.title")}
                </a>
                <a href="/legal-statement">
                  {t("navbar.legal")}
                </a>
              </div>
              <div className="internet">
                <p dangerouslySetInnerHTML={{ __html: t("lets") }} />
                <div>
                  <a
                    href="https://www.linkedin.com/company/helmchron/"
                    target="_blank"
                    rel="noreferrer"
                    className="tip"
                  >
                    <img
                      style={{ marginLeft: 0 }}
                      src={Linkedine}
                      alt="Instagram"
                    />
                    <span className="tooltip-text">LinkedIn</span>
                  </a>
                  <a
                    href="https://twitter.com/HelmchronGlobal"
                    target="_blank"
                    rel="noreferrer"
                    className="tip"
                  >
                    <img src={Twitter} alt="Instagram" />
                    <span className="tooltip-text">X</span>
                  </a>
                  <a
                    href="https://www.instagram.com/helmchron_global/"
                    target="_blank"
                    rel="noreferrer"
                    className="tip"
                  >
                    <img src={Instagram} alt="Instagram" />
                    <span className="tooltip-text">Instagram</span>
                  </a>
                  <a
                    href="https://www.tiktok.com/@helmchron_global"
                    target="_blank"
                    rel="noreferrer"
                    className="tip"
                  >
                    <img src={TikTok} alt="TikTok" />
                    <span className="tooltip-text">TikTok</span>
                  </a>
                </div>
                <button onClick={openModal} className="change-leng">
                  Change language
                </button>

                <LanguageModal
                  isOpen={isModalOpen}
                  onRequestClose={closeModal}
                  onSelectLanguage={lang =>
                    console.log(`Selected language: ${lang}`)}
                />
              </div>

              <div className="footer-contact">
                <p dangerouslySetInnerHTML={{ __html: t("contact_us") }} />
                <a href="mailto:office@helmchron.com">office@helmchron.com</a>
              </div>
            </div>
            <div className="copyright container-main">
              <div>
                Helmchron © 2023 {/*{new Date().getFullYear()} {""} */}
                <a href="/privacy-policy">{t("policy.title")}</a> | by{" "}
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
