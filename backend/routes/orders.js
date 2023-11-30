const express = require("express");
const router = express.Router();

const {
  saveOrder,
  findOrdersByUserId,
  deleteOrderById,
} = require("../controllers/orderController");

// POST save order
router.post("/", saveOrder);

// GET find orders by user id
router.get("/:userId", findOrdersByUserId);

// DELETE delete order by id
router.delete("/:orderId", deleteOrderById);

module.exports = router;
