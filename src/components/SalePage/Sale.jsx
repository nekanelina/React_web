
// import products from "../../models/dataForSale";
import ThumbnailSale from "../Tumbnails/ThumbnailSale";
import React, { useState, useEffect } from "react";
import "./Sale.css";

let filteredProducts;


const Sale = () => {
      const [data, setData] = useState(null);
        

      useEffect(() => {
        const fetchProducts = async () => {
          const response = await fetch("http://localhost:4000/products")
          const json = await response.json();

          if(response.ok) {
            setData(json);
          }
        };
        fetchProducts();
      }, []);

      if(data) {
        filteredProducts = data.filter(product => product.discount > 0);
      }


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
