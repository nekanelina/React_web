// Libaries
import { signal } from "@preact/signals-react";
import React from "react";
// Components
import Login from "../Login";
import UserDropdownMenu from "../UserDropdownMenu";
// StateVariables aka Signals
import { pageStates } from "../Content";
import { currentUser } from "../Login";
// Utils
import { showOnePage, hideOnePage } from "../../utils/changePageStates";
// Images
import { BiUser } from "react-icons/bi";
import LogoFooter from "../../images/footerImg/LogoFooter";
import { BagAlt } from "../../images/headerImg/BagAlt";
import { ExpandDownLight } from "../../images/headerImg/ExpandDownLight";
import { SearchAltDuotoneLine } from "../../images/headerImg/SearchAltDuotoneLine";
// Styles
import "./Header.css";

export let showUserDropdown = signal(false);
export let accountHoverTimer;
export let logInHoverTimer;

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
          <div
            className="account"
            onMouseEnter={
              currentUser.value
                ? () => {
                    clearTimeout(accountHoverTimer);
                    showUserDropdown.value = true;
                  }
                : () => {
                    clearTimeout(logInHoverTimer);
                    pageStates.value = showOnePage("loginPage");
                  }
            }
            onMouseLeave={
              currentUser.value
                ? () => {
                    accountHoverTimer = setTimeout(() => {
                      showUserDropdown.value = false;
                    }, 1000);
                  }
                : () => {
                    logInHoverTimer = setTimeout(
                      () => (pageStates.value = hideOnePage("loginPage")),
                      1000
                    );
                  }
            }
          >
            <div className="user-icon-wrapper">
              {currentUser.value?.googleLogin ? (
                <img
                  src={currentUser.value.picture}
                  className="google-user-icon"
                  alt="profile_picture"
                />
              ) : (
                <BiUser className="user-icon" />
              )}
            </div>
            {currentUser.value ? (
              <button className="text-wrapper-4 no-border-5-padding no-bg">
                {currentUser.value.firstName}
              </button>
            ) : (
              <button className="text-wrapper-4 link no-border-5-padding no-bg pointer">
                Login
              </button>
            )}
            {pageStates.value.loginPage && <Login />}
            {currentUser.value && showUserDropdown.value && (
              <UserDropdownMenu />
            )}
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
