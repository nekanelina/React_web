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
  createUrl,
  recoverPassword,
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

// POST create url
router.post("/recover-password", createUrl);

// GET validate url
router.get("/recover-password/:url", recoverPassword);

// PUT update password
router.put("/recover-password/:url", recoverPassword);

// DELETE from favorites
router.delete("/favorites", authenticateToken, removeFromFavorites);

module.exports = router;
