const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema([
  {
    userId: {
      type: String,
      required: true,
    },
    products: [
      {
        productId: {
          type: String,
          required: true,
        },
        quantity: {
          type: Number,
          required: true,
        },
      },
    ],
  },
]);

orderSchema.statics.findOrdersByUserId = async function (userId) {
  return await this.find({ userId: userId });
};
orderSchema.statics.deleteOrderById = async function (orderId) {
  return await this.findByIdAndDelete(orderId);
};
orderSchema.statics.saveOrder = async function (userId, products) {
  return await this.create({ userId: userId, products: products });
};

module.exports = mongoose.model("order", orderSchema);
