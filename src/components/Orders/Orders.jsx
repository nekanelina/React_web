import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { getAllOrders, deleteOrder } from "../../services/orderServices";
import { currentUser } from "../../App";
import { isAuthenticated } from "../../App";
import Order from "./Order";

import { CiReceipt } from "react-icons/ci";
import { IoIosClose } from "react-icons/io";
import img from "../../images/products/Charger.jpeg";

import "./Orders.css";


const mockData = [
  {
    id: 1,
    productName: "Charger 1",
    manufacturer: "Tesla",
    country: "China",
    price: 200,
    description:
      "8A-32A 3KW 7KW Portable ev charger for ev electric car battery mobile charging station",
    img: img,
    quantity: 2,
    discount: 0.5,
  },
  {
    id: 2,
    productName: "Charger 1",
    manufacturer: "Tesla",
    country: "China",
    price: 100,
    description:
      "8A-32A 3KW 7KW Portable ev charger for ev electric car battery mobile charging station",
    img: img,
    quantity: 6,
    discount: 0.5,
  },
  {
    id: 3,
    productName: "Charger 1",
    manufacturer: "Tesla",
    country: "China",
    price: 300,
    description:
      "8A-32A 3KW 7KW Portable ev charger for ev electric car battery mobile charging station",
    img: img,
    quantity: 1,
    discount: 0.5,
  },
  {
    id: 4,
    productName: "Charger 1",
    manufacturer: "Tesla",
    country: "China",
    price: 500,
    description:
      "8A-32A 3KW 7KW Portable ev charger for ev electric car battery mobile charging station",
    img: img,
    quantity: 7,
    discount: 0.5,
  },
];

const Orders = () => {
  const [orders, setOrders] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchOrders = async () => {
      const result = await getAllOrders(currentUser.value?._id);
      setOrders(result);
    };

    fetchOrders();
  }, [isAuthenticated.value]);

  return (
    <div className="user-orders-container">
      <IoIosClose className="checkout-template-close" onClick={() => navigate("/account") } />
      <div className="flex gap-10px margin-bottom-10px vertically-center">
        <CiReceipt size={30} />
        <h1 className="form-title margin-0">Your orders</h1>
      </div>
      <ul className="order-wrapper">
        {orders.length === 0 && <p className="no-orders">No orders yet...</p>}
        {orders.length > 0 &&
          orders.map((order, index) => {
            let totalPrice = 0;
            return (
              <div className="order" key={index}>
                <h2 className="order-id">Order: {order._id}</h2>
                {order.products.map((product, productIndex) => {
                  const productDetails = mockData.find(
                    (data) => data.id === parseInt(product.productId)
                  );
                  totalPrice += productDetails.price * product.quantity;
                  return (
                    <Order
                      key={productIndex}
                      {...productDetails}
                      quantity={product.quantity}
                    />
                  );
                })}
                <div className="flex space-between">
                  <h2 className="delivered-text">
                    Delivered:{" "}
                    <span style={{ color: order.delivered ? "green" : "red" }}>
                      {order.delivered ? "Yes" : "No"}
                    </span>
                  </h2>
                  <h2 className="delivered-text">Total: {totalPrice}$</h2>
                  <button
                    className="order-delete-btn"
                    onClick={async () => {
                      const deletedOrder = await deleteOrder(order._id);
                      setOrders(
                        orders.filter((o) => o._id !== deletedOrder._id)
                      );
                    }}
                  >
                    delete
                  </button>
                </div>
              </div>
            );
          })}
      </ul>
    </div>
  );
};

export default Orders;
