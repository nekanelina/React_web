require("dotenv").config();
const RefreshToken = require("../models/refreshToken");
const jwt = require("jsonwebtoken");

const authenticateToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (token === null) {
    return res.status(401).json({ message: "⚠ Access denied" });
  }

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) return res.status(403).json({ message: "⚠ Invalid token" });
    req.user = user;
    next();
  });
};

const saveRefreshToken = async (token, userId) => {
  try {
    await RefreshToken.deleteMany({ user: userId });

    const refreshToken = new RefreshToken({
      token: token,
      user: userId,
      expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
    });

    await refreshToken.save();

    console.log("refresh token saved");
  } catch (error) {
    console.log(error);
  }
};

const refreshToken = async (req, res, next) => {
  const refreshToken = req.body.refreshToken;
  if (refreshToken === null) {
    return res.status(401).json({ message: "⚠ Access denied" });
  }

  try {
    const savedToken = await RefreshToken.findOne({ token: refreshToken });
    if (!refreshToken === savedToken.token) {
      return res.status(403).json({ message: "⚠ Invalid token" });
    }

    jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
      if (err) return res.status(403).json({ message: "⚠ Invalid token" });

      const accessToken = jwt.sign(
        { userId: user._id },
        process.env.ACCESS_TOKEN_SECRET,
        { expiresIn: "15m" }
      );

      req.user = user;
      req.accessToken = accessToken;

      next();
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = { authenticateToken, saveRefreshToken, refreshToken };
