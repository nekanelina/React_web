import { useEffect } from "react";
import { signal } from "@preact/signals-react";
// StateVariables aka Signals
import { pageStates } from "../Content";
import { currentUser } from "../Login";
// Utils
import changePageState from "../../utils/changePageState";
// Images
import userIcon from "../../images/icons/user-create-account.svg";
import chevronLeft from "../../images/icons/chevron-left.svg";
import visibilityOn from "../../images/icons/visibility_on.svg";
import visibilityOff from "../../images/icons/visibility_off.svg";
// Styles
import "./Register.css";

let email = signal("");
let password = signal("");
let password2 = signal("");
let firstName = signal("");
let lastName = signal("");
let phoneNumber = signal("");
let passwordError = signal("");
let registerError = signal("");

const Register = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    registerError.value = "";
    passwordError.value = "";
    if (validatePassword()) {
      const register = async () => {
        const response = await fetch("http://localhost:3000/api/register", {
          method: pageStates.value.showRegisterPage ? "POST" : "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email: email ? email : null,
            password: password ? password : null,
            firstName: firstName ? firstName : null,
            lastName: lastName ? lastName : null,
            phoneNumber: phoneNumber ? phoneNumber : null,
          }),
        });
        if (response.ok) {
        } else {
          registerError.value = "Something went wrong. Please try again later.";
        }
      };
      register();
    }
  };

  const validatePassword = () => {
    if (
      pageStates.value.showAccountPage &&
      (password.value.length === 0 || password2.value.length === 0)
    ) {
      return true;
    }
    if (password.value.length < 8 || password2.value.length < 8) {
      passwordError.value = "Password must be at least 8 characters long";
      return false;
    } else if (password.value !== password2.value) {
      passwordError.value = "Passwords must match";
      return false;
    }
    return (
      password.value.length >= 8 &&
      password2.value.length >= 8 &&
      password.value === password2.value
    );
  };

  const togglePasswordVisibility = () => {
    const passwordInput = document.getElementById("create-form-password");
    const passwordInput2 = document.getElementById("create-form-password2");
    const visibilityIcon = document.querySelector(".visibility-icon");
    if (passwordInput.type === "password") {
      passwordInput.type = "text";
      passwordInput2.type = "text";
      visibilityIcon.src = visibilityOff;
    } else {
      passwordInput.type = "password";
      passwordInput2.type = "password";
      visibilityIcon.src = visibilityOn;
    }
  };

  useEffect(() => {
    return () => {
      email.value = "";
      password.value = "";
      password2.value = "";
      firstName.value = "";
      lastName.value = "";
      phoneNumber.value = "";
      passwordError.value = "";
      registerError.value = "";
    };
  }, []);

  return (
    <div className="register-form">
      {pageStates.value.showRegisterPage && (
        <div className="flex">
          <img src={chevronLeft} alt="back" className="back-icon" />
          <p
            className="link back-to-login"
            onClick={() => {
              pageStates.value = changePageState("showLoginPage");
            }}
          >
            back to login
          </p>
        </div>
      )}
      <div className="flex gap-10px margin-left-10px margin-bottom-10px">
        <img src={userIcon} alt="user icon" />
        <h1 className="form-title margin-0">
          {pageStates.value.showRegisterPage ? "Register" : "Your Account"}
        </h1>
      </div>
      <form method="POST" onSubmit={handleSubmit}>
        <fieldset className="flex-column gap-10px no-border">
          <div>
            <label htmlFor="create-form-email" className="block text-wrapper-4">
              Your email address
            </label>
            <input
              id="create-form-email"
              type="email"
              name="email"
              value={email}
              autoComplete="email"
              autoFocus=""
              placeholder={
                pageStates.value.showRegisterPage
                  ? "Email address"
                  : currentUser.value?.email
              }
              required={pageStates.value.showRegisterPage ? true : false}
              className="full-width register-input-field"
              onChange={(e) => (email.value = e.target.value)}
            />
          </div>
          <div className="pos-relative">
            <label
              htmlFor="create-form-password"
              className="block text-wrapper-4"
            >
              {pageStates.value.showRegisterPage ? "Password" : "New password"}
            </label>
            <input
              id="create-form-password"
              type="password"
              name="password"
              value={password.value}
              autoCapitalize="off"
              placeholder="Password, with at least 8 characters"
              spellCheck="false"
              autoComplete="current-password"
              required=""
              className="full-width register-input-field"
              onChange={(e) => (password.value = e.target.value)}
            ></input>
            <img
              src={visibilityOn}
              alt="back"
              className="visibility-icon"
              onClick={togglePasswordVisibility}
            />
          </div>
          <div className="pos-relative">
            <label
              htmlFor="create-form-password2"
              className="block text-wrapper-4"
            >
              Confirm password
            </label>
            <input
              id="create-form-password2"
              type="password"
              name="password2"
              value={password2.value}
              autoCapitalize="off"
              placeholder="Password, with at least 8 characters"
              spellCheck="false"
              autoComplete="current-password"
              required=""
              className="full-width register-input-field"
              onChange={(e) => (password2.value = e.target.value)}
            ></input>
            <p className="error">{passwordError}</p>
          </div>
          <div className="flex space-between">
            <div>
              <label
                htmlFor="create-form-first-name"
                className="block text-wrapper-4"
              >
                First name
              </label>
              <input
                id="create-form-first-name"
                type="text"
                name="firstname"
                value={firstName.value}
                autoComplete="given-name"
                placeholder={
                  pageStates.value.showRegisterPage
                    ? "First name"
                    : currentUser.value?.firstName
                }
                required={pageStates.value.showRegisterPage ? true : false}
                className="register-input-field margin-right-20px"
                onChange={(e) => (firstName.value = e.target.value)}
              ></input>
            </div>
            <div>
              <label
                htmlFor="create-form-last-name"
                className="block text-wrapper-4"
              >
                Last name
              </label>
              <input
                id="create-form-last-name"
                type="text"
                name="firstname"
                value={lastName.value}
                autoComplete="given-name"
                placeholder={
                  pageStates.value.showRegisterPage
                    ? "Last name"
                    : currentUser.value?.lastName
                }
                required={pageStates.value.showRegisterPage ? true : false}
                className="register-input-field"
                onChange={(e) => (lastName.value = e.target.value)}
              ></input>
            </div>
          </div>
          <div>
            <label
              htmlFor="create-form-phone-number"
              className="block text-wrapper-4"
            >
              Phone number
            </label>
            <input
              id="create-form-phone-number"
              type="tel"
              name="phone-number"
              value={phoneNumber.value}
              autoComplete="tel mobile"
              placeholder={
                pageStates.value.showRegisterPage
                  ? "Phone number"
                  : currentUser.value?.phoneNumber
              }
              required={pageStates.value.showRegisterPage ? true : false}
              className="full-width register-input-field"
              onChange={(e) => (phoneNumber.value = e.target.value)}
            ></input>
          </div>
          <p className="error">{registerError}</p>
          <button id="create-account-button" type="submit" className="btn">
            {pageStates.value.showRegisterPage
              ? "Create account"
              : "Save changes"}
          </button>
        </fieldset>
      </form>
    </div>
  );
};

export default Register;
