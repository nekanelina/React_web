
import React from "react";
import "../css/content.css";
import SaleContainer from "./SaleContainer";
import MenuMain from "./MenuMain";

export const Content = () => {
    return (
        <div className="content">
            <MenuMain />
            <SaleContainer />    

        </div>
    );
};
