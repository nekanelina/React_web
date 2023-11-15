import { signal } from "@preact/signals-react";
import { useEffect } from "react";
// StateVariables aka Signals
import { pageStates } from "../Content";
import { currentUser } from "../Login";
// Utils
import { hideOnePage, showOnePage } from "../../utils/changePageStates";
// Images
import userIcon from "../../images/icons/user-create-account.svg";
import visibilityOff from "../../images/icons/visibility_off.svg";
import visibilityOn from "../../images/icons/visibility_on.svg";
// Styles
import "./Register.css";

let submitForm = signal({
  email: "",
  password: "",
  password2: "",
  firstName: "",
  lastName: "",
  phoneNumber: "",
  streetAddress: "",
  streetNumber: "",
  postalCode: "",
  city: "",
  country: "",
});

let passwordError = signal("");
let registerError = signal("");

const Register = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    registerError.value = "";
    passwordError.value = "";
    if (validatePassword()) {
      const register = async () => {
        const {
          email,
          password,
          firstName,
          lastName,
          phoneNumber,
          streetAddress,
          streetNumber,
          postalCode,
          city,
          country,
        } = submitForm.value;

        const response = await fetch("http://localhost:3000/api/register", {
          method: pageStates.value.registerPage ? "POST" : "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email: email ? email : null,
            password: password ? password : null,
            firstName: firstName ? firstName : null,
            lastName: lastName ? lastName : null,
            phoneNumber: phoneNumber ? phoneNumber : null,
            streetAddress: streetAddress ? streetAddress : null,
            streetNumber: streetNumber ? streetNumber : null,
            postalCode: postalCode ? postalCode : null,
            city: city ? city : null,
            country: country ? country : null,
          }),
        });
        if (response.ok) {
          hideOnePage("registerPage");
          showOnePage("loginPage");
        } else {
          registerError.value = "Something went wrong. Please try again later.";
        }
      };
      register();
    }
  };

  const validatePassword = () => {
    if (
      pageStates.value.accountPage &&
      (submitForm.value.password.length === 0 ||
        submitForm.value.password2.length === 0)
    ) {
      return true;
    }
    if (
      submitForm.value.password.length < 8 ||
      submitForm.value.password2.length < 8
    ) {
      passwordError.value = "Password must be at least 8 characters long";
      return false;
    } else if (submitForm.value.password !== submitForm.value.password2) {
      passwordError.value = "Passwords must match";
      return false;
    }
    return (
      submitForm.value.password.length >= 8 &&
      submitForm.value.password2.length >= 8 &&
      submitForm.value.password === submitForm.value.password2
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
      submitForm.value = {
        email: "",
        password: "",
        password2: "",
        firstName: "",
        lastName: "",
        phoneNumber: "",
        streetAddress: "",
        streetNumber: "",
        postalCode: "",
        city: "",
        country: "",
      };
      registerError.value = "";
      passwordError.value = "";
    };
  }, []);

  return (
    <div className="register-form">
      <div className="flex gap-10px margin-left-10px margin-bottom-10px">
        <img src={userIcon} alt="user icon" />
        <h1 className="form-title margin-0">
          {currentUser.value ? "Your Account" : "Register"}
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
              value={submitForm.value.email}
              autoComplete="email"
              autoFocus=""
              placeholder={
                currentUser.value ? currentUser.value?.email : "Email address"
              }
              required={pageStates.value.registerPage ? true : false}
              className="full-width register-input-field"
              onChange={(e) =>
                (submitForm.value = {
                  ...submitForm.value,
                  email: e.target.value,
                })
              }
            />
          </div>
          <div className="pos-relative">
            <label
              htmlFor="create-form-password"
              className="block text-wrapper-4"
            >
              {currentUser.value ? "Change password" : "Password"}
            </label>
            <input
              id="create-form-password"
              type="password"
              name="password"
              value={submitForm.value.password}
              autoCapitalize="off"
              placeholder="Password, with at least 8 characters"
              spellCheck="false"
              autoComplete="current-password"
              required=""
              className="full-width register-input-field"
              onChange={(e) =>
                (submitForm.value = {
                  ...submitForm.value,
                  password: e.target.value,
                })
              }
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
              value={submitForm.value.password2}
              autoCapitalize="off"
              placeholder="Password, with at least 8 characters"
              spellCheck="false"
              autoComplete="current-password"
              required=""
              className="full-width register-input-field"
              onChange={(e) =>
                (submitForm.value = {
                  ...submitForm.value,
                  password2: e.target.value,
                })
              }
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
                value={submitForm.value.firstName}
                autoComplete="given-name"
                placeholder={
                  currentUser.value
                    ? currentUser.value?.firstName
                    : "First name"
                }
                required={pageStates.value.registerPage ? true : false}
                className="register-input-field margin-right-20px"
                onChange={(e) =>
                  (submitForm.value = {
                    ...submitForm.value,
                    firstName: e.target.value,
                  })
                }
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
                value={submitForm.value.lastName}
                autoComplete="given-name"
                placeholder={
                  currentUser.value ? currentUser.value?.lastName : "Last name"
                }
                required={pageStates.value.registerPage ? true : false}
                className="register-input-field"
                onChange={(e) =>
                  (submitForm.value = {
                    ...submitForm.value,
                    lastName: e.target.value,
                  })
                }
              ></input>
            </div>
          </div>
          <div className="flex space-between">
            <div>
              <label
                htmlFor="create-form-streed-address"
                className="block text-wrapper-4"
              >
                Street name
              </label>
              <input
                id="create-form-streed-address"
                type="text"
                name="streetadress"
                value={submitForm.value.streetAddress}
                autoComplete="street-address"
                placeholder={
                  currentUser.value
                    ? currentUser.value?.address?.street
                    : "Street name"
                }
                required={pageStates.value.registerPage ? true : false}
                className="register-input-field margin-right-20px"
                onChange={(e) =>
                  (submitForm.value = {
                    ...submitForm.value,
                    streetAddress: e.target.value,
                  })
                }
              ></input>
            </div>
            <div>
              <label
                htmlFor="create-form-street-number"
                className="block text-wrapper-4"
              >
                Street/Appt number
              </label>
              <input
                id="create-form-street-number"
                type="text"
                name="street-number"
                value={submitForm.value.streetNumber}
                autoComplete="street-address"
                placeholder={
                  currentUser.value
                    ? currentUser.value?.address?.number
                    : "Street/Appt number"
                }
                required={pageStates.value.registerPage ? true : false}
                className="register-input-field"
                onChange={(e) =>
                  (submitForm.value = {
                    ...submitForm.value,
                    streetNumber: e.target.value,
                  })
                }
              ></input>
            </div>
          </div>
          <div className="flex space-between">
            <div>
              <label
                htmlFor="create-form-postal-code"
                className="block text-wrapper-4"
              >
                Postal code
              </label>
              <input
                id="create-form-postal-code"
                type="text"
                name="postal-code"
                value={submitForm.value.postalCode}
                autoComplete="postal-code"
                placeholder={
                  currentUser.value
                    ? currentUser.value?.address?.postalCode
                    : "Postal code"
                }
                required={pageStates.value.registerPage ? true : false}
                className="register-input-field margin-right-20px"
                onChange={(e) =>
                  (submitForm.value = {
                    ...submitForm.value,
                    postalCode: e.target.value,
                  })
                }
              ></input>
            </div>
            <div>
              <label
                htmlFor="create-form-city"
                className="block text-wrapper-4"
              >
                City
              </label>
              <input
                id="create-form-city"
                type="text"
                name="street-number"
                value={submitForm.value.city}
                autoComplete="address-level2"
                placeholder={
                  currentUser.value ? currentUser.value?.address?.city : "City"
                }
                required={pageStates.value.registerPage ? true : false}
                className="register-input-field"
                onChange={(e) =>
                  (submitForm.value = {
                    ...submitForm.value,
                    city: e.target.value,
                  })
                }
              ></input>
            </div>
          </div>
          <div>
            <label
              htmlFor="create-form-country"
              className="block text-wrapper-4"
            >
              Country
            </label>
            <input
              id="create-form-country"
              type="text"
              name="country"
              value={submitForm.value.country}
              autoComplete="country"
              placeholder={
                currentUser.value
                  ? currentUser.value?.address?.country
                  : "Country"
              }
              required={pageStates.value.registerPage ? true : false}
              className="full-width register-input-field"
              onChange={(e) =>
                (submitForm.value = {
                  ...submitForm.value,
                  country: e.target.value,
                })
              }
            ></input>
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
              value={submitForm.value.phoneNumber}
              autoComplete="tel mobile"
              placeholder={
                currentUser.value
                  ? currentUser.value?.phoneNumber
                  : "Phone number"
              }
              required={pageStates.value.registerPage ? true : false}
              className="full-width register-input-field"
              onChange={(e) =>
                (submitForm.value = {
                  ...submitForm.value,
                  phoneNumber: e.target.value,
                })
              }
            ></input>
          </div>
          <p className="error">{registerError}</p>
          <button id="create-account-button" type="submit" className="btn">
            {currentUser.value ? "Save changes" : "Create account"}
          </button>
        </fieldset>
      </form>
    </div>
  );
};

export default Register;
