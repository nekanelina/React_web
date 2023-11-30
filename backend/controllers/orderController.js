const Order = require("../models/orderModel");
const User = require("../models/userModel");

const saveOrder = async (req, res) => {
  try {
    const { userId, products } = req.body;

    const order = await Order.saveOrder(userId, products);
    await User.saveOrderId(userId, order._id);

    return res.status(200).json(order);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const findOrdersByUserId = async (req, res) => {
  try {
    const { userId } = req.params;

    const orders = await Order.findOrdersByUserId(userId);

    return res.status(200).json(orders);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const deleteOrderById = async (req, res) => {
  try {
    const { orderId } = req.params;

    await Order.deleteOrderById(orderId);
    User.deleteOrderById(orderId);

    return res.status(200).json({ message: "Order deleted" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = {
  saveOrder,
  findOrdersByUserId,
  deleteOrderById,
};
