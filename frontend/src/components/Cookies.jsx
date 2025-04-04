import React, { useEffect } from "react";
import "../assets/scss/cookies.scss";

export default function Cookies() {
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!localStorage.getItem("cookies")) {
        document.querySelector(".cookies").classList.add("active");
      }
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

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
        <p>
          We, at Helmchron, consider your data protection a priority. This
          privacy policy only applies to our website, i.e. does not apply to any
          sites that are not affiliated with our company. We do not take
          responsibility for the content of any third-party websites, even if we
          share their links.{" "}
          <a href="/privacy-policy">More about the privacy policy</a>
        </p>

        <div>
          <button onClick={btnCookies}>allow</button>
          <button onClick={closeCookies}>decline</button>
        </div>
      </div>
    </div>
  );
}
