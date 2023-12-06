const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const Schema = mongoose.Schema;

const refreshTokenSchema = new Schema(
  {
    token: {
      type: String,
      required: true,
    },
    user: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

refreshTokenSchema.statics.createToken = async function (_id) {
  try {
    const token = jwt.sign({ _id }, process.env.REFRESH_TOKEN_SECRET);
    const refreshToken = await this.create({ token, user: _id });
    return refreshToken.token;
  } catch (error) {
    throw new Error("⚠ Error creating refresh token");
  }
};

module.exports = mongoose.model("RefreshToken", refreshTokenSchema);
