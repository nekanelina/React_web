import { googleLogout } from "@react-oauth/google";
// StateVariables aka Signals
import { userDropdownActive } from "..";
import { currentUser } from "../../Content";
// Utils
import { accountHoverTimer } from "..";
import { showOnePage } from "../../Content";
// Styles
import "./UserDropdownMenu.css";

const UserDropdownMenu = () => {
  console.log("Render: UserDropdown");

  return (
    <div
      className="user-dropdown"
      onMouseEnter={() => clearTimeout(accountHoverTimer)}
      onMouseLeave={() => {
        setTimeout(
          () => (userDropdownActive.value = false),
          1000
        );
      }}
    >
      <div
        className="user-dropdown-link"
        onClick={() => showOnePage("accountPage")}
      >
        Account
      </div>
      <div
        className="user-dropdown-link"
        onClick={() => {
          localStorage.removeItem("accessToken");
          localStorage.removeItem("refreshToken");
          googleLogout();
          currentUser.value = null;
          userDropdownActive.value = false;
        }}
      >
        Logout
      </div>
    </div>
  );
};

export default UserDropdownMenu;
