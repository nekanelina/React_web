// PaymentMethod.js
import React, { useState } from 'react';
import './PaymentMethod.css';
import payPal from "./images/paypal_logo.png";
import visa from "./images/visa.png";
import masterCard from "./images/masterCard.png";
import americanExpress from "./images/americanExpress.png";
import creditCards from "./images/credit_card_logo.png";

import { FaRegCircleXmark } from "react-icons/fa6";
import { FaRegCircleCheck } from "react-icons/fa6";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { useNavigate } from 'react-router-dom';

const PaymentMethod = () => {
  const [selectedMethod, setSelectedMethod] = useState(null);
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/checkout");
  };

  const handleMethodChange = (method) => {
    setSelectedMethod(method);
  };

  const handleContinue = () => {
    if (selectedMethod === 'paypal') {
      // Redirect to the PayPal website
      window.location.href = 'https://www.paypal.com';
    } else if (selectedMethod === 'visa' || selectedMethod === 'masterCard' || selectedMethod === 'americanExpress') {
      // Redirect to the credit card payment page
      window.location.href = 'https://stripe.com';
    } else {
      // Handle other payment methods or show an error
      // You can implement the logic based on your requirements

      alert('Please select a payment method before continuing.');
    }
  };

  return (
    <div className="payment-method-container" >
      <div className="flex space-between" style={{margin: "30px"}}>
          <div className="flex-column center gap-10px">
            <FaRegCircleXmark size={50} style={{ color: "red" }} />
            <p className="italic-bold margin-0">Shopping Cart</p>
          </div>
          <div className="flex-column center gap-10px">
            <FaRegCircleXmark size={50} style={{ color: "red" }} />
            <p className="italic-bold margin-0">Shipping</p>
          </div>
          <div className="flex-column center gap-10px">
            <FaRegCircleCheck size={50} style={{ color: "green" }} />
            <p className="italic-bold margin-0">Payment</p>
          </div>
        </div>

      <h1>Payment Method</h1>
      <div className='sub-container'>
        <h2>Select Method</h2>
        <div>
          <label>
            <input
              type="radio"
              name="paymentMethod"
              value="paypal"
              checked={selectedMethod === 'paypal'}
              onChange={() => handleMethodChange('paypal')}
            />
            PayPal
          </label>
          <img src={payPal} alt="PayPal Logo" />
        </div>
        <div>
          <label>
            <input
              type="radio"
              name="paymentMethod"
              value="creditCard"
              checked={selectedMethod === 'visa' || selectedMethod === 'masterCard' || selectedMethod === 'americanExpress'}
              onChange={() => handleMethodChange('visa')}
            />
            Credit Card
          </label>
          {/* <img src={creditCards} alt="Credit Card Logo" /> */}
          <img src={visa} alt="Visa Logo" />
          <img src={masterCard} alt="MasterCard Logo" />
          <img src={americanExpress} alt="American Express Logo" />
        </div>
      </div>
      {/* <button className="continue" onClick={handleContinue}>Continue</button> */}
      <div className="flex space-between" style={{ marginTop: "50px" }}>
        <div className="flex gap-10px vertically-center">
          <IoIosArrowBack size={30} onClick={handleBack}/>
          <button className="checkout-btn" onClick={handleBack}>Back</button>
        </div>
        <div className="flex gap-10px vertically-center">
          <button className="checkout-btn" onClick={handleContinue}>Next</button>
          <IoIosArrowForward size={30} />
        </div>
      </div>
    </div>
  );
};

export default PaymentMethod;
