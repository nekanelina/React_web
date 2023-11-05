import React from "react";
import { BagAlt } from "./img/BagAlt";
import { ExpandDownLight } from "./img/ExpandDownLight";
import { SearchAltDuotoneLine } from "./img/SearchAltDuotoneLine";
import {User} from "./img/User";
import logo from "./img/Logo.png";
import "../css/style.css";


export const Header = () => {
    return (
        <div className="header">
            <div className="overlap">
                <img className="logo" alt="Logo" src={logo} />
                <div className="container-search">
                    <div className="all-categories">
                        <div className="text-wrapper">All categories</div>
                        <ExpandDownLight className="expand-down-light" color="white" />
                    </div>
                    <div className="text-wrapper-4">Search anything</div>
                    <SearchAltDuotoneLine className="icon-instance-node" />
                </div>
                <div className="shop-account">
                    <div className="account">
                        {/* <img className="icon-instance-node" alt="User" src={User} /> */}
                        <User className="user-instance" color="white" />
                        <div className="text-wrapper-4">Account</div>
                    </div>
                    <div className="shopping">
                        <BagAlt className="icon-instance-node" color="#5F5F5F" />
                        <div className="text-wrapper-4">Shoping</div>
                    </div>
                </div>
               
            </div>
            <div className="header-menu">
                <div className="navbar">
                    <div className="text-wrapper-4">Jewelry &amp; Accessories</div>
                    <div className="text-wrapper-4">Clothing &amp; Shoes</div>
                    <div className="text-wrapper-4">Home &amp; Living</div>
                    <div className="wedding-party">Wedding &amp; Party</div>
                    <div className="text-wrapper-4">Toys &amp; Entertainment</div>
                    <div className="text-wrapper-4">Art &amp; Collectibles</div>
                    <div className="text-wrapper-4">Craft Supplies &amp; Tools</div>
                </div>
            </div>
        </div>
    );
};
