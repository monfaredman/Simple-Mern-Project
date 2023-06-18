const express = require("express");
const app = express();
const placeRoutes = require("./routes/places.js");

app.use("/api/places", placeRoutes);
app.use((error, req, res, next) => {
  console.log(res.headerSent);
  if (res.headerSent) {
    return next(error);
  }
  res.status(error.code || 500);
  res.json({ message: error.message || "An unknown error occured!" });
});

app.listen(5000); // start Node + Express server on port 5000
