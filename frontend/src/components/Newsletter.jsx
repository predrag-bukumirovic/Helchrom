import { useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Newsletter() {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3001/api/newsletter", {
        email,
      });
      toast.success("You have successfully subscribed!");
      setEmail("");
    } catch (err) {
      toast.error("Error! You may already be subscribed.");
    }
  };

  return (
    <div className="form-newsletter">
      <p>
        Subscribe to our newsletter <br />
        Get the latest updates, news, and exclusive offers.
      </p>
      <ToastContainer />
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button className="button" type="submit">
          Subscribe
        </button>
      </form>
    </div>
  );
}
