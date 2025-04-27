import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Admin = () => {
  const [emails, setEmails] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/admin/login");
    } else {
      fetchEmails();
    }
  }, []);

  const fetchEmails = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.get("https://api.helmchron.com/api/newsletter", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setEmails(res.data);
    } catch (err) {
      console.error(err);
      if (err.response?.status === 401 || err.response?.status === 403) {
        navigate("/admin/login");
      }
      setEmails([]);
    } finally {
      setLoading(false);
    }
  };

  const deleteEmail = async (id) => {
    const token = localStorage.getItem("token");
    if (!window.confirm("Are you sure you want to delete?")) return;
    try {
      await axios.delete(`https://api.helmchron.com/api/newsletter/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setEmails(emails.filter((e) => e.id !== id));
      toast.success("Email successfully deleted.");
    } catch (err) {
      console.error(err);
      toast.error("Error while deleting.");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/admin/login");
  };

  const copyAllEmails = () => {
    const emailList = emails.map(e => e.email).join(", "); // Spajanje svih mejlova u jedan string sa novim redom
    navigator.clipboard.writeText(emailList)
      .then(() => toast.success("All emails copied to clipboard!"))
      .catch((err) => toast.error("Failed to copy emails"));
  };

  return (
    <div className="admin-panel">
      <ToastContainer />
      <div className="container-main">
  
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h1>Admin Panel</h1>
          <button className="logout" onClick={handleLogout}>
            Logout
          </button>
        </div>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Email</th>
                <th>Date of subscription</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {Array.isArray(emails) &&
                emails.map((e, index) => (
                  <tr key={e.id}>
                    <td>{index + 1}</td>
                    <td>{e.email}</td>
                    <td>
                      {e.created_temp
                        ? new Date(e.created_temp).toLocaleString()
                        : "N/A"}
                    </td>
                    <td>
                      <button onClick={() => deleteEmail(e.id)}>Delete</button>
                      <button
                        className="copy"
                        onClick={() => {
                          navigator.clipboard.writeText(e.email);
                          toast.success("Email copied!");
                        }}
                      >
                        Copy Email
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
            <button onClick={copyAllEmails} className="copy-all">Copy all emails</button>
          </table>  
          </div>
        )}

       
      </div>
    </div>
  );
};

export default Admin;
