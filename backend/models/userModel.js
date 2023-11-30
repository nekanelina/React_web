const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      trim: true,
    },
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    address: {
      street: {
        type: String,
        required: true,
      },
      number: {
        type: String,
        required: true,
      },
      postalCode: {
        type: String,
        required: true,
      },
      city: {
        type: String,
        required: true,
      },
      country: {
        type: String,
        required: true,
      },
    },
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },
    favorites: {
      type: [mongoose.Schema.Types.Mixed],
      default: [],
    },
    shoppingCart: {
      type: [mongoose.Schema.Types.Mixed],
      default: [],
    },
    orders: {
      orderId: [
        {
          type: String,
        },
      ],
    },
  },
  {
    timestamps: true,
  }
);

userSchema.statics.saveOrderId = async function (userId, orderId) {
  return await this.findByIdAndUpdate(
    userId,
    { $push: { "orders.orderId": orderId } },
    { new: true }
  );
};
userSchema.statics.findOrdersByUserId = async function (userId) {
  return await this.find({ userId: userId });
};
userSchema.statics.deleteOrderById = async function (orderId) {
  return await this.findByIdAndDelete(orderId);
};

module.exports = mongoose.model("User", userSchema);
