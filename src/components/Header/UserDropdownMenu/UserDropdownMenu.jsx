import { googleLogout } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
// StateVariables aka Signals
import { userDropdownActive } from "..";
import { registerPageActive } from "../Login";
import { currentUser } from "../../Content";
// Utils
import { accountHoverTimer } from "..";
// Styles
import "./UserDropdownMenu.css";

const UserDropdownMenu = () => {
  const navigate = useNavigate();

  console.log("Render: UserDropdown");

  return (
    <div
      className="user-dropdown"
      onMouseEnter={() => clearTimeout(accountHoverTimer)}
      onMouseLeave={() => {
        setTimeout(() => (userDropdownActive.value = false), 1000);
      }}
    >
      <div
        className="user-dropdown-link"
        onClick={() => {
          registerPageActive.value = false;
          navigate("/account");
        }}
      >
        Account
      </div>
      <div
        className="user-dropdown-link"
        onClick={(e) => {
          e.stopPropagation();
          localStorage.removeItem("accessToken");
          localStorage.removeItem("refreshToken");
          googleLogout();
          currentUser.value = null;
          userDropdownActive.value = false;
          navigate("/");
        }}
      >
        Logout
      </div>
    </div>
  );
};

export default UserDropdownMenu;
