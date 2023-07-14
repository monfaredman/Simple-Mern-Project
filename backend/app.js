const express = require("express");
const fs = require("fs");
const path = require("path");
const cors = require("cors");
const placeRoutes = require("./routes/places.js");
const usersRoutes = require("./routes/users.js");
const bodyParser = require("body-parser");
const HttpError = require("./models/http-error");
const mongoose = require("mongoose");
const https = require("https");

const app = express();

// Middleware to redirect HTTP to HTTPS
// const forceHttps = (req, res, next) => {
//   if (!req.secure) {
//     return res.redirect(`https://${req.headers.host}${req.url}`);
//   }
//   next();
// };

// app.use(forceHttps);
app.use(bodyParser.json());
app.use(
  "/uploads/images",
  express.static(path.join(__dirname, "uploads", "images"))
);
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
  if (req.file) {
    fs.unlink(req.file.path, (err) => {
      console.log(err);
    });
  }
  if (res.headerSent) {
    return next(error);
  }
  res.status(error.code || 500);
  res.json({ message: error.message || "An unknown error occurred!" });
});

const options = {
  key: fs.readFileSync("./private-key.pem"), // Update with your private key file path
  cert: fs.readFileSync("./certificate.pem"), // Update with your certificate file path
};

// mongoose
//   .connect(
//     `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.e2p0gjl.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`
//   )
mongoose
  .connect(
    `mongodb+srv://moslemhosseinpour1998:moslemHosseinpour1998@cluster0.e2p0gjl.mongodb.net/?retryWrites=true&w=majority`
  )
  .then(() => {
    console.log("connected to database!");

    const server = https.createServer(options, app);
    server.listen(process.env.PORT || 3000, () => {
      console.log(`Server running on port ${process.env.PORT || 5000}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
