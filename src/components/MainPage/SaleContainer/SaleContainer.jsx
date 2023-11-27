import React from "react";
import "./saleContainer.css";
import Thumbnail from "../Thumbnail/Thumbnail";
import products from "../../../models/products";
import { useNavigate } from 'react-router-dom'

const SaleContainer = () => {

    const navigate = useNavigate();

    const onClickHandler = () => {
        navigate('/sale');
    };


    return (
        <div className="sale-wrapper">
            <div className="sale-title"><h2>Sale!</h2></div>
            <div className="sale-container">
                {products.map((product) => {
                    return <Thumbnail {...product} key={product.id} />
                })}
                <button className="active-btn" onClick={onClickHandler}><span>View all</span></button>
            </div>
        </div>

    );
};

export default SaleContainer;