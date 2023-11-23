import Shipping from "./Shipping";

import { showOnlyOnePage } from "../Content";

import { FaRegCircleXmark } from "react-icons/fa6";
import { FaRegCircleCheck } from "react-icons/fa6";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosClose } from "react-icons/io";

import "./Checkout.css";

const Checkout = () => {
  return (
    <div className="checkout-template">
      <IoIosClose
        className="checkout-template-close"
        onClick={() => (showOnlyOnePage("mainPage"))}
      />
      <div className="flex space-evenly" style={{ marginBottom: "20px" }}>
        <div className="flex-column center gap-10px">
          <FaRegCircleCheck
            className="check-image"
            style={{ color: "green" }}
          />
          <p className="checkout-font">Shopping Cart</p>
        </div>
        <div className="flex-column center gap-10px">
          <FaRegCircleXmark className="check-image" style={{ color: "red" }} />
          <p className="checkout-font">Shipping</p>
        </div>
        <div className="flex-column center gap-10px">
          <FaRegCircleXmark className="check-image" style={{ color: "red" }} />
          <p className="checkout-font">Payment</p>
        </div>
      </div>
      <Shipping />
      <div className="flex space-between" style={{ marginTop: "20px" }}>
        <div className="flex gap-10px vertically-center">
          <IoIosArrowBack size={20} />
          <button className="checkout-btn">Back</button>
        </div>
        <div className="flex gap-10px vertically-center">
          <button className="checkout-btn">Next</button>
          <IoIosArrowForward size={20} />
        </div>
      </div>
    </div>
  );
};

export default Checkout;