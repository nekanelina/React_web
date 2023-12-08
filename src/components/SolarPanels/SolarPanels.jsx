
// import products from "../../models/dataForSale";
import ThumbnailSale from "../Tumbnails/ThumbnailSale";
import Thumbnail from "../Tumbnails/Thumbnail";
import Filters from "../Filters/Filters";

import React, { useState, useEffect } from "react";
import "../SalePage/Sale.css";
// import filterData from "../../models/filterData";


const SolarPanels = () => {
  const [data, setData] = useState(null);
  // const [category, subcategory, description, img] = filterData;
  // const filter = filterData.filter(item => item.category === 2);

      
      
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("http://localhost:4000/products/category/2")
      const json = await response.json();
      console.log(json);
      
      if(response.ok) {
        setData(json);
      }
    };
    fetchProducts();
    // console.log(filter);
  }, []);
      

  return (
    <div className="category-page">
      <Filters 
        title="Solar Panels"
        category={2}
      />
      <div className="product-container">
             {data && data.map((product) => {
            if(product.discount > 0) {
              return <ThumbnailSale {...product} key={product._id} />
            } else return <Thumbnail {...product} key={product._id} />
              
            })}
        </div>
    </div>
  )
}

export default SolarPanels;
