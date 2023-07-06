const express = require("express");
const router = express.Router();
const fileUpload = require("../middleware/file-upload");
const placesControllers = require("../controllers/places");
const { check } = require("express-validator");
router.get("/", placesControllers.getAllPlaces);
router.get("/:pid", placesControllers.getPlaceById);
router.get("/user/:uid", placesControllers.getPlacesByUserId);
router.post(
  "/",
  fileUpload.single("image"),
  [
    check("title").not().isEmpty(),
    check("description").isLength({ min: 5 }, check("address").not().isEmpty()),
  ],
  placesControllers.createPlace
);
router.patch(
  "/:pid",
  [
    check("title").not().isEmpty(),
    check("description").isLength({ min: 5 }, check("address").not().isEmpty()),
  ],
  placesControllers.updatePlace
);
router.delete("/:pid", placesControllers.deletePlace);

module.exports = router;
