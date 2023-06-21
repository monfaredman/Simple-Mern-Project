const express = require("express");
const placeRoutes = require("./routes/places.js");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());
app.use("/api/places", placeRoutes);
app.use((error, req, res, next) => {
  if (res.headerSent) {
    return next(error);
  }
  res.status(error.code || 500);
  res.json({ message: error.message || "An unknown error occured!" });
});

app.listen(5000); // start Node + Express server on port 5000
