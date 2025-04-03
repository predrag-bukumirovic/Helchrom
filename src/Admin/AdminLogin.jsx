import React, { useState } from "react";
import "../assets/scss/admin.scss";
import axios from "axios";
import logo from "../assets/images/logo.webp";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:3001/admin/login",
        {
          email,
          password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      localStorage.setItem("token", res.data.token);
      toast.success("Successful registration!");
      navigate("/admin");
    } catch (err) {
      if (err.response) {
        console.error(err.response.data);
      } else if (err.request) {
        console.error("No response from server");
      } else {
        console.error(err.message);
      }
      setMessage("Error! Server unavailable or incorrect data.");
    }
  };

  return (
    <div className="admin-login">
      <ToastContainer />
      <div className="container-main">
        <a href="/">
          <img src={logo} alt="Helmchron-logo" />
        </a>
        <h1>Newsletter LOGIN admin panel</h1>

        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button className="button" type="submit">
            Login
          </button>
          {message && <p style={{ color: "red" }}>{message}</p>}
        </form>
      </div>
    </div>
  );
}
