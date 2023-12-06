import { computed } from "@preact/signals-react";
import { GiShoppingCart } from "react-icons/gi";
import useShoppingCart from "../../../hooks/useShoppingCart";
import "./Shopping.css";
import ShoppingCartItem from "./ShoppingCartItem";

const Shopping = () => {
  const { cart } = useShoppingCart();

  const totalPrice = computed(() => {
    return cart.value?.reduce((acc, cartItem) => {
      return acc + cartItem.price * cartItem.quantity;
    }, 0);
  });

  return (
    <div className="shopping-container">
      <div className="flex gap-10px margin-bottom-10px vertically-center">
        <GiShoppingCart size={30} />
        <h1 className="form-title margin-0">Shopping Cart</h1>
      </div>
      {cart.value?.length === 0 ? (
        <div>
          <p>
            <strong>Your shopping cart is empty...</strong>
          </p>
        </div>
      ) : (
        <>
          <ul className="shopping-cart-item-wrapper">
            {cart.value &&
              cart.value.map((cartItem) => (
                <ShoppingCartItem {...cartItem} quantity={cartItem.quantity} />
              ))}
          </ul>
          <div className="shopping-cart-total-price">
            <p>
              <strong>Total</strong>
            </p>
            <p>{totalPrice.value.toFixed(2)}$</p>
          </div>
        </>
      )}
    </div>
  );
};

export default Shopping;
