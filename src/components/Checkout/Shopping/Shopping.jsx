import { GiShoppingCart } from "react-icons/gi";
import img from "../../../images/products/Charger.jpeg";
import "./Shopping.css";
import ShoppingCartItem from "./ShoppingCartItem";
// replace with real data from db
const mockData = [
  {
    id: 1,
    productName: "Charger 1",
    manufacturer: "Tesla",
    country: "China",
    price: 200,
    description:
      "8A-32A 3KW 7KW Portable ev charger for ev electric car battery mobile charging station",
    img: img,
    quantity: 2,
    discount: 0.5,
  },
  {
    id: 2,
    productName: "Charger 1",
    manufacturer: "Tesla",
    country: "China",
    price: 100,
    description:
      "8A-32A 3KW 7KW Portable ev charger for ev electric car battery mobile charging station",
    img: img,
    quantity: 6,
    discount: 0.5,
  },
  {
    id: 3,
    productName: "Charger 1",
    manufacturer: "Tesla",
    country: "China",
    price: 300,
    description:
      "8A-32A 3KW 7KW Portable ev charger for ev electric car battery mobile charging station",
    img: img,
    quantity: 1,
    discount: 0.5,
  },
  {
    id: 4,
    productName: "Charger 1",
    manufacturer: "Tesla",
    country: "China",
    price: 500,
    description:
      "8A-32A 3KW 7KW Portable ev charger for ev electric car battery mobile charging station",
    img: img,
    quantity: 7,
    discount: 0.5,
  },
];
// Replace with current user shopping cart
const userShoppingCart = [
  { id: 1, quantity: 2 },
  { id: 2, quantity: 6 },
  { id: 3, quantity: 1 },
];

const Shopping = () => {
  const totalPrice = mockData.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="shopping-container">
      <div className="flex gap-10px margin-bottom-10px vertically-center">
        <GiShoppingCart size={30} />
        <h1 className="form-title margin-0">Shopping Cart</h1>
      </div>
      <ul className="shopping-cart-item-wrapper">
        {userShoppingCart.map((cartItem) => {
          const itemDetails = mockData.find((item) => item.id === cartItem.id);
          return (
            <ShoppingCartItem {...itemDetails} quantity={cartItem.quantity} />
          );
        })}
      </ul>
      <div className="shopping-cart-total-price">
        <p>
          <strong>Total</strong>
        </p>
        <p>{totalPrice}$</p>
      </div>
    </div>
  );
};

export default Shopping;
