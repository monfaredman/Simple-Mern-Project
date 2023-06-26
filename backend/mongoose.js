const mongoose = require("mongoose");

const Product = require("./models/product");

mongoose
  .connect(
    "mongodb+srv://moslemhosseinpour1998:ijtpz68bDSQ8aPHI@cluster0.e2p0gjl.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("connected to database!");
  })
  .catch(() => {
    console.log("connection faield!");
  });

const createdProduct = async (req, res, next) => {
  const createdProduct = new Product({
    name: req.body.name,
    price: req.body.price,
  });
  const result = await createdProduct.save();
  res.json(result);
};

const getProduct = async (req, res, next) => {
  const products = await Product.find().exec();
  res.json(products);
};

exports.createdProduct = createdProduct;
exports.getProduct = getProduct;
