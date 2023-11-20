const User = require("../models/userModel");
const bcrypt = require("bcrypt");

const registerUser = async (req, res) => {
  try {
    const found = await User.findOne({ email: req.body.email });

    if (found) {
      return res.status(400).json({ message: "Email already exists" });
    }

    const { email, password, firstName, lastName, phoneNumber, address } =
      req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
      email: email,
      password: hashedPassword,
      firstName: firstName,
      lastName: lastName,
      phoneNumber: phoneNumber,
      address: address,
    });
    res.status(201).json(user);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const loginUser = async (req, res) => {
  const user = await User.findOne({ email: req.body.email });

  if (!user) {
    return res
      .status(404)
      .json({ message: "No user found with email: " + req.body.email });
  }

  try {
    if (await bcrypt.compare(req.body.password, user.password)) {
      return res.status(200).send(user);
    } else {
      return res.status(401).json({ message: "Wrong password" });
    }
  } catch {
    return res.status(500).json({ message: error.message });
  }
};

const updateUser = async (req, res) => {
  try {
    const updateData = { ...req.body, ...(req.body.address && { address: req.body.address }) };
    const user = await User.findOneAndUpdate(
      { email: req.body.email },
      { updateData },
      { new: true }
    );
    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = {
  registerUser,
  loginUser,
  updateUser,
};
