import Shipping from "./Shipping";

import { FaRegCircleXmark } from "react-icons/fa6";
import { FaRegCircleCheck } from "react-icons/fa6";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

import "./Checkout.css";

const Checkout = () => {
  return (
    <div className="checkoutTemplate text-wrapper-4">
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
