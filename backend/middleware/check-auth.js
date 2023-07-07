const jws = require("jws");
const HttpError = require("../models/http-error");

module.exports = (req, res, next) => {
  if (req.methode === "OPTIONS") {
    return next();
  }
  try {
    const token = req.headers.authorization.split(" ")[1];
    if (!token) {
      throw new Error("Authentication failed!");
    }
    const decodedToken = jws.decode(token);
    if (!decodedToken) {
      throw new Error("Invalid token!");
    }
    req.userData = { userId: decodedToken.payload.userId };
    next();
  } catch (err) {
    const error = new HttpError("Authentication failed!", 401);
    return next(error);
  }
};
