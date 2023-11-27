
import React, { useState } from 'react';
import './Shopping.css';
import RemoveItem from './RemoveItem';
import itemsData from './data';

import { FaRegCircleXmark } from "react-icons/fa6";
import { FaRegCircleCheck } from "react-icons/fa6";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { useNavigate } from 'react-router-dom';


const Shopping = () => {
  const [items, setItems] = useState(itemsData);

  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/");
  };

  const handleNext = () => {
    navigate("/checkout");
  }

  const handleDeleteItem = (itemId) => {
    const updatedItems = items.filter((item) => item.id !== itemId);
    setItems(updatedItems);
  };
  
  const isCartEmpty = items.length === 0;

  return (
    <div className="shopping-container">
      <div className="shopping-wrapper">

        <div className="flex space-between" style={{marginBottom: "30px"}}>
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

        <div className="shopping-header">
          <div className="shopping-header-title">Shopping Cart</div>
          {isCartEmpty ? (
            <div className="shopping-header-subtitle">
              Your cart is empty... <strong>Go Back</strong>
            </div>
          ) : null}
        </div>
        <div className="shopping-body">
          <div className="shopping-body-right">
            <div className="shopping-body-right-title">Subtotal (0) items</div>
            <div className="shopping-body-right-subtitle">$0.00</div>
            <button
              className="shopping-body-right-button"
              onClick={handleNext}
            >
              Proceed To Checkout
            </button>
          </div>
        </div>
        <div className="shopping-items">
          <section className="container">
            <div className="title">
              <h2>Items</h2>
            </div>
            <div className="item-list">
              {items.map((item) => (
                <RemoveItem
                  key={item.id}
                  item={item}
                  onDelete={handleDeleteItem}
                />
              ))}
            </div>
          </section>
        </div>
        
        <div className="flex space-between" style={{ marginTop: "50px" }}>
          <div className="flex gap-10px vertically-center">
            <IoIosArrowBack size={50} onClick={handleBack}/>
            <button className="checkout-btn" onClick={handleBack}>Back</button>
          </div>
          <div className="flex gap-10px vertically-center">
            <button className="checkout-btn" onClick={handleNext}>Next</button>
            <IoIosArrowForward size={50} onClick={handleNext}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shopping;

