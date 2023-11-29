import React, { useState, useEffect } from 'react';
import './Shopping.css';
import RemoveItem from './RemoveItem';
import { FaRegCircleXmark } from "react-icons/fa6";
import { FaRegCircleCheck } from "react-icons/fa6";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import { removeFromCart } from '../services/cartService';

const Shopping = () => {
  const [shoppingCart, setShoppingCart] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch shopping cart data from the backend when the component mounts
    fetchShoppingCart();
  }, []);

  const fetchShoppingCart = async () => {
    try {
      const response = await fetch('http://localhost:4000/api/user/shopping-cart', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('accessToken')}`,
        },
      });
  
      if (!response.ok) {
        throw new Error('Failed to fetch shopping cart');
      }
  
      const data = await response.json();
      setShoppingCart(data.shoppingCart);
    } catch (error) {
      console.error('Error fetching shopping cart:', error);
    }
  };
  

  const handleBack = () => {
    navigate("/");
  };

  const handleNext = () => {
    if (shoppingCart.length > 0) {
      navigate("/checkout");
    } else {
      alert('Your cart is empty. Add items to proceed.');
    }
  };

  const handleDeleteItem = (itemId) => {
    // Remove the item from the shopping cart
    removeFromCart(itemId);

    // Fetch shopping cart data from the backend after adding to the cart
    fetchShoppingCart();
  };

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
          {shoppingCart.length === 0 ? (
            <div className="shopping-header-subtitle">
              Your cart is empty... <strong>Go Back</strong>
            </div>
          ) : null}
        </div>
        <div className="shopping-body">
          <div className="shopping-body-right">
            <div className="shopping-body-right-title">Subtotal ({shoppingCart.length}) items</div>
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
              {shoppingCart.map((item) => (
                <RemoveItem
                  key={item.productId} // Assuming productId is unique
                  item={item}
                  onDelete={() => handleDeleteItem(item.productId)}
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
