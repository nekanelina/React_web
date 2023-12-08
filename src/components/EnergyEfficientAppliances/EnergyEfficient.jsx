
import ThumbnailSale from "../Tumbnails/ThumbnailSale";
import Thumbnail from "../Tumbnails/Thumbnail";

import { useProductsContext } from "../../hooks/useProductsContext";

import React, {useEffect, useState } from "react";
import "../SalePage/Sale.css";


  const EnergyEfficient = () => {

    // const [data, setData] = useState(null);
    const {data, dispatch} = useProductsContext();
    const [pushed, setPushed] = useState(false);
    const [filteredData, setFilteredData] = useState(null);

    useEffect(() => {
      const fetchProducts = async () => {
        const response = await fetch("http://localhost:4000/products/category/4")
        const json = await response.json();
        // console.log(json);

        if(response.ok) {
          // setData(json);
          dispatch({type: "GET_ALL_PRODUCTS", payload: json});
        }
      };
      fetchProducts();
      console.log("useEffect");
    }, []);



    const onClickFilter = (id) => {

      setPushed(!pushed);   

      if(pushed) {setFilteredData(data.filter(product => product.subcategory === id));} 
      else {setFilteredData(data);}}
  



  return (
    <div className="category-page">
      <div className="product-container">
             {filteredData && filteredData.map((product) => {
            if(product.discount > 0) {
              return <ThumbnailSale {...product} key={product._id} />
            } else return <Thumbnail {...product} key={product._id} />
              
            })}
        </div>
        <div>
          <button 
          className="all-categories active-btn" 
          onClick={() => onClickFilter(1)}>
          <span>Subcategory 1</span>
          </button>            
        </div>
        <div>
          <button 
          className="all-categories active-btn" 
          onClick={() => onClickFilter(2)}>
          <span>Subcategory 2</span>
          </button>            
        </div>        
    </div>
  )
}

export default EnergyEfficient;


// onClick={dispatch({type: 'GET_SUBCATEGORY_PRODUCTS', payload: data})}>