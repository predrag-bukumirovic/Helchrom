import React from "react";
import Header from "./Header";
import Nav from "./Nav";
import Button from "./Button";
import "./accessinility.css";

export default function Drawer({ isOpen, onClose }) {
  return (
    <main className={`drawer ${isOpen ? "open" : ""}`}>
      <Header onClose={onClose} />
      <Nav />
      <Button onClick={onClose} />
    </main>
  );
}
