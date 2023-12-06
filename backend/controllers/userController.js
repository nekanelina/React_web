require("dotenv").config();
const User = require("../models/userModel");
const RefreshToken = require("../models/refreshTokenModel");
const jwt = require("jsonwebtoken");

const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: "15m",
  });
};

const registerUser = async (req, res) => {
  try {
    const user = await User.register(req.body);

    return res.status(201).json(user);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

const loginUser = async (req, res) => {
  const { email, password, googleLogin } = req.body;

  try {
    const user = await User.login(email, password, googleLogin);

    const accessToken = createToken(user._id);
    const refreshToken = await RefreshToken.createToken(user._id);

    return res
      .status(200)
      .json({ user, accessToken: accessToken, refreshToken: refreshToken });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

const updateUser = async (req, res) => {
  try {
    const user = await User.updateUser(req.body);

    return res.status(200).json(user);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

const findUserById = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);

    if (!user) {
      return res
        .status(404)
        .json({ message: "⚠ User not found, please register" });
    }

    return res.status(200).json({ user, accessToken: req.accessToken });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

const addToFavorites = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);

    if (!user) {
      return res.status(404).json({ message: "⚠ Please login or register" });
    }

    const { favorites } = user;
    const { product } = req.body;

    product && favorites.push(product);

    const updatedUser = await User.findByIdAndUpdate(
      req.user._id,
      { favorites },
      { new: true }
    );

    return res.status(200).json(updatedUser);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

const removeFromFavorites = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);

    if (!user) {
      return res
        .status(404)
        .json({ message: "⚠ User not found, please register" });
    }

    const { favorites } = user;
    const { productId } = req.body;


    const productIndex = favorites.findIndex(
      (product) => product._id === productId
    );

    if (productIndex !== -1) {
      favorites.splice(productIndex, 1);
    } else {
      return res.status(400).json({ message: "⚠ Product is not in favorites" });
    }

    const updatedUser = await User.findByIdAndUpdate(
      req.user._id,
      { favorites },
      { new: true }
    );

    return res.status(200).json(updatedUser);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// Add to cart in the user db and return the updated user
const addToCart = async (req, res) => {
  try {
    const user = await User.findById(req.user.userId);

    if (!user) {
      return res.status(404).json({ message: "⚠ User not found, please register" });
    }

    const { shoppingCart } = user;
    const { productId } = req.body;

    // Check if the product is already in the cart
    const isAlreadyInCart = shoppingCart.some(item => item.productId === productId);

    if (isAlreadyInCart) {
      return res.status(400).json({ message: "⚠ Product is already in the cart" });
    }

    // Add the product to the shopping cart
    shoppingCart.push({ productId });

    const updatedUser = await User.findByIdAndUpdate(
      req.user.userId,
      { shoppingCart },
      { new: true }
    );

    return res.status(200).json(updatedUser);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// Get the shopping cart item from the user db
const getShoppingCart = async (req, res) => {
  try {
    const user = await User.findById(req.user.userId);

    if (!user) {
      return res.status(404).json({ message: "⚠ User not found, please register" });
    }

    const shoppingCart = user.shoppingCart;
    return res.status(200).json({ shoppingCart });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = {
  registerUser,
  loginUser,
  updateUser,
  findUserById,
  addToFavorites,
  removeFromFavorites,
  addToCart,
  getShoppingCart,
};
