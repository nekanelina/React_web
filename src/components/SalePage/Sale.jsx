
import products from "../../models/dataForSale";
import ThumbnailSale from "./ThumbnailSale";
import React, { useState } from "react";
import "./Sale.css";

let start = 0;
let end = 4;
let productsFiltered = products.filter(product => product.discount > 0);
let productsToLoad = productsFiltered.slice(start, end);

// let buttonStyle = () => end <= products.length ? "red" : "green" ;

const Sale = () => {

    const [saleData, setSaleData] = useState(productsToLoad);

    const loadHandler = () => {
        start += 4;
        end += 4;
        console.log(start, end);
        // const filtered = products.filter(product => product.discount > 0);
        let slice = productsFiltered.slice(start, end);
        // console.log(slice);
        productsToLoad = productsToLoad.concat(slice);
        setSaleData(productsToLoad);
        }



  return (
    <div className="category-page">
      <div className="product-container">
            {productsToLoad.map((product) => {
            return <ThumbnailSale {...product} key={product.id} />
            })}
        </div>
        <div>
            {end < products.length ? (
                <button className="all-categories active-btn" onClick={loadHandler}><span>Load more</span></button>
            ) : null}
        </div>      
    </div>
  )
}

export default Sale;
