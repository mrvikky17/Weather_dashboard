const express = require("express");
const cors = require("cors");
const weatherRoutes = require("./routes/weather");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());


app.use("/weather", weatherRoutes);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
