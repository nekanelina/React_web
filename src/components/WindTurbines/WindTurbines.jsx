
// import products from "../../models/dataForSale";
import ThumbnailSale from "../Tumbnails/ThumbnailSale";
import Thumbnail from "../Tumbnails/Thumbnail";

import React, { useState, useEffect } from "react";
import "../SalePage/Sale.css";

// let start = 0;
// let end = 4;
// let productsFiltered = products.filter(product => product.category > 0);
// const filteredProducts = products.filter(product => product.category === 5);
// let productsToLoad = filteredProducts.slice(start, end);
let filteredProducts;


const WindTurbines = () => {

      const [data, setData] = useState(null);
        

      useEffect(() => {
        const fetchProducts = async () => {
          const response = await fetch("http://localhost:4000/products")
          const json = await response.json();
          console.log(json);

          if(response.ok) {
            setData(json);
          }
        };
        fetchProducts();
        console.log("useEffect");
      }, []);

      if(data) {
        filteredProducts = data.filter(product => product.category === 5);
      }

    // const [data, setData] = useState(productsToLoad);

    // const loadHandler = () => {
    //     start += 4;
    //     end += 4;
    //     console.log(start, end);
    //     let slice = filteredProducts.slice(start, end);
    //     console.log(slice);
    //     productsToLoad = productsToLoad.concat(slice);
    //     setData(productsToLoad);
    //     }



  return (
    <div className="category-page">
      <div className="product-container">
            {/* {productsToLoad.map((product) => {
            return <Thumbnail {...product} key={product.id} />              
            })} */}
             {data && filteredProducts.map((product) => {
            if(product.discount > 0) {
              return <ThumbnailSale {...product} key={product._id} />
            } else return <Thumbnail {...product} key={product._id} />
              
            })}
        </div>
        {/* <div>
            {end < filteredProducts.length ? (
                <button className="all-categories active-btn" onClick={loadHandler}><span>Load more</span></button>
            ) : null}
        </div>       */}
    </div>
  )
}

export default WindTurbines;
