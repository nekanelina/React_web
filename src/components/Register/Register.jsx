import { signal } from "@preact/signals-react";
import { useEffect, useRef } from "react";
// StateVariables aka Signals
import { pageStates } from "../Content";
import { currentUser } from "../Login";
// Utils
import { hideOnePage, showOnePage } from "../../utils/changePageStates";
// Images
import { BiUserCheck } from "react-icons/bi";
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
  address: {
    street: "",
    number: "",
    postalCode: "",
    city: "",
    country: "",
  },
});

let passwordError = signal("");
let registerError = signal("");

const Register = () => {
  const registerRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    registerError.value = "";
    passwordError.value = "";
    if (validatePassword()) {
      const register = async () => {
        const { email, password, firstName, lastName, phoneNumber } =
          submitForm.value;
        const { street, number, postalCode, city, country } =
          submitForm.value.address;

        const response = await fetch("http://localhost:3000/api/register", {
          method: pageStates.value.registerPage ? "POST" : "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email: email ? email : null,
            password: password ? password : null,
            firstName: firstName ? firstName : null,
            lastName: lastName ? lastName : null,
            phoneNumber: phoneNumber ? phoneNumber : null,
            address: {
              street: street ? street : null,
              number: number ? number : null,
              postalCode: postalCode ? postalCode : null,
              city: city ? city : null,
              country: country ? country : null,
            },
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
      let {
        email = "",
        firstName = "",
        lastName = "",
        phoneNumber = "",
        address = {},
      } = currentUser.value || {};

      submitForm.value = {
        email: email,
        password: "",
        password2: "",
        firstName: firstName,
        lastName: lastName,
        phoneNumber: phoneNumber,
        address: {
          street: address.street || "",
          number: address.number || "",
          postalCode: address.postalCode || "",
          city: address.city || "",
          country: address.country || "",
        },
      };

      registerError.value = "";
      passwordError.value = "";
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (registerRef.current && !registerRef.current.contains(event.target)) {
        pageStates.value = {
          ...pageStates.value,
          registerPage: false,
          accountPage: false,
        };
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="form register-form" ref={registerRef}>
      <div className="flex gap-10px margin-left-10px margin-bottom-10px vertically-center">
        <BiUserCheck size={40} />
        <h1 className="form-title margin-0">
          {currentUser.value ? "Your Account" : "Register"}
        </h1>
      </div>
      <form method="POST" onSubmit={handleSubmit} className="margin-top-30px">
        <fieldset className="flex-column gap-10px no-border">
          <div>
            <label htmlFor="create-form-email" className="block input-label">
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
              className="full-width input-field"
              onChange={(e) =>
                (submitForm.value = {
                  ...submitForm.value,
                  email: e.target.value,
                })
              }
            />
          </div>
          <div className="pos-relative">
            <label htmlFor="create-form-password" className="block input-label">
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
              className="full-width input-field"
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
              className="block input-label"
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
              className="full-width input-field"
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
                className="block input-label"
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
                className="input-field margin-right-20px"
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
                className="block input-label"
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
                className="input-field"
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
                htmlFor="create-form-street-address"
                className="block input-label"
              >
                Street name
              </label>
              <input
                id="create-form-street-address"
                type="text"
                name="streetadress"
                value={submitForm.value.address.street}
                autoComplete="street-address"
                placeholder="Street name"
                required={pageStates.value.registerPage ? true : false}
                className="input-field margin-right-20px"
                onChange={(e) => {
                  submitForm.value = {
                    ...submitForm.value,
                    address: {
                      ...submitForm.value.address,
                      street: e.target.value,
                    },
                  };
                }}
              ></input>
            </div>
            <div>
              <label
                htmlFor="create-form-street-number"
                className="block input-label"
              >
                Street/Appt number
              </label>
              <input
                id="create-form-street-number"
                type="text"
                name="street-number"
                value={submitForm.value.address.number}
                autoComplete="street-address"
                placeholder="Street/Appt number"
                required={pageStates.value.registerPage ? true : false}
                className="input-field"
                onChange={(e) => {
                  submitForm.value = {
                    ...submitForm.value,
                    address: {
                      ...submitForm.value.address,
                      number: e.target.value,
                    },
                  };
                }}
              ></input>
            </div>
          </div>
          <div className="flex space-between">
            <div>
              <label
                htmlFor="create-form-postal-code"
                className="block input-label"
              >
                Postal code
              </label>
              <input
                id="create-form-postal-code"
                type="text"
                name="postal-code"
                value={submitForm.value.address.postalCode}
                autoComplete="postal-code"
                placeholder="Postal code"
                required={pageStates.value.registerPage ? true : false}
                className="input-field margin-right-20px"
                onChange={(e) => {
                  submitForm.value = {
                    ...submitForm.value,
                    address: {
                      ...submitForm.value.address,
                      postalCode: e.target.value,
                    },
                  };
                }}
              ></input>
            </div>
            <div>
              <label htmlFor="create-form-city" className="block input-label">
                City
              </label>
              <input
                id="create-form-city"
                type="text"
                name="street-number"
                value={submitForm.value.address.city}
                autoComplete="address-level2"
                placeholder="City"
                required={pageStates.value.registerPage ? true : false}
                className="input-field"
                onChange={(e) => {
                  submitForm.value = {
                    ...submitForm.value,
                    address: {
                      ...submitForm.value.address,
                      city: e.target.value,
                    },
                  };
                }}
              ></input>
            </div>
          </div>
          <div>
            <label htmlFor="create-form-country" className="block input-label">
              Country
            </label>
            <input
              id="create-form-country"
              type="text"
              name="country"
              value={submitForm.value.address.country}
              autoComplete="country"
              placeholder="Country"
              required={pageStates.value.registerPage ? true : false}
              className="full-width input-field"
              onChange={(e) => {
                submitForm.value = {
                  ...submitForm.value,
                  address: {
                    ...submitForm.value.address,
                    country: e.target.value,
                  },
                };
              }}
            ></input>
          </div>
          <div>
            <label
              htmlFor="create-form-phone-number"
              className="block input-label"
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
              className="full-width input-field"
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
