const express = require("express");
const {
  authenticateToken,
  refreshToken,
} = require("../middleware/jwtMiddleware");
const {
  registerUser,
  loginUser,
  loginGoogleUser,
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

// POST login google user
router.post("/login/google", loginGoogleUser);

// PUT update user
router.put("/update", updateUser);

// POST authenticate user
router.post("/authenticate", authenticateToken, findUserById);

// POST refresh token
router.post("/token", refreshToken, findUserById);

// POST add to favorites
router.post("/favorites", addToFavorites);

// DELETE from favorites
router.delete("/favorites", removeFromFavorites);

// POST shopping cart
router.post('/add-to-cart', authenticateToken, addToCart);

// GET shopping cart
router.get('/shopping-cart', authenticateToken, getShoppingCart);

module.exports = router;
