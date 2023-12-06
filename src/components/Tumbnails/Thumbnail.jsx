import { currentUser } from "../../App";
//import { handleFavoriteBtnClicked } from "../Header/FavoritesDropdown";
import { Link } from "react-router-dom";
import useFavorites from "../../hooks/useFavorites";
import useShoppingCart from "../../hooks/useShoppingCart";

import favorit from "../../images/products/favorit.png";

function Thumbnail(props) {
  const { handleFavoriteBtnClicked } = useFavorites();
  const { handleCartBtnClicked, ifInCart } = useShoppingCart();

  const { _id, img, productName, price, manufacturer, country } = props;

  function ifFavorite() {
    // check if the product is already in the favorites
    if (currentUser.value && currentUser.value.favorites)
      return currentUser.value.favorites.find(
        (favorite) => favorite._id === _id
      );

  }

  // For the cart button
  let btnNotPushed = true;

  function cartChangeBackground() {
    let element = document.getElementById(`cart-${_id}`);

    btnNotPushed = !btnNotPushed;

    if (!btnNotPushed) {
      element.style.backgroundColor = "#eb6d20";
    } else element.style.backgroundColor = "#E7E5E5";
  }

  return (
    <div className="product" key={_id}>
      <div className="favorite pointer">
        <img
          src={favorit}
          alt="favorit"
          id={`favorite-${_id}`}
          onClick={() => {
            handleFavoriteBtnClicked(props);
          }}
          style={
            currentUser.value && ifFavorite()
              ? { backgroundColor: "var(--mainthird)" }
              : {}
          }
        />
      </div>
      <Link
        className="a-product"
        to={`/${_id}`}
        state={{ productDetails: props }}
      >
        {" "}
        {/* Use Link component */}
        <img className="img product-img" src={img} alt="product" />
        <div className="product-description">
          <div className="productName text-wrapper">
            <strong>{productName}</strong>
          </div>
          <div className="text-wrapper-3 manufacturer">
            {" "}
            <span className="manufacturer">Manufacturer: </span>
            <strong>{manufacturer}</strong>
          </div>
          <div className="text-wrapper-3 country">
            <span className="country">Country of origin: </span>
            <strong>{country}</strong>
          </div>
          <div className="ofer">
            <div className="price">$ {price.toFixed(2)}</div>

            <button
              className={cartBtn}
              onClick={cartChangeBackground}
              id={`cart-${_id}`}
            >
              {" "}
            </button>
          </div>
          {/* <div className="discount">
            <div className="discount-sub">
              <strong>-{discount * 100}</strong> %
            </div>
          </div> */}

          <button
            className="cart-btn"    
            onClick={() => {
              handleCartBtnClicked(props);
            }}
            style={
              currentUser.value && ifInCart(_id)
                ? { backgroundColor: "var(--mainthird)" }
                : {}
            }
            id={`cart-${_id}`}
          >
            {" "}
          </button>
        </div>
      </Link>
    </div>
  );
}

export default Thumbnail;
