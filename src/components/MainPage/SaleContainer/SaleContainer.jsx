import React from "react";
import "./saleContainer.css";
import Thumbnail from "../Thumbnail/Thumbnail";
import products from "../../../models/products";

const SaleContainer = () => {
    return (
        <div className="sale-wrapper">
            <h2 className="sale-title">Sale</h2>
            <div className="sale-container">
                {products.map((product) => {
                    return <Thumbnail {...product} key={product.id} />
                })}
                <button className="active-btn "><span>View all</span></button>
            </div>
        </div>

    );
};

export default SaleContainer;