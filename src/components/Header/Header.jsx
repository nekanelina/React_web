// Libaries
import React from "react";
import { signal } from "@preact/signals-react";
// Components
import UserDropdownMenu from "../UserDropdownMenu";
// StateVariables aka Signals
import { currentUser } from "../Login";
import { pageStates } from "../Content";
// Utils
import changePageState from "../../utils/changePageState";
// Images
import LogoFooter from "../../images/footerImg/LogoFooter";
import { BagAlt } from "../../images/headerImg/BagAlt";
import { ExpandDownLight } from "../../images/headerImg/ExpandDownLight";
import { SearchAltDuotoneLine } from "../../images/headerImg/SearchAltDuotoneLine";
import { User } from "../../images/headerImg/User";
// Styles
import "./Header.css";

export let showUserDropdown = signal(false);

const Header = () => {
  console.log("Render: Header");

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
            {currentUser.value ? (
              <button
                className="text-wrapper-4 link no-border-5-padding no-bg"
                onMouseEnter={() => (showUserDropdown.value = true)}
                onMouseLeave={() => (showUserDropdown.value = false)}
              >
                {currentUser.value.firstName}
              </button>
            ) : (
              <button
                className="text-wrapper-4 link no-border-5-padding no-bg pointer"
                onClick={() => (pageStates.value = changePageState("showLoginPage"))}
              >
                Login
              </button>
            )}
            {showUserDropdown.value && <UserDropdownMenu />}
          </div>
          <div className="shopping">
            <BagAlt className="icon-instance-node" color="#5F5F5F" />
            <div className="text-wrapper-4">Shopping</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
