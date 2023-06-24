const express = require("express");
// const placeRoutes = require("./routes/places.js");
// const usersRoutes = require("./routes/users.js");
const bodyParser = require("body-parser");
// const HttpError = require("./models/http-error");
const mongoPractice = require("./mongo.js");

const app = express();

app.use(bodyParser.json());
app.post("/products", mongoPractice.createProduct);
// app.use("/api/places", placeRoutes);
// app.use("/api/users", usersRoutes);
// app.use((req, res, next) => {
//   const error = new HttpError("Could not find this route.", 404);
//   throw error;
// });
// app.use((error, req, res, next) => {
//   if (res.headerSent) {
//     return next(error);
//   }
//   res.status(error.code || 500);
//   res.json({ message: error.message || "An unknown error occured!" });
// });

app.listen(5000); // start Node + Express server on port 5000
