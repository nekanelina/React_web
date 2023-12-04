import { computed, signal } from "@preact/signals-react";

import Login from "./Login";
import { currentUser } from "../../App";
import UserDropdownMenu from "./UserDropdownMenu";
import CategoryDropdownMenu from "./CategoryDropdownMenu";
import FavoritesDropdown from "./FavoritesDropdown";
import { favoritesAddMessage, favoritesDelMessage } from "./FavoritesDropdown";

import { BiUser } from "react-icons/bi";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { IoHeartOutline, IoSearch } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import { useNavigate } from "react-router-dom";
import React from "react";

import "./Header.css";

export const allCategoriesActive = signal(false);
export const userDropdownActive = signal(false);
export const favoritesDropdownActive = signal(false);
export const loginDropdownActive = signal(false);

export const searchInput = signal("");
export let accountHoverTimer;

const Header = () => {
  console.log("Render: Header");

  const favoritesQuantity = computed(() => {
    return currentUser.value?.favorites?.length;
  });

  const shoppingCartQuantity = computed(() => {
    return currentUser.value?.shoppingCart?.length;
  });

  const navigate = useNavigate();

  return (
    <div className="header-container">
      <button onClick={() => navigate("/")}>
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
                <p className="user-name-text">{currentUser.value.firstName}</p>
              </div>
            )}
            {loginDropdownActive.value && <Login />}
            {userDropdownActive.value && <UserDropdownMenu />}
          </div>
          <div
            className="user-nav-button pos-relative pointer"
            onClick={() => {
              loginDropdownActive.value = false;
              userDropdownActive.value = false;
              favoritesDropdownActive.value = !favoritesDropdownActive.value;
            }}
          >
            <IoHeartOutline className="header-icon pointer" />
            {favoritesDropdownActive.value && <FavoritesDropdown />}
            {favoritesAddMessage.value && (
              <p className="favorites-add-message">
                {favoritesAddMessage.value}
              </p>
            )}
            {favoritesDelMessage.value && (
              <p className="favorites-del-message">
                {favoritesDelMessage.value}
              </p>
            )}
            {favoritesQuantity.value > 0 && (
              <div className="favorites-quantity">
                {favoritesQuantity.value}
              </div>
            )}
          </div>
          <div className="user-nav-button pos-relative">
            <HiOutlineShoppingBag
              className="header-icon"
              onClick={() => {
                if (shoppingCartQuantity.value > 0) navigate("/checkout");
              }}
            />
            {shoppingCartQuantity.value > 0 && <div className="shopping-cart-quantity">{shoppingCartQuantity.value}</div>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
