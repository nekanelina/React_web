const mongoose = require("mongoose");

const productSchema = new mongoose.Schema([{
  category: {
    type: Number,
    required: true,
  },
  subcategory: {
    type: Number,
    required: true,
  },
  productName: {
    type: String,
    required: true,
    unique: true,
  },
  manufacturer: {
    type: String,
  },
  country: {
    type: String,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: true,
  },
  discount: {
    type: Number,
  },
},]);

module.exports = mongoose.model("product", productSchema);
