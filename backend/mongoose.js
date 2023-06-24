const mongoose = require("mongoose");

const Product = require("./models/product");

const createdProduct = (req, res, next) => {
  const createdProduct = new Product({
    name: req.body.name,
    price: req.body.price,
  });
};

exports.createdProduct = createdProduct;
