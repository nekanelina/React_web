// Libs
import { signal } from "@preact/signals-react";
import { useState } from "react";
// StateVariables aka Signals
import { showLoginPage } from "../Header";
// Images
import emailIcon from "../../images/headerImg/email.png";
import lockIcon from "../../images/headerImg/lock.png";
// Mock data
import { userData } from "../../models/data";
// Styles
import "./Login.css";

export let currentUser = signal(null);

const Login = () => {
  console.log("Render: Login");
  
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    currentUser.value = userData;
    showLoginPage.value = false;
    // This is the actual server call
    // const login = async () => {
    //   const response = await fetch("http://localhost:3000/api/login", {
    //     method: "POST",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify({
    //       email: email,
    //       password: password,
    //     }),
    //   });
    //   if (response.ok) {
    //     // Parse the response as JSON
    //     const user = await response.json();
    //     setUser(user);
    //     showLoginPage.value = false;
    //   } else {
    //     if (response.status === 401) {
    //       // Unauthorized
    //       setError("Invalid email or password");
    //     } else {
    //       setError("Something went wrong. Please try again later.");
    //     }
    //   }
    // };
    // login();
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h4 className="login-title underlined">Login</h4>
      {error && <div className="login-error">{error}</div>}
      <div className="form-input">
        <label htmlFor="login-email" className="form-label">
          Email
        </label>
        <input
          id="login-email"
          className="form-input-field"
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <img src={emailIcon} className="search-icon" alt="search" />
      </div>
      <div className="form-input">
        <label htmlFor="login-password" className="form-label">
          Password
        </label>
        <input
          id="login-password"
          className="form-input-field"
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <img src={lockIcon} className="search-icon" alt="search" />
      </div>
      <div className="login-button-wrapper">
        <button id="login-button" className="link" type="submit">
          Login
        </button>
      </div>
      <div className="login-bottom-wrapper flex">
        <button id="login-forgot-password" className="no-border-5-padding">
          Forgot password?
        </button>
        <button id="login-forgot-password" className="no-border-5-padding">
          No account? Register here
        </button>
      </div>
    </form>
  );
};

export default Login;
