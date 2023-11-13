// Libs
import { signal } from "@preact/signals-react";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
// Utils
import changePageState from "../../utils/changePageState";
// StateVariables aka Signals
import { pageStates } from "../Content";
// Images
import emailIcon from "../../images/icons/email.png";
import lockIcon from "../../images/icons/lock.png";
import loginIcon from "../../images/icons/login.svg";
import { FcGoogle } from "react-icons/fc";
// Mock data
import { userData } from "../../models/data";
// Styles
import "./Login.css";

export let currentUser = signal(null);
const loginError = signal("");
const email = signal("");
const password = signal("");

const Login = () => {
  console.log("Render: Login");

  const handleSubmit = (e) => {
    e.preventDefault();
    loginError.value = "";
    email.value = "";
    password.value = "";
    currentUser.value = userData;
    // This is the actual server call
    // const login = async () => {
    //   const response = await fetch("http://localhost:3000/api/login", {
    //     method: "POST",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify({
    //       email: email.value,
    //       password: password.value,
    //     }),
    //   });
    //   if (response.ok) {
    //     // Parse the response as JSON
    //     email.value = "";
    //     password.value = "";
    //     const user = await response.json();
    //     setUser(user);
    //   } else {
    //     if (response.status === 401) {
    //       // Unauthorized
    //       loginError.value = "⚠ Invalid email or password";
    //     } else {
    //       loginError.value = "⚠ Something went wrong. Please try again later.";
    //     }
    //   }
    // };
    // login();
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
          firstName : res.data.given_name,
          lastName : res.data.family_name,
          email : res.data.email,
          picture : res.data.picture,
          googleLogin: true,
        };
      } catch (error) {
        loginError.value = "⚠ Error login with Google";
      }
    },
  });

  return (
    <div className="login-form">
      <div className="flex gap-10px margin-left-10px margin-bottom-10px">
        <img src={loginIcon} alt="login-back" />
        <h1 className="form-title">Login</h1>
      </div>
      <form method="POST" onSubmit={handleSubmit}>
        <fieldset className="flex-column gap-10px no-border">
          <div className="pos-relative">
            <label htmlFor="login-email" className="block text-wrapper-4">
              Email
            </label>
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
            <img src={emailIcon} className="email-icon" alt="search" />
          </div>
          <div className="pos-relative">
            <label htmlFor="login-password" className="block text-wrapper-4">
              Password
            </label>
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
          >
            Login
          </button>
          <div style={{margin: "10px auto 10px auto"}}>OR</div>
          <div
            className="google-login-wrapper"
            onClick={googleLogin}
          >
            <div className="google-icon">
              <FcGoogle className="pointer" />
            </div>
            <div className="google-text">
              <p className="margin-0">Login with Google</p>
            </div>
          </div>
          <p className="error">{loginError}</p>
          <div className="margin-top-20px flex space-between">
            <button type="button" className="simple-link no-bg no-border">
              Forgot password?
            </button>
            <button
              type="button"
              className="simple-link no-bg no-border"
              onClick={() =>
                (pageStates.value = changePageState("showRegisterPage"))
              }
            >
              No account? Register here
            </button>
          </div>
        </fieldset>
      </form>
    </div>
  );
};

export default Login;
