import { googleLogout } from "@react-oauth/google";
// StateVariables aka Signals
import { userDropdownActive } from "..";
import { pageStates } from "../../Content";
import { currentUser } from "../Login";
// Utils
import { accountHoverTimer } from "..";
import { showOnePage } from "../../../utils/changePageStates";
// Styles
import "./UserDropdownMenu.css";

const UserDropdownMenu = () => {
  console.log("Render: UserDropdown");

  return (
    <div
      className="user-dropdown"
      onMouseEnter={() => clearTimeout(accountHoverTimer)}
    >
      <div
        className="user-dropdown-link"
        onClick={() => (pageStates.value = showOnePage("accountPage"))}
      >
        Account
      </div>
      <div
        className="user-dropdown-link"
        onClick={() => {
          localStorage.removeItem('accessToken');
          localStorage.removeItem('refreshToken');
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