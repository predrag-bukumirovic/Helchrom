import React from "react";
import "../assets/scss/cookies.scss";

export default function Cookies() {
  setTimeout(() => {
    if (!localStorage.getItem("cookies")) {
      document.querySelector(".cookies").classList.add("active");
    }
  }, 4000);

  const btnCookies = () => {
    localStorage.setItem("cookies", "true");
    document.querySelector(".cookies").classList.remove("active");
  };

  const closeCookies = () => {
    document.querySelector(".cookies").classList.remove("active");
  };
  return (
    <div>
      <div className="cookies">
        We, at Helmchron, consider your data protection a priority. This privacy
        policy only applies to our website, i.e. does not apply to any sites
        that are not affiliated with our company. We do not take responsibility
        for the content of any third-party websites, even if we share their
        links. <a href="/privacy-policy">More about the privacy policy</a>
        <div>
          <button onClick={() => btnCookies()}>allow</button>
          <button onClick={() => closeCookies()}>decline</button>
        </div>
      </div>
    </div>
  );
}
