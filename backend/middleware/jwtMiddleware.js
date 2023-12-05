require("dotenv").config();
const RefreshToken = require("../models/refreshTokenModel");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: "15m",
  });
};

const authenticateToken = async (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ error: "Authorization token required" });
  }

  const token = authorization.split(" ")[1];

  try {
    const { _id } = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    
    
    req.user = await User.findOne({ _id });

    next();
  } catch (error) {
    res.status(401).json({ error: "Request is not authorized" });
  }
};

const refreshToken = async (req, res) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ error: "Authorization token required" });
  }

  const refreshToken = authorization.split(" ")[1];

  console.log(refreshToken);

  try {
    const savedToken = await RefreshToken.findOne({ token: refreshToken });
    if (!refreshToken === savedToken.token) {
      return res.status(403).json({ message: "⚠ Invalid token" });
    }

    jwt.verify(
      refreshToken,
      process.env.REFRESH_TOKEN_SECRET,
      async (err, user) => {
        if (err) return res.status(403).json({ message: "⚠ Invalid token" });

        const accessToken = createToken(user._id);
        const savedUser = await User.findOne({ _id: user._id });

        return res.status(200).json({ savedUser, accessToken: accessToken });
      }
    );
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = { authenticateToken, refreshToken };
