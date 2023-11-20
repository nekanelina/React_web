import React from "react";
import "./saleContainer.css";
import Thumbnail from "../Thumbnail/Thumbnail";
import products from "../../models/products";

const SaleContainer = () => {
    return (
        <div className="sale-container">
            {products.map((product) => {
                return <Thumbnail {...product} key={product.id} />
            })}
        </div>

    );
};

export default SaleContainer;