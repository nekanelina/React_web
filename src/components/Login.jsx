import { useState } from "react";
import "../css/login.css";
import lockIcon from "../img/headerImg/lock.png";
import emailIcon from "../img/headerImg/email.png";
import { userData } from "../data";

export const Login = ({ setUser, setShowLogin }) => {
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  console.log("Render: Login");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setUser(userData);
    setShowLogin(false);
    // This is the actual server call
    // const login = async () => {
    //   const response = await fetch("http://localhost:3000/login", {
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
    //     setShowLogin(false);
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
    <form className="form">
      <h4 className="login-title underlined">Login</h4>
      {error && <div className="login-error">{error}</div>}
      <div className="form-input">
        <label htmlFor="login-email" className="form-label">Email</label>
        <input
          id="login-email"
          className="form-input-field"
          type="text"
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
          type="email"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        /> 
        <img src={lockIcon} className="search-icon" alt="search" />
      </div>
      <div className="login-button-wrapper">
        <button type="submit" onClick={handleSubmit} id="login-button">
          Login
        </button>
      </div>
      <div className="login-bottom-wrapper flex">
        <a id="login-forgot-password" href="#">
          Forgot password?
        </a>
        <a id="login-forgot-password" href="#">
          No account? Register here
        </a>
      </div>
    </form>
  );
};
