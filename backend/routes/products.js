const express = require("express");
const router = express.Router();

const {
  getAllProducts,
  getProductsByCategory,
  getProductsBySubcategory,
  getProductById,
  createProduct,
  deleteProduct,
  deleteCategory,
  deleteSubcategory,
  updateProduct,
} = require("../controllers/productController");


router.get("/", getAllProducts);

router.get("/:id", getProductById);

router.get("/category/:id", getProductsByCategory);

router.get("/category/:id1/:id2", getProductsBySubcategory);

router.post("/", createProduct);

router.patch("/:id", updateProduct);

router.delete("/:id", deleteProduct);

router.delete("/category/:id", deleteCategory);

router.delete("/category/:id1/:id2", deleteSubcategory);


module.exports = router;
