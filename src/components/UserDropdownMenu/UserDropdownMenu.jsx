import { googleLogout } from "@react-oauth/google";
// StateVariables aka Signals
import { currentUser } from "../Login";
import { showUserDropdown } from "../Header";
import { pageStates } from "../Content";
// Utils
import changePageState from "../../utils/changePageState";
// Styles
import "./UserDropdownMenu.css";

const UserDropdownMenu = () => {
  console.log("Render: UserDropdown");

  return (
    <div
      className="user-dropdown"
      onMouseEnter={() => (showUserDropdown.value = true)}
      onMouseLeave={() => (showUserDropdown.value = false)}
    >
      <button
        className="text-wrapper-4 link no-border-5-padding no-bg pointer"
        onClick={() => pageStates.value = changePageState("showAccountPage")}
      >
        Account
      </button>
      <button
        className="text-wrapper-4 link no-border-5-padding no-bg pointer"
        onClick={() => {
          googleLogout();
          currentUser.value = null;
          showUserDropdown.value = false;
          pageStates.value = changePageState("MainPage");
        }}
      >
        Logout
      </button>
    </div>
  );
};

export default UserDropdownMenu;
