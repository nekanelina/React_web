import { useNavigate } from "react-router-dom";

import { CiReceipt } from "react-icons/ci";
import { IoIosClose } from "react-icons/io";

import "./Orders.css";

const Orders = () => {
  const navigate = useNavigate();

  return (
    <div className="user-orders-container">
      <IoIosClose
        className="checkout-template-close"
        onClick={() => navigate("/")}
      />
      <div className="flex gap-10px margin-bottom-10px vertically-center">
        <CiReceipt size={30} />
        <h1 className="form-title margin-0">Your orders</h1>
      </div>
    </div>
  );
};

export default Orders;
