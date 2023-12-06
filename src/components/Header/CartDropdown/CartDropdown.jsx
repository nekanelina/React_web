import { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { signal } from "@preact/signals-react";
import { currentUser } from "../../../App";
import useShoppingCart from "../../../hooks/useShoppingCart";
import { cartDropdownActive } from "..";
import CartItem from "./CartItem";
import "./CartDropdown.css";

export const cartAddMessage = signal("");
export const cartDelMessage = signal("");

const CartDropdown = () => {
  const dropdownRef = useRef(null);
  const { cart, removeFromCart } = useShoppingCart();
  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        cartDropdownActive.value = false;
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="cart-dropdown-container" ref={dropdownRef}>
      <ul className="cart-dropdown">
        {currentUser.value &&
          cart.value &&
          cart.value.length > 0 &&
          cart.value.map((product) => (
            <CartItem
              key={product._id}
              {...product}
              removeFromCart={removeFromCart}
            />
          ))}
        <button
          className="checkout-button"
          onClick={() => {
            if (cart.value?.length > 0) navigate("/checkout");
          }}
        >
          Proceed to checkout
        </button>
      </ul>
    </div>
  );
};

export default CartDropdown;
