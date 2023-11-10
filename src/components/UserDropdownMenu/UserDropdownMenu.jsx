// StateVariables aka Signals
import { currentUser } from "../Login";
import { showUserDropdown } from "../Header";
// Styles
import "./UserDropdownMenu.css";

const UserDropdownMenu = () => {
  console.log("Render: UserDropdown");
  console.log(showUserDropdown.value);
  return (
    <div
      className="user-dropdown"
      onMouseEnter={() => (showUserDropdown.value = true)}
      onMouseLeave={() => (showUserDropdown.value = false)}
    >
      <button className="text-wrapper-4 link no-border-5-padding no-bg">
        Account
      </button>
      <button
        className="text-wrapper-4 link no-border-5-padding no-bg"
        onClick={() => {
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
