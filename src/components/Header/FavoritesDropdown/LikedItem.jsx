import { FaHeart } from "react-icons/fa";
import { IoTrashOutline } from "react-icons/io5";

const LikedItem = ({
  id,
  img,
  productName,
  description,
  price,
  handleDeleteFavorite,
}) => {
  return (
    <li className="liked-item-wrapper">
      <div className="liked-item">
        <img className="liked-item-img" src={img} alt={productName} />
        <div className="liked-item-info">
          <div className="flex space-between vertically-center">
            <h4>{productName}</h4>
            <FaHeart size={15} style={{ color: "var(--mainthird)" }} />
          </div>
          <p className="liked-item-description">{description}</p>
          <div className="flex space-between vertically-center">
            <p>
              <strong>${price}</strong>
            </p>
            <IoTrashOutline
              size={20}
              style={{ color: "red" }}
              onClick={() => handleDeleteFavorite(id)}
            />
          </div>
        </div>
      </div>
    </li>
  );
};

export default LikedItem;
