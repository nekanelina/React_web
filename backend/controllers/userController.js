require("dotenv").config();

const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { saveRefreshToken } = require("../middleware/jwtMiddleware");

const registerUser = async (req, res) => {
  try {
    const found = await User.findOne({ email: req.body.email });

    if (found) {
      return res.status(400).json({ message: "⚠ Email already exists" });
    }

    const { email, password, firstName, lastName, phoneNumber, address } =
      req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({
      email: email,
      password: hashedPassword,
      firstName: firstName,
      lastName: lastName,
      phoneNumber: phoneNumber,
      address: { ...address },
    });
    const newUser = await user.save();
    return res.status(201).json(newUser);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const loginUser = async (req, res) => {
  const user = await User.findOne({ email: req.body.email });

  if (!user) {
    return res
      .status(404)
      .json({ message: "⚠ No user found with email: " + req.body.email });
  }

  try {
    if (await bcrypt.compare(req.body.password, user.password)) {
      const accessToken = jwt.sign(
        { userId: user._id },
        process.env.ACCESS_TOKEN_SECRET,
        { expiresIn: "15m" }
      );

      const refreshToken = jwt.sign(
        { userId: user._id },
        process.env.REFRESH_TOKEN_SECRET
      );
      saveRefreshToken(refreshToken, user._id);

      return res
        .status(200)
        .json({ user, accessToken: accessToken, refreshToken: refreshToken });
    } else {
      return res.status(401).json({ message: "⚠ Wrong password" });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const updateUser = async (req, res) => {
  const { password, firstName, lastName, phoneNumber } = req.body;
  const { street, number, postalCode, city, country } = req.body.address;

  let hashedPassword;
  if (password) {
    hashedPassword = await bcrypt.hash(password, 10);
  }

  const updateData = {
    ...(password && { password: hashedPassword }),
    ...(firstName && { firstName }),
    ...(lastName && { lastName }),
    ...(phoneNumber && { phoneNumber }),
    ...(street && { "address.street": street }),
    ...(number && { "address.number": number }),
    ...(postalCode && { "address.postalCode": postalCode }),
    ...(city && { "address.city": city }),
    ...(country && { "address.country": country }),
  };

  try {
    const user = await User.findOneAndUpdate(
      { email: req.body.email },
      { $set: updateData },
      { new: true }
    );
    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const findUserById = async (req, res) => {
  try {
    const user = await User.findById(req.user.userId);

    if (!user) {
      return res.status(404).json({ message: "⚠ User not found" });
    }

    return res.status(200).json({ user, accessToken: req.accessToken });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = {
  registerUser,
  loginUser,
  updateUser,
  findUserById,
};
