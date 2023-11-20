import { products } from "../../../models/data";
import { allCategoriesActive } from "../Header";
import "./CategoryDropdownMenu.css";

const CategoryDropdownMenu = () => {
  console.log("Render: CategoryDropdownMenu");

  return (
    <div
      className={
        allCategoriesActive.value
          ? "category-dropdown-menu category-dropdown-menu-active"
          : "category-dropdown-menu category-dropdown-menu-disabled"
      }
    >
      {Object.keys(products).map((key) => {
        return (
          <div key={key} className="category-dropdown-link">
            {key}
          </div>
        );
      })}
    </div>
  );
};

export default CategoryDropdownMenu;