
// import products from "../../models/dataForSale";
import ThumbnailSale from "../Tumbnails/ThumbnailSale";
import React, { useState, useEffect } from "react";
import "./Sale.css";

// let start = 0;
// let end = 4;
// let productsFiltered = products.filter(product => product.discount > 0);
// let productsToLoad = productsFiltered.slice(start, end);

let filteredProducts;

// let buttonStyle = () => end <= products.length ? "red" : "green" ;

const Sale = () => {
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
        filteredProducts = data.filter(product => product.discount > 0);
      }
  

    // const [saleData, setSaleData] = useState(productsToLoad);

    // const loadHandler = () => {
    //     start += 4;
    //     end += 4;
    //     console.log(start, end);
    //     let slice = productsFiltered.slice(start, end);
    //     console.log(slice);
    //     productsToLoad = productsToLoad.concat(slice);
    //     setSaleData(productsToLoad);
    //     }



  return (
    <div className="category-page">
      <div className="product-container">
            {data && filteredProducts.map((product) => {
            return <ThumbnailSale {...product} key={product._id} />
            })}
        </div>
        {/* <div>
            {end < productsFiltered.length ? (
                <button className="all-categories active-btn" onClick={loadHandler}><span>Load more</span></button>
            ) : null}
        </div>       */}
    </div>
  )
}

export default Sale;
