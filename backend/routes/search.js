const express = require("express");
const axios = require("axios");
const router = express.Router();
const { verifyToken } = require("../middlewares/auth");

// Search bar to get the requested media from the API
router.get("/search", verifyToken, async (req, res) => {
  const { term, media } = req.query;
  const url = `https://itunes.apple.com/search?term=${term}&media=${media}`;

  try {
    const response = await axios.get(url);
    res.json(response.data.results);
  } catch (error) {
    console.error("Error fetching data from iTunes API:", error.message);
    res.status(500).json({ error: "Failed to fetch data" });
  }
});

module.exports = router;
