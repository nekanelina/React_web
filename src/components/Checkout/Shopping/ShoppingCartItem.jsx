import useShoppingCart from "../../../hooks/useShoppingCart";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import { IoTrashOutline } from "react-icons/io5";

const ShoppingCartItem = ({
  _id,
  img,
  productName,
  description,
  price,
  quantity,
}) => {
  const { removeFromCart, incraseQuantity, decreaseQuantity } = useShoppingCart();

  return (
    <li className="shopping-cart-item">
      <div className="shopping-cart-item-info">
        <img className="shopping-cart-item-img" src={img} alt={productName} />
        <div className="flex-column gap-10px margin-left-10px">
          <h4>{productName}</h4>
          <div className="shopping-cart-description-quantity-wrapper">
            <p className="shopping-cart-item-description">{description}</p>
            <div className="shopping-cart-quantity-wrapper">
              <div className="shopping-cart-quantity-image-wrapper">
                {quantity < 2 && (
                  <IoTrashOutline
                    className="shopping-cart-quantity-image"
                    onClick={() => removeFromCart(_id)}
                  />
                )}
                {quantity > 1 && (
                  <FaMinus
                    className="shopping-cart-quantity-image"
                    onClick={() => decreaseQuantity(_id)}
                  />
                )}
              </div>
              <input
                title="quantity"
                type="number"
                aria-invalid="false"
                name="quantity"
                placeholder=" "
                className="shopping-cart-item-quantity"
                value={quantity}
              />
              <div className="shopping-cart-quantity-image-wrapper">
                <FaPlus
                  className="shopping-cart-quantity-image"
                  onClick={() =>  incraseQuantity(_id) }
                />
              </div>
            </div>
          </div>
          <p className="shopping-cart-price">{(price * quantity).toFixed(2)}$</p>
        </div>
      </div>
    </li>
  );
};

export default ShoppingCartItem;
