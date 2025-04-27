const db = require("../config/db");

exports.subscribe = (req, res) => {
  const { email } = req.body;
  if (!email) return res.status(400).json({ message: "Email required" });

  const stmt = `INSERT INTO newsletter (email) VALUES (?)`;
  db.query(stmt, [email], (err) => {
    if (err)
      return res.status(500).json({ message: "Already subscribed or error" });
    res.status(200).json({ message: "Subscribed successfully" });
  });
};

exports.getAll = (req, res) => {
  db.query("SELECT * FROM newsletter ORDER BY id DESC", (err, results) => {
    if (err) return res.status(500).json({ message: "Database error" });
    res.json(results);
  });
};

exports.remove = (req, res) => {
  const { id } = req.params;
  db.query("DELETE FROM newsletter WHERE id = ?", [id], (err) => {
    if (err) return res.status(500).json({ message: "Error deleting email" });
    res.json({ message: "Deleted successfully" });
  });
};
