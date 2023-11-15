
import React from "react";
import "../css/content.css";
import "./SaleContainer/saleContainer.css";
import SaleContainer from "./SaleContainer/SaleContainer";
import MenuMain from "./MenuMain/MenuMain";

export const Content = () => {
    return (
        <div className="content">
            <MenuMain />
            <SaleContainer />    

        </div>
    );
};

