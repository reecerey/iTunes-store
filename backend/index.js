const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const searchRoute = require("./routes/search");

dotenv.config();

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use("/api", searchRoute);

// Temporary endpoint to generate a token
app.get("/api/token", (req, res) => {
  const token = jwt.sign({ user: "testUser" }, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });
  res.json({ token });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
