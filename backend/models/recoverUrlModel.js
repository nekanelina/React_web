const mongoose = require("mongoose");
const crypto = require("crypto");

const recoverUrlSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
    default: function () {
      return crypto.randomBytes(20).toString("hex");
    },
  },
  expiresAt: {
    type: Date,
    default: Date.now,
    index: { expires: "1h" },
  },
});

recoverUrlSchema.statics.createUrl = async function (email) {
  try {
    console.log("email", email)
    const url = await this.create({ email });
    return url.url;
  } catch (error) {
    throw Error("⚠ Error creating url");
  }
};

recoverUrlSchema.statics.findUrl = async function (url) {
  try {
    return await this.findOne({ url });
  } catch (error) {
    throw Error("⚠ Error finding url");
  }
};

recoverUrlSchema.statics.deleteUrl = async function (url) {
  try {
    return await this.deleteOne({ url });
  } catch (error) {
    throw Error("⚠ Error deleting url");
  }
};

module.exports = mongoose.model("RecoverUrl", recoverUrlSchema);
