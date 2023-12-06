// Libs
import { signal } from "@preact/signals-react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
// Utils
import { currentUser } from "../../../App";
import { loginDropdownActive } from "..";
import useLogin from "../../../hooks/useLogin";
// Images
import { FcGoogle } from "react-icons/fc";
import { IoIosClose } from "react-icons/io";
import emailIcon from "../../../images/icons/email.png";
import lockIcon from "../../../images/icons/lock.png";
// Styles
import "./Login.css";

export const loginSuccessMessage = signal("");
export const registerPageActive = signal(false);
export const isLoading = signal(false);
export const loginError = signal("");
export const email = signal("");
export const password = signal("");

const Login = () => {
  const navigate = useNavigate();
  const { login, googleLogin } = useLogin();

  console.log("Render: Login");

  useEffect(() => {
    isLoading.value = false;
    email.value = "";
    password.value = "";
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    loginError.value = "";
    login();
  };

  return (
    <div className="login-form">
      <form method="POST" onSubmit={handleSubmit}>
        <fieldset className="flex-column gap-10px no-border">
          <IoIosClose
            className="login-close-icon"
            onClick={(e) => {
              e.stopPropagation();
              loginDropdownActive.value = false;
            }}
          />
          <label htmlFor="login-email" className="login-form-label">
            Email
          </label>
          <div className="pos-relative">
            <img src={emailIcon} className="email-icon" alt="search" />
            <input
              id="login-email"
              className="form-input-field"
              type="email"
              placeholder="Enter your email"
              value={email.value}
              autoComplete="email"
              onChange={(e) => (email.value = e.target.value)}
              required
            />
          </div>

          <label htmlFor="login-password" className="login-form-label">
            Password
          </label>
          <div className="pos-relative">
            <input
              id="login-password"
              className="form-input-field"
              type="password"
              placeholder="Enter your password"
              value={password.value}
              autoComplete="current-password"
              onChange={(e) => (password.value = e.target.value)}
              required
            />
            <img src={lockIcon} className="lock-icon" alt="search" />
          </div>
          <button
            className="btn margin-top-20px"
            type="submit"
            disabled={isLoading.value}
          >
            Login
          </button>
          <div style={{ margin: "10px auto 10px auto" }}>OR</div>
          <div className="google-login-wrapper" onClick={googleLogin}>
            <div className="google-icon">
              <FcGoogle className="pointer" />
            </div>
            <div className="google-text">
              <p className="margin-0">Login with Google</p>
            </div>
          </div>
          {loginError.value && (
            <p className="login-error">{loginError.value}</p>
          )}
          {loginSuccessMessage.value && (
            <p className="login-success">{loginSuccessMessage.value}</p>
          )}
          <div className="margin-top-20px margin-bottom-10px flex space-between">
            <div className="simple-link">Forgot password?</div>
            {!currentUser.value && (
              <div
                className="simple-link"
                onClick={(e) => {
                  e.stopPropagation();
                  registerPageActive.value = true;
                  loginDropdownActive.value = false;
                  navigate("/register");
                }}
              >
                Register here
              </div>
            )}
          </div>
        </fieldset>
      </form>
    </div>
  );
};

export default Login;
