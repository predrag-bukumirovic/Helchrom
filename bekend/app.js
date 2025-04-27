const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const newsletterRoutes = require("./routes/newsletter");
const adminRoutes = require("./routes/auth");

dotenv.config();

const app = express();
app.use(
  cors({
    origin: "https://helmchron.com",
    methods: ["GET", "POST", "DELETE", "PUT", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(express.json());

app.use("/api/newsletter", newsletterRoutes);
app.use("/admin", adminRoutes);


const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
