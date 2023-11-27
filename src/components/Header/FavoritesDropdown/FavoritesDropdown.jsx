import LikedItem from "./LikedItem";
import { testUser } from "../../../models/user";
import "./FavoritesDropdown.css";
import { signal, computed } from "@preact/signals-react";

const user = signal(testUser);

const FavoritesDropdown = () => {
  const favorites = computed(() => {
    return user.value.favorites;
  });

  const handleDeleteItem = (id) => {
    const newFavorites = user.value.favorites.filter(
      (product) => product.id !== id
    );
    user.value = { ...user.value, favorites: newFavorites };
  };

  return (
    <div className="likes-dropdown-container">
      <ul className="likes-dropdown">
        {favorites.value &&
          favorites.value.map((product) => (
            <LikedItem {...product} handleDeleteItem={handleDeleteItem} />
          ))}
      </ul>
    </div>
  );
};

export default FavoritesDropdown;
