const express = require("express");
const placeRoutes = require("./routes/places.js");
const usersRoutes = require("./routes/users.js");
const bodyParser = require("body-parser");
const HttpError = require("./models/http-error");
// const mongoPractice = require("./mongo.js");
// const mongoPractice = require("./mongoose.js");
const mongoose = require("mongoose");

const app = express();

app.use(bodyParser.json());
// app.post("/products", mongoPractice.createdProduct);
// app.get("/products", mongoPractice.getProduct);
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
