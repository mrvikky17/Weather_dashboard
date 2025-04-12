const express = require("express");
const axios = require("axios");
const router = express.Router();

router.get("/", async (req, res) => {
  const { city } = req.query;

  if (!city) {
    return res.status(400).json({ error: "City name is required." });
  }

  try {
    const API_KEY = process.env.OPENWEATHER_API_KEY;
    const query = `${city},IN`; 
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${API_KEY}&units=metric`;

    const response = await axios.get(url);
    const { temp, humidity } = response.data.main;
    const { speed } = response.data.wind;
    const { description, icon } = response.data.weather[0];

    res.json({
      city: response.data.name,
      temperature: temp,
      condition: description,
      icon: `http://openweathermap.org/img/wn/${icon}@2x.png`,
      humidity,
      windSpeed: speed,
    });
  } catch (err) {
    console.error("Weather fetch error:", err.response?.data || err.message);
    res.status(404).json({ error: "City not found" });
  }
});

module.exports = router;
