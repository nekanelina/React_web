import { googleLogout } from "@react-oauth/google";
// StateVariables aka Signals
import { showUserDropdown } from "../Header";
import { currentUser } from "../Login";
import { pageStates } from "../Content";
// Utils
import { showOnePage } from "../../utils/changePageStates";
import { accountHoverTimer } from "../Header";
// Styles
import "./UserDropdownMenu.css";

const UserDropdownMenu = () => {
  console.log("Render: UserDropdown");

  return (
    <div
      className="user-dropdown"
      onMouseEnter={() => clearTimeout(accountHoverTimer)}
    >
      <button
        className="text-wrapper-4 link no-border-5-padding no-bg pointer"
        onClick={() => (pageStates.value = showOnePage("accountPage"))}
      >
        Account
      </button>
      <button
        className="text-wrapper-4 link no-border-5-padding no-bg pointer"
        onClick={() => {
          googleLogout();
          currentUser.value = null;
          showUserDropdown.value = false;
        }}
      >
        Logout
      </button>
    </div>
  );
};

export default UserDropdownMenu;
