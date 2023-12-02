const express = require("express");
const router = express.Router();

const {
  saveOrder,
  findOrdersByUserId,
  deleteOrderById,
  updateOrderById,
} = require("../controllers/orderController");

// POST save order
router.post("/", saveOrder);

// GET find orders by user id
router.get("/:userId", findOrdersByUserId);

// DELETE delete order by id
router.delete("/:orderId", deleteOrderById);

// PUT update order by id
router.put("/:orderId", updateOrderById);

module.exports = router;
