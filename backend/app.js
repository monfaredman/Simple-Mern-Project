const express = require("express");
const cors = require("cors");
const placeRoutes = require("./routes/places.js");
const usersRoutes = require("./routes/users.js");
const bodyParser = require("body-parser");
const HttpError = require("./models/http-error");
const mongoose = require("mongoose");

const app = express();

app.use(bodyParser.json());
app.use(
  cors({
    allowedHeaders: [
      "Origin",
      "X-Requested-With",
      "Content-Type",
      "Accept",
      "Authorization",
    ],
    methods: ["GET", "POST", "DELETE", "PATCH"],
  })
);

app.use("/api/places", placeRoutes);
app.use("/api/users", usersRoutes);
app.use((req, res, next) => {
  const error = new HttpError("Could not find this route.", 404);
  throw error;
});
app.use((error, req, res, next) => {
  if (res.headerSent) {
    return next(error);
  }
  res.status(error.code || 500);
  res.json({ message: error.message || "An unknown error occured!" });
});

mongoose
  .connect(
    "mongodb+srv://moslemhosseinpour1998:ijtpz68bDSQ8aPHI@cluster0.e2p0gjl.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("connected to database!");
    app.listen(5000); // start Node + Express + Mongoose server on port 5000
  })
  .catch((err) => {
    console.log(err);
  });
