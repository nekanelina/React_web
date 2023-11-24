import { signal } from "@preact/signals-react";

import Login from "./Login";
import { currentUser, pageStates, showOnePage } from "../Content";
import UserDropdownMenu from "./UserDropdownMenu";
import CategoryDropdownMenu from "./CategoryDropdownMenu";
import { blockMainPage } from "../MainPage";

import { BiUser } from "react-icons/bi";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { IoHeartOutline, IoSearch } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";

import "./Header.css";

export const allCategoriesActive = signal(false);
export const userDropdownActive = signal(false);

export const searchInput = signal("");
export let accountHoverTimer;

const Header = () => {
  console.log("Render: Header");

  return (
    <div className="header-container">
      <h3 className="company-name">E-commerce</h3>
      <div className="header-menu-container">
        <div className="search-wrapper">
          <div
            className="hamburger-menu "
            onMouseEnter={() => {
              if (window.innerWidth > 800) {
                allCategoriesActive.value = true;
                blockMainPage.value = true;
              }
            }}
            onMouseLeave={() => {
              if (window.innerWidth > 800) {
                allCategoriesActive.value = false;
                blockMainPage.value = false;
              }
            }}
            onClick={() => {
              if (window.innerWidth <= 800) {
                allCategoriesActive.value = !allCategoriesActive.value;
                blockMainPage.value = true;
              }
            }}
          >
            <RxHamburgerMenu className="hamburger-icon" />
            <p className="text-all-categories">All categories</p>
            <CategoryDropdownMenu className="category-dropdown" />
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
        <CategoryDropdownMenu className="category-dropdown-mobile" />
        <div className="user-nav-wrapper">
          <div
            className="user-nav-button"
            onClick={() => {
              if (!currentUser.value) showOnePage("loginPage");
            }}
            onMouseEnter={() => {
              if (currentUser.value) {
                clearTimeout(accountHoverTimer);
                userDropdownActive.value = true;
              }
            }}
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
            {currentUser.value && (
              <div className="user-dropdown-button">
                <span className="user-nav-text">
                  {currentUser.value.firstName}
                </span>
              </div>
            )}
          </div>
          {pageStates.value.loginPage && <Login />}
          {userDropdownActive.value && <UserDropdownMenu />}

          <div className="user-nav-button">
            <IoHeartOutline className="header-icon" />
          </div>
          <div className="user-nav-button pos-relative">
            <HiOutlineShoppingBag className="header-icon" />
            <div className="shopping-cart-quantity">8</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
