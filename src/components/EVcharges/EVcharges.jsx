
import products from "../../models/dataForSale";
import ThumbnailSale from "../SalePage/ThumbnailSale";
import Thumbnail from "./Thumbnail";

import React, { useState } from "react";
import "../SalePage/Sale.css";

let start = 0;
let end = 4;
let productsToLoad = products.slice(start, end);

const EVcharges = () => {

    const [data, setData] = useState(productsToLoad);

    const loadHandler = () => {
        start += 4;
        end += 4;
        console.log(start, end);
        let slice = products.slice(start, end);
        console.log(slice);
        productsToLoad = productsToLoad.concat(slice);
        setData(productsToLoad);
        }



  return (
    <div className="category-page">
      <div className="product-container">
            {/* {productsToLoad.map((product) => {
            return <Thumbnail {...product} key={product.id} />              
            })} */}
             {productsToLoad.map((product) => {
            if(product.discount > 0) {
              return <ThumbnailSale {...product} key={product.id} />
            } else return <Thumbnail {...product} key={product.id} />
              
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

export default EVcharges;
