const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
  Title: {
    type: String,
    required: true,
  },
  Description: {
    type: String,
  },
  ParentCategory: {
    type: String,
  },
});

const CategoryModel = mongoose.model("categories", categorySchema);

module.exports = CategoryModel;
