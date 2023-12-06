import { currentUser } from "../App";
import { loginError } from "../components/Header/Login";
import { loginDropdownActive } from "../components/Header";
import { favoritesDropdownActive } from "../components/Header";
import {
  favoritesAddMessage,
  favoritesDelMessage,
} from "../components/Header/FavoritesDropdown";

let favoritesDropdownTimer;
let favoritesAddMessageTimer;
let favoritesDelMessageTimer;
let addCounter = 0;
let delCounter = 0;

const useFavorites = () => {
  const handleAddToFavorites = async (product) => {
    try {
      const response = await fetch("/api/user/favorites/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
        body: JSON.stringify({ product: product }),
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

  const handleDeleteFavorite = async (id) => {
    try {
      const response = await fetch("/api/user/favorites/", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
        body: JSON.stringify({ productId: id }),
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

  const handleFavoriteBtnClicked = (product) => {
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

    const foundProduct = favorites.find(
      (savedProduct) => savedProduct._id === product._id
    );

    if (!foundProduct) {
      handleAddToFavorites(product);
    } else {
      handleDeleteFavorite(product._id);
    }
  };

  return { handleDeleteFavorite, handleFavoriteBtnClicked };
};

export default useFavorites;
