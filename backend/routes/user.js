const express = require("express");
const {
  authenticateToken,
  refreshToken,
} = require("../middleware/jwtMiddleware");
const {
  registerUser,
  loginUser,
  updateUser,
  findUserById,
  addToFavorites,
  removeFromFavorites,
  addToCart,
  getShoppingCart,
} = require("../controllers/userController");

const router = express.Router();

// POST register user
router.post("/register", registerUser);

// POST login user
router.post("/login", loginUser);

// PUT update user
router.put("/update", authenticateToken, updateUser);

// POST find user by id
router.post("/authenticate", authenticateToken, findUserById);

// POST refresh token
router.post("/token", refreshToken);

// POST add to favorites
router.post("/favorites", authenticateToken, addToFavorites);

// DELETE from favorites
router.delete("/favorites", authenticateToken, removeFromFavorites);

// POST shopping cart
router.post('/add-to-cart', authenticateToken, addToCart);

// GET shopping cart
router.get('/shopping-cart', authenticateToken, getShoppingCart);

module.exports = router;
