import { signal } from "@preact/signals-react";

import Login from "./Login";
import { currentUser } from "../Content";
import UserDropdownMenu from "./UserDropdownMenu";
import CategoryDropdownMenu from "./CategoryDropdownMenu";
import FavoritesDropdown from "./FavoritesDropdown";

import { BiUser } from "react-icons/bi";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { IoHeartOutline, IoSearch } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import { useNavigate } from 'react-router-dom'
import React from "react";

import "./Header.css";

export const allCategoriesActive = signal(false);
export const userDropdownActive = signal(false);
const favoritesDropdownActive = signal(false);
export const loginDropdownActive = signal(false);

export const searchInput = signal("");
export let accountHoverTimer;

const Header = () => {

  console.log("Render: Header");

  const navigate = useNavigate();

  const onClickHandler = () => {
    navigate('/');
  };

  const handlShopping = () => {
    navigate("/shopping");
  }


  return (
    <div className="header-container">
      <button onClick={onClickHandler}>
        <h3 className="company-name">E-commerce</h3>
      </button>
      <div className="header-menu-container">
        <div className="search-wrapper">
          <div
            className="hamburger-menu "
            onMouseEnter={() => {
              if (window.innerWidth > 800) {
                allCategoriesActive.value = true;
              }
            }}
            onMouseLeave={() => {
              if (window.innerWidth > 800) {
                allCategoriesActive.value = false;
              }
            }}
            onClick={() => {
              if (window.innerWidth <= 800) {
                allCategoriesActive.value = !allCategoriesActive.value;
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
            className="user-nav-button pos-relative"
            onClick={() => {
              if (!currentUser.value) loginDropdownActive.value = true;
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
            {loginDropdownActive.value && <Login />}
            {userDropdownActive.value && <UserDropdownMenu />}
          </div>

          <div
            className="user-nav-button pos-relative"
            onMouseEnter={() => {
              loginDropdownActive.value = false;
              userDropdownActive.value = false;
              favoritesDropdownActive.value = true;
            }}
            onMouseLeave={() => (favoritesDropdownActive.value = false)}
          >
            <IoHeartOutline className="header-icon" />
            {favoritesDropdownActive.value && <FavoritesDropdown />}
          </div>
          <div className="user-nav-button pos-relative">
            <HiOutlineShoppingBag className="header-icon" onClick={handlShopping}/>
            <div className="shopping-cart-quantity"onClick={handlShopping}>8</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
