import product from "../../models/dataForSale";
import Thumbnail from "../EVcharges/Thumbnail";
import React, { useState } from "react";
import "../SalePage/Sale.css";
import ThumbnailSale from "../SalePage/ThumbnailSale";
import { allProducts } from "../../models/newData";
let start = 0;
let end = 4;
// let productsFiltered = products.filter(product => product.category > 0);

const filteredProducts = product.filter((product) => product.category === 2);
let productsToLoad = filteredProducts.slice(start, end);

const SolarPanels = () => {
  const [data, setData] = useState(productsToLoad);

  const loadHandler = () => {
    start += 4;
    end += 4;
    console.log(start, end);
    let slice = filteredProducts.slice(start, end);
    console.log(slice);
    productsToLoad = productsToLoad.concat(slice);
    setData(productsToLoad);
  };

  return (
    <div className="category-page">
      <div className="product-container">
        {/* {productsToLoad.map((product) => {
            return <Thumbnail {...product} key={product.id} />              
            })} */}
        {productsToLoad.map((product) => {
          if (product.discount > 0) {
            return <Thumbnail {...product} key={product.id} />;
          } else return <ThumbnailSale {...product} key={product.id} />;
        })}
      </div>
      <div>
        {end < filteredProducts.length ? (
          <button className="all-categories active-btn" onClick={loadHandler}>
            <span>Load more</span>
          </button>
        ) : null}
      </div>
    </div>
  );
};

export default SolarPanels;
