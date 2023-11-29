import favorit from "../../images/products/favorit.png";

import { handleFavoriteBtnClicked } from "../Header/FavoritesDropdown";
import { currentUser } from "../../App";

let cartBtn = "cart-btn";

function ThumbnailSale(props) {
  const { id, img, productName, price, manufacturer, country, discount } =
    props;

  function ifFavorite() {
    // check if the product is already in the favorites
    if (currentUser.value && currentUser.value.favorites)
      return currentUser.value.favorites.find((favorite) => favorite.id === id);
  }

  // For the cart button
  let btnNotPushed = true;

  function cartChangeBackground() {
    let element = document.getElementById(`cart-${id}`);

    btnNotPushed = !btnNotPushed;

    if (!btnNotPushed) {
      element.style.backgroundColor = "#eb6d20";
    } else element.style.backgroundColor = "#E7E5E5";
  }

  return (
    <div className="product" key={id}>
      <div className="favorite pointer">
        <img
          src={favorit}
          alt="favorit"
          style={
            currentUser.value && ifFavorite()
              ? { backgroundColor: "var(--mainthird)" }
              : {}
          }
          id={`favorite-${id}`}
          onClick={() => {
            handleFavoriteBtnClicked(props);
          }}
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
            $ {price - price * discount}{" "}
            <span className="old-price">$ {price} </span>
          </div>
          <div className="discount">
            <div className="discount-sub">
              <strong>-{discount * 100}</strong> %
            </div>
          </div>
          <button
            className={cartBtn}
            onClick={cartChangeBackground}
            id={`cart-${id}`}
          >
            {" "}
          </button>
        </div>
      </a>
    </div>
  );
}

export default ThumbnailSale;
