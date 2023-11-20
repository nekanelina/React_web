import React, { useState } from "react";

import favorit from "../../images/products/favorit.png";

let cartBtn = "cart-btn";

function ThumbnailSale(props) {
  const { id, img, productName, price, manufacturer, country, discount } = props;

// For the favorite button
  let notPushed = true;

  function changeBackground() {
    let element = document.getElementById(`favorite-${id}`);

    notPushed = !notPushed;

    if (!notPushed) {
      element.style.backgroundColor = "#eb6d20";
    } else element.style.backgroundColor = "#fff";
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
          id={`favorite-${id}`}
          onClick={changeBackground}
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
          <button className={cartBtn} onClick={cartChangeBackground} id={`cart-${id}`}> </button>
        </div>
      </a>
    </div>
  );
}

export default ThumbnailSale;
