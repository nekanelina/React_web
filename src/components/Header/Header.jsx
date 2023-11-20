import { signal } from "@preact/signals-react";

import { hideOnePage, showOnePage } from "../../utils/changePageStates";
import { pageStates } from "../Content";
import Login, { currentUser } from "./Login";
import UserDropdownMenu from "./UserDropdownMenu";
import CategoryDropdownMenu from "./CategoryDropdownMenu";

import { BiUser } from "react-icons/bi";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { IoHeartOutline, IoSearch } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";

import "./Header.css";

export const allCategoriesActive = signal(false);
export const userDropdownActive = signal(false);
export const loginActive = signal(false);
export const searchInput = signal("");
export let accountHoverTimer;
export let logInHoverTimer;

const Header = () => {
  console.log("Render: Header");

  return (
    <div className="header-container">
      <h3 className="company-name">E-commerce</h3>
      <div className="header-menu-container">
        <div className="search-wrapper">
          <div className="category-dropdown">
            <p className="text-all-categories">All categories</p>
            {allCategoriesActive.value ? (
              <IoIosArrowUp
                size={25}
                className="margin-right-10px"
                style={{ color: "var(--color-light-grey)", cursor: "pointer" }}
                onClick={() =>
                  (allCategoriesActive.value = !allCategoriesActive.value)
                }
              />
            ) : (
              <IoIosArrowDown
                size={25}
                className="margin-right-10px"
                style={{ color: "var(--color-light-grey)", cursor: "pointer" }}
                onClick={() =>
                  (allCategoriesActive.value = !allCategoriesActive.value)
                }
              />
            )}
            <CategoryDropdownMenu />
          </div>
          <div className="hamburger-menu">
            <RxHamburgerMenu
              size={35}
              style={{ cursor: "pointer" }}
              onClick={() =>
                (allCategoriesActive.value = !allCategoriesActive.value)
              }
            />
          </div>
          <input
            className="search-input"
            type="text"
            placeholder="Search for products"
            value={searchInput.value}
            onChange={(e) => (searchInput.value = e.target.value)}
          />
          <IoSearch
            size={25}
            className="margin-right-10px"
            style={{ cursor: "pointer" }}
          />
        </div>
        <div className="user-nav-wrapper">
          <div
            className="user-nav-button"
            onMouseEnter={
              currentUser.value
                ? () => {
                    loginActive.value = true;
                    clearTimeout(accountHoverTimer);
                    userDropdownActive.value = true;
                  }
                : () => {
                    loginActive.value = true;
                    clearTimeout(logInHoverTimer);
                    pageStates.value = showOnePage("loginPage");
                  }
            }
            onMouseLeave={
              currentUser.value
                ? () => {
                    accountHoverTimer = setTimeout(() => {
                      loginActive.value = false;
                      userDropdownActive.value = false;
                    }, 1000);
                  }
                : () => {
                    logInHoverTimer = setTimeout(() => {
                      loginActive.value = false;
                      pageStates.value = hideOnePage("loginPage");
                    }, 1000);
                  }
            }
          >
            {currentUser.value?.googleLogin ? (
              <img
                src={currentUser.value.picture}
                className="google-user-icon"
                alt="profile_picture"
              />
            ) : (
              <BiUser className="header-icon" />
            )}

            {currentUser.value ? (
              <div className="user-dropdown-button">
                <span className="user-nav-text">
                  {currentUser.value.firstName}
                </span>
              </div>
            ) : (
              <span className="user-nav-text">Login</span>
            )}
            {pageStates.value.loginPage && <Login />}
            {currentUser.value && userDropdownActive.value && (
              <UserDropdownMenu />
            )}
          </div>
          <div className="user-nav-button">
            <IoHeartOutline className="header-icon" />
            <span className="user-nav-text">Favorites</span>
          </div>
          <div className="user-nav-button pos-relative">
            <HiOutlineShoppingBag className="header-icon" />
            <span className="user-nav-text">Shopping</span>
            <div className="shopping-cart-quantity">8</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;