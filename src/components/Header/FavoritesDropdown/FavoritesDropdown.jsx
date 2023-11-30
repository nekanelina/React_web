import { useRef, useEffect } from "react";
import { signal } from "@preact/signals-react";
import { computed } from "@preact/signals-react";
import { currentUser } from "../../../App";
import { loginError } from "../Login";
import { loginDropdownActive, favoritesDropdownActive } from "..";
import LikedItem from "./LikedItem";
import "./FavoritesDropdown.css";

export const favoritesAddMessage = signal("");
export const favoritesDelMessage = signal("");
let favoritesDropdownTimer;
let favoritesAddMessageTimer;
let favoritesDelMessageTimer;
let addCounter = 0;
let delCounter = 0;

export const handleAddToFavorites = async (product) => {
  try {
    const response = await fetch("http://localhost:4000/api/user/favorites/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ product: product, user: currentUser.value }),
    });
    const json = await response.json();

    if (response.ok) {
      if (favoritesDropdownTimer) clearTimeout(favoritesDropdownTimer);
      if (favoritesAddMessageTimer) clearTimeout(favoritesAddMessageTimer);
      addCounter += 1;
      favoritesAddMessage.value = `+${addCounter}`;
      favoritesDropdownActive.value = true;
      favoritesAddMessageTimer = setTimeout(() => {
        favoritesAddMessage.value = "";
        addCounter = 0;
      }, 2000);
      favoritesDropdownTimer = setTimeout(() => {
        favoritesDropdownActive.value = false;
      }, 2000);
      currentUser.value = { ...currentUser.value, ...json };
    }
  } catch (error) {
    console.log(error);
  }
};

export const handleDeleteFavorite = async (id) => {
  try {
    const response = await fetch("http://localhost:4000/api/user/favorites/", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ productId: id, user: currentUser.value }),
    });
    const json = await response.json();

    if (response.ok) {
      if (favoritesDelMessageTimer) clearTimeout(favoritesDelMessageTimer);
      delCounter -= 1;
      favoritesDelMessage.value = delCounter;
      currentUser.value = { ...currentUser.value, ...json };
      favoritesDelMessageTimer = setTimeout(() => {
        favoritesDelMessage.value = "";
        delCounter = 0;
      }, 2000);
    }
  } catch (error) {
    console.log(error);
  }
};

export const handleFavoriteBtnClicked = (product) => {
  if (!currentUser.value) {
    loginError.value = "Please register/login to add to favorites";
    setTimeout(() => {
      loginError.value = "";
    }, 5000);
    loginDropdownActive.value = true;
    return;
  }

  const favorites = currentUser.value && currentUser.value.favorites;

  if (!favorites) {
    loginError.value = "Please register to add to favorites";
    setTimeout(() => {
      loginError.value = "";
    }, 5000);
    loginDropdownActive.value = true;
    return;
  }

  const productIndex = favorites.findIndex(
    (savedProduct) => savedProduct._id === product._id
  );

  if (productIndex === -1) {
    handleAddToFavorites(product);
  } else {
    handleDeleteFavorite(product._id);
  }
};

const FavoritesDropdown = () => {
  const dropdownRef = useRef(null);

  const favorites = computed(() => {
    return currentUser.value.favorites;
  });

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        favoritesDropdownActive.value = false;
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="likes-dropdown-container" ref={dropdownRef}>
      <ul className="likes-dropdown">
        {currentUser.value &&
          currentUser.value.favorites &&
          favorites.value.map((product) => (
            <LikedItem
              key={product._id}
              {...product}
              handleDeleteFavorite={handleDeleteFavorite}
            />
          ))}
      </ul>
    </div>
  );
};

export default FavoritesDropdown;
