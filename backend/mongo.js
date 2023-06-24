const { MongoClient } = require("mongodb");

const url =
  "mongodb+srv://moslemhosseinpour1998:ijtpz68bDSQ8aPHI@cluster0.e2p0gjl.mongodb.net/?retryWrites=true&w=majority";

const createProduct = async (req, res, next) => {
  const newProduct = {
    name: req.body.name,
    price: req.body.price,
  };

  const client = new MongoClient(url);

  try {
    await client.connect();
    const db = client.db();
    const result = db.collection("products").insertOne(newProduct);
  } catch (error) {
    return res.json({ message: "Could not store data." });
  }

  client.close();
  res.json(newProduct);
};

const getProduct = async (req, res, next) => {
  const client = new MongoClient(url);
  let products = [];
  try {
    await client.connect();
    const db = client.db();
    products = await db.collection("products").find().toArray();
  } catch (error) {
    return res.json({ message: "Could not retrieve products." });
  }

  client.close();
  res.json(products);
};

exports.createProduct = createProduct;
exports.getProduct = getProduct;
