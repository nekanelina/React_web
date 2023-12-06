import { useRef, useEffect } from "react";
import { signal } from "@preact/signals-react";
import { computed } from "@preact/signals-react";
import { currentUser } from "../../../App";
import useFavorites from "../../../hooks/useFavorites";
import { favoritesDropdownActive } from "..";
import LikedItem from "./LikedItem";
import "./FavoritesDropdown.css";

export const favoritesAddMessage = signal("");
export const favoritesDelMessage = signal("");

const FavoritesDropdown = () => {
  const dropdownRef = useRef(null);
  const { handleDeleteFavorite } = useFavorites();


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
