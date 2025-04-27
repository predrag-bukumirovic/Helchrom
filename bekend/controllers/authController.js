const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const ADMIN_EMAIL = "office@helmchron.com";
const ADMIN_PASSWORD_HASH =
  "$2a$12$Pr5zBZXzmalFIbH4fWfJSO2Nj297OWWFNNTGTeImI9Y55ipWjGUZq";

exports.login = (req, res) => {
  const { email, password } = req.body;

  if (
    email !== ADMIN_EMAIL ||
    !bcryptjs.compareSync(password, ADMIN_PASSWORD_HASH)
  ) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  const token = jwt.sign({ email }, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });
  return res.json({ token });
};
