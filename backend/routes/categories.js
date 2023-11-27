const express = require("express");
const {
  getCategory,
  getCategories,
  createCategory,
  deleteCategory,
} = require("../controllers/categoryController");

const router = express.Router();

router.get("/:id", getCategory);

router.get("/", getCategories);

router.post("/", createCategory);

router.delete("/:id", deleteCategory);

module.exports = router;
