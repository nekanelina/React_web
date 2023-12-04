import { signal } from "@preact/signals-react";
import { useEffect } from "react";

import { saveOrder, updateOrderById } from "../../services/orderServices";
import Shopping from "./Shopping";
import Shipping from "./Shipping";
import PaymentMethod from "./PaymentMethod";

import { FaRegCircleCheck, FaRegCircleXmark } from "react-icons/fa6";
import { IoIosArrowBack, IoIosArrowForward, IoIosClose } from "react-icons/io";
import { useNavigate } from "react-router-dom";

import "./Checkout.css";
import { currentUser } from "../../App";

const activePage = signal("shopping");

const Checkout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    activePage.value = "shopping";
  }, []);

  return (
    <div className="checkout-template">
      <IoIosClose
        className="checkout-template-close"
        onClick={() => navigate("/")}
      />
      <div className="flex space-evenly" style={{ marginBottom: "20px" }}>
        <div className="flex-column center gap-10px">
          {activePage.value === "shipping" ||
          activePage.value === "payment" ||
          activePage.value === "order" ? (
            <FaRegCircleXmark
              className="check-image"
              style={{ color: "green" }}
            />
          ) : (
            <FaRegCircleCheck
              className="check-image"
              style={{ color: "red" }}
            />
          )}
          <p className="checkout-font">Shopping Cart</p>
        </div>
        <div className="flex-column center gap-10px">
          {activePage.value === "payment" || activePage.value === "order" ? (
            <FaRegCircleXmark
              className="check-image"
              style={{ color: "green" }}
            />
          ) : (
            <FaRegCircleCheck
              className="check-image"
              style={{ color: "red" }}
            />
          )}
          <p className="checkout-font">Shipping</p>
        </div>
        <div className="flex-column center gap-10px">
          {activePage.value === "order" ? (
            <FaRegCircleXmark
              className="check-image"
              style={{ color: "green" }}
            />
          ) : (
            <FaRegCircleCheck
              className="check-image"
              style={{ color: "red" }}
            />
          )}
          <p className="checkout-font">Payment</p>
        </div>
      </div>
      {activePage.value === "shopping" && <Shopping />}
      {activePage.value === "shipping" && <Shipping />}
      {activePage.value === "payment" && <PaymentMethod />}
      <div className="flex space-between" style={{ marginTop: "20px" }}>
        <div className="flex gap-10px vertically-center">
          <IoIosArrowBack size={20} />
          <button
            className="checkout-btn"
            onClick={() => {
              if (activePage.value === "shopping") {
                navigate("/");
              } else if (activePage.value === "shipping") {
                activePage.value = "shopping";
              } else if (activePage.value === "payment") {
                activePage.value = "shipping";
              }
            }}
          >
            {activePage.value === "shopping" && "Main Page"}
            {activePage.value === "shipping" && "Shopping"}
            {activePage.value === "payment" && "Shipping"}
          </button>
        </div>
        <div className="flex gap-10px vertically-center">
          <button
            className="checkout-btn"
            onClick={async () => {
              if (activePage.value === "shopping") {
                activePage.value = "shipping";
              } else if (activePage.value === "shipping") {
                activePage.value = "payment";
              } else if (activePage.value === "payment") {
                try {
                  const savedOrder = await saveOrder(
                    currentUser.value._id,
                    currentUser.value.shoppingCart
                  );
                  setTimeout(() => {
                    updateOrderById(savedOrder._id, {
                      delivered: true,
                    });
                  }, 5000);
                  navigate("/orders");
                } catch (error) {
                  console.log(error);
                }
              }
            }}
          >
            {activePage.value === "shopping" && "Shipping"}
            {activePage.value === "shipping" && "Payment"}
            {activePage.value === "payment" && "Place Order"}
          </button>
          <IoIosArrowForward size={20} />
        </div>
      </div>
    </div>
  );
};

export default Checkout;
