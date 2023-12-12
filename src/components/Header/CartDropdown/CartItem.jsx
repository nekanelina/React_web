import { Link } from "react-router-dom";
import { IoTrashOutline } from "react-icons/io5";

const cartItem = ({ _id, img, productName, description, price, removeFromCart }) => {
  const props = { _id, img, productName, description, price };
  return (
    <Link
      className="a-product"
      to={`/${_id}`}
      state={{ productDetails: props }}
    >
      <li className="cart-item-wrapper">
        <div className="cart-item">
          <img className="cart-item-img" src={img} alt={productName} />
          <div className="cart-item-info">
            <h4>{productName}</h4>
            <p className="cart-item-description">{description}</p>
            <div className="flex space-between vertically-center">
              <p>
                <strong>${price}</strong>
              </p>
              <IoTrashOutline
                size={20}
                style={{ color: "red" }}
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  removeFromCart(_id);
                }}
              />
            </div>
          </div>
        </div>
      </li>
    </Link>
  );
};

export default cartItem;
