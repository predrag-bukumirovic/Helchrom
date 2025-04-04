import React from "react";
import "../assets/scss/notfound.scss";
// import Logo from "../assets/images/dubleLogo.png";

export default function NotFound() {
  return (
    <div className="container-main not-found padding30">
      <h1>404</h1>
      <h2>There's NOTHING here...</h2>
      <p>...maybe the page you're looking for is not found or never existed.</p>

      <a href="/">Back to home</a>
    </div>
  );
}
