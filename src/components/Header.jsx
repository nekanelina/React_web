import React from "react";
import { BagAlt } from "../img/headerImg/BagAlt";
import { ExpandDownLight } from "../img/headerImg/ExpandDownLight";
import { SearchAltDuotoneLine } from "../img/headerImg/SearchAltDuotoneLine";
import {User} from "../img/headerImg/User";
import LogoFooter from "../img/footerImg/LogoFooter"
import "../css/header.css";


export const Header = () => {
    return (
        <div className="header">
            <div className="overlap">
                <LogoFooter className="logo" alt="Logo"/>   
                <div className="container-search">
                    <div className="all-categories">
                        <div className="text-wrapper-header">All categories</div>
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
                    <div className=""><a href="#" className="text-wrapper-4">Solar Panels</a></div>
                    <div className=""><a href="#" className="text-wrapper-4">Energy Storage Solutions</a></div>
                    <div className=""><a href="#" className="text-wrapper-4">EV Charging Stations</a></div>
                    <div className=""><a href="#" className="text-wrapper-4">Energy-efficient Appliances</a></div>
                    <div className=""><a href="#" className="text-wrapper-4">Wind Turbines</a></div>
                </div>
            </div>
        </div>
    );
};
