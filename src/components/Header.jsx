import React from "react";
import { useState } from "react";
import { BagAlt } from "../img/headerImg/BagAlt";
import { ExpandDownLight } from "../img/headerImg/ExpandDownLight";
import { SearchAltDuotoneLine } from "../img/headerImg/SearchAltDuotoneLine";
import { User } from "../img/headerImg/User";
import { UserDropdown } from "./UserDropdown";
import LogoFooter from "../img/footerImg/LogoFooter";
import "../css/header.css";

export const Header = ({ setUser, user, setShowLogin }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  console.log('Render: Header');
  return (
    <div className="header">
      <div className="overlap">
        <LogoFooter className="logo" alt="Logo" />
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
            <User className="user-instance" color="white" />
            {user ? (
              <a href="#" className="text-wrapper-4" onMouseEnter={() => setShowDropdown(true)} onMouseLeave={() => setShowDropdown(false)}>
                {user.firstName + " " + user.lastName}
              </a>
            ) : (
              <a
                href="#"
                className="text-wrapper-4 navbar-link"
                onClick={() => setShowLogin(true)}
              >
                Login
              </a>
            )}
            {showDropdown && <UserDropdown setShowDropdown={setShowDropdown} setUser={setUser} />}
          </div>
          <div className="shopping">
            <BagAlt className="icon-instance-node" color="#5F5F5F" />
            <div className="text-wrapper-4">Shopping</div>
          </div>
        </div>
      </div>
      <div className="header-menu">
        <div className="navbar">
          <div className="">
            <a href="#" className="text-wrapper-4 navbar-link">
              Solar Panels
            </a>
          </div>
          <div className="">
            <a href="#" className="text-wrapper-4 navbar-link">
              Energy Storage Solutions
            </a>
          </div>
          <div className="">
            <a href="#" className="text-wrapper-4 navbar-link">
              EV Charging Stations
            </a>
          </div>
          <div className="">
            <a href="#" className="text-wrapper-4 navbar-link">
              Energy-efficient Appliances
            </a>
          </div>
          <div className="">
            <a href="#" className="text-wrapper-4 navbar-link">
              Wind Turbines
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
