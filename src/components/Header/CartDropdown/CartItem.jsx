import { IoTrashOutline } from "react-icons/io5";

const cartItem = ({
  _id,
  img,
  productName,
  description,
  price,
  removeFromCart,
}) => {
  return (
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
                e.stopPropagation();
                removeFromCart(_id);
              }}
            />
          </div>
        </div>
      </div>
    </li>
  );
};

export default cartItem;
