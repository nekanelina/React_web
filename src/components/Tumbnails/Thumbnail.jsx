import { Link } from "react-router-dom";
import { currentUser } from "../../App";
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

  return (
    <div className="product" key={_id}>
      <Link
        className="a-product"
        to={`/${_id}`}
        state={{ productDetails: props }}
      >
        <div className="favorite pointer">
          <img
            src={favorit}
            alt="favorit"
            id={`favorite-${_id}`}
            onClick={(e) => {
              e.preventDefault();
              handleFavoriteBtnClicked(props);
            }}
            style={
              currentUser.value && ifFavorite()
                ? { backgroundColor: "var(--mainthird)" }
                : {}
            }
          />

        </div>
        <a className="a-product" href="#fake">
          <img className="img product-img" src={img} alt="product" />
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
            <div className="price">
              $ {price}
              {/* <span className="old-price">$ {price} </span> */}
            </div>
            {/* <div className="discount">
            <div className="discount-sub">
              <strong>-{discount * 100}</strong> %
            </div>
          </div> */}
            <button
              className="cart-btn"
              onClick={(e) => {
                e.preventDefault(); 
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
        </a>

      </Link>
    </div>
  );
}

export default Thumbnail;
