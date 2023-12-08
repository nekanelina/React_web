
// import products from "../../models/dataForSale";
import ThumbnailSale from "../Tumbnails/ThumbnailSale";
import Thumbnail from "../Tumbnails/Thumbnail";

import React, { useState, useEffect } from "react";
import "../SalePage/Sale.css";


const EnergyEfficient = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("http://localhost:4000/products/category/4");
      const json = await response.json();

      if (response.ok) {
        setData(json);
      }
    };
    fetchProducts();
    console.log("useEffect");
  }, []);


  return (
    <div className="category-page">
      <div className="product-container">
        {data &&
          data.map((product) => {
            if (product.discount > 0) {
              return <ThumbnailSale {...product} key={product._id} />;
            } else return <Thumbnail {...product} key={product._id} />;
          })}
      </div>

    </div>
  );
};

export default EnergyEfficient;


// onClick={dispatch({type: 'GET_SUBCATEGORY_PRODUCTS', payload: data})}>