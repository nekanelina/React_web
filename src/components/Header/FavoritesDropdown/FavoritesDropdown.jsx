import { signal } from "@preact/signals-react";
import { computed } from "@preact/signals-react";
import { currentUser } from "../../Content";
import { loginError } from "../Login";
import { loginDropdownActive, favoritesDropdownActive } from "..";
import LikedItem from "./LikedItem";
import "./FavoritesDropdown.css";

export const favoritesAddMessage = signal("");
export const favoritesDelMessage = signal("");

export const handleAddToFavorites = async (product) => {
  try {
    const response = await fetch("http://localhost:4000/api/user/favorites/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ product: product, user: currentUser.value }),
    });
    const json = await response.json();

    if (response.ok) {
      favoritesAddMessage.value = "+1";
      favoritesDropdownActive.value = true;
      setTimeout(() => {
        favoritesAddMessage.value = "";
      }, 2000);
      setTimeout(() => {
        favoritesDropdownActive.value = false;
      }, 2000);
      currentUser.value = json;
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
    if (response.ok) {
      const json = await response.json();
      currentUser.value = json;
      favoritesDelMessage.value = "-1";
      setTimeout(() => {
        favoritesDelMessage.value = "";
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
    (savedProduct) => savedProduct.id === product.id
  );

  if (productIndex === -1) {
    handleAddToFavorites(product);
  } else {
    handleDeleteFavorite(product.id);
  }
};

const FavoritesDropdown = () => {
  const favorites = computed(() => {
    return currentUser.value.favorites;
  });

  return (
    <div className="likes-dropdown-container">
      <ul className="likes-dropdown">
        {currentUser.value &&
          currentUser.value.favorites &&
          favorites.value.map((product) => (
            <LikedItem
              key={product.id}
              {...product}
              handleDeleteFavorite={handleDeleteFavorite}
            />
          ))}
      </ul>
    </div>
  );
};

export default FavoritesDropdown;
