import { Link } from "react-router-dom";
import useShoppingCart from "../../../hooks/useShoppingCart";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import { IoTrashOutline } from "react-icons/io5";

const ShoppingCartItem = (props) => {
  const { _id, img, productName, description, price, quantity } = props;
  const { removeFromCart, incraseQuantity, decreaseQuantity } =
    useShoppingCart();

  return (
    <Link
      className="a-product"
      to={`/${_id}`}
      state={{ productDetails: props }}
    >
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
                      onClick={(e) => {
                        e.preventDefault();
                        removeFromCart(_id);
                      }}
                    />
                  )}
                  {quantity > 1 && (
                    <FaMinus
                      className="shopping-cart-quantity-image"
                      onClick={(e) => {
                        e.preventDefault();
                        decreaseQuantity(_id);
                      }}
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
                  onChange={(e) => {}}
                />
                <div className="shopping-cart-quantity-image-wrapper">
                  <FaPlus
                    className="shopping-cart-quantity-image"
                    onClick={(e) => {
                      e.preventDefault();
                      incraseQuantity(_id);
                    }}
                  />
                </div>
              </div>
            </div>
            <p className="shopping-cart-price">
              {(price * quantity).toFixed(2)}$
            </p>
          </div>
        </div>
      </li>
    </Link>
  );
};

export default ShoppingCartItem;
