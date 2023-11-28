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
  removeFromFavorites
} = require("../controllers/userController");

const router = express.Router();

// POST register user
router.post("/register", registerUser);

// POST login user
router.post("/login", loginUser);

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

module.exports = router;
