import { useRef, useEffect } from "react";

import Shipping from "./Shipping";

import { FaRegCircleXmark } from "react-icons/fa6";
import { FaRegCircleCheck } from "react-icons/fa6";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

import { pageStates } from "../Content";

import "./Checkout.css";

const Checkout = () => {
  const checkoutRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (checkoutRef.current && !checkoutRef.current.contains(event.target)) {
        pageStates.value = { ...pageStates.value, checkoutPage: false };
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="checkout-template" ref={checkoutRef}>
      <div className="flex space-between" style={{ marginBottom: "30px" }}>
        <div className="flex-column center gap-10px">
          <FaRegCircleCheck size={30} style={{ color: "green" }} />
          <p className="italic-bold margin-0">Shopping Cart</p>
        </div>
        <div className="flex-column center gap-10px">
          <FaRegCircleXmark size={30} style={{ color: "red" }} />
          <p className="italic-bold margin-0">Shipping</p>
        </div>
        <div className="flex-column center gap-10px">
          <FaRegCircleXmark size={30} style={{ color: "red" }} />
          <p className="italic-bold margin-0">Payment</p>
        </div>
      </div>
      <Shipping />
      <div className="flex space-between" style={{ marginTop: "50px" }}>
        <div className="flex gap-10px vertically-center">
          <IoIosArrowBack size={30} />
          <button className="checkout-btn">Back</button>
        </div>
        <div className="flex gap-10px vertically-center">
          <button className="checkout-btn">Next</button>
          <IoIosArrowForward size={30} />
        </div>
      </div>
    </div>
  );
};

export default Checkout;
