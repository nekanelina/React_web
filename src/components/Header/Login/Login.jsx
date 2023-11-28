// Libs
import { signal } from "@preact/signals-react";
import { useEffect } from "react";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// Utils
import { currentUser } from "../../Content";
import { loginDropdownActive } from "..";
// Images
import { FcGoogle } from "react-icons/fc";
import { IoIosClose } from "react-icons/io";
import emailIcon from "../../../images/icons/email.png";
import lockIcon from "../../../images/icons/lock.png";
// Styles
import "./Login.css";

export const loginSuccessMessage = signal("");
export const registerPageActive = signal(false);
const isLoading = signal(false);
export const loginError = signal("");
const email = signal("");
const password = signal("");

const Login = () => {
  const navigate = useNavigate();

  console.log("Render: Login");

  useEffect(() => {
    isLoading.value = false;
    email.value = "";
    password.value = "";
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    loginError.value = "";

    const login = async () => {
      try {
        const response = await fetch("http://localhost:4000/api/user/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email: email.value,
            password: password.value,
          }),
        });

        const json = await response.json();

        if (response.status === 401) {
          loginError.value = json.message;
          isLoading.value = false;
          return;
        }

        if (response.status === 400) {
          loginError.value = json.message;
          isLoading.value = false;
          return;
        }

        if (response.status === 404) {
          loginError.value = json.message;
          isLoading.value = false;
          return;
        }
        if (response.ok) {
          currentUser.value = json.user;
          localStorage.setItem("accessToken", json.accessToken);
          localStorage.setItem("refreshToken", json.refreshToken);
          email.value = "";
          password.value = "";
          loginDropdownActive.value = false;
          navigate("/");
        }
      } catch (error) {
        loginError.value = "⚠ Something went wrong. Please try again later.";
      }
    };
    isLoading.value = false;

    login();
  };

  const googleLogin = useGoogleLogin({
    onSuccess: async (response) => {
      try {
        const res = await axios.get(
          "https://www.googleapis.com/oauth2/v3/userinfo",
          {
            headers: {
              Authorization: `Bearer ${response.access_token}`,
            },
          }
        );
        currentUser.value = {
          firstName: res.data.given_name,
          lastName: res.data.family_name,
          email: res.data.email,
          picture: res.data.picture,
          googleLogin: true,
        };
        email.value = "";
        password.value = "";
        loginDropdownActive.value = false;
        navigate("/");
      } catch (error) {
        loginError.value = "⚠ Error login with Google";
      }
    },
  });

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
