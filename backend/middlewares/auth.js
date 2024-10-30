const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

dotenv.config();

// Verifying the token for user authorization
const verifyToken = (req, res, next) => {
  const token = req.headers["authorization"]?.split(" ")[1];

  if (!token) {
    return res.status(403).send("A token is required for authentication");
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
  } catch (err) {
    console.error("Token verification failed:", err.message);
    return res.status(401).send("Invalid Token");
  }

  return next();
};

module.exports = { verifyToken };
