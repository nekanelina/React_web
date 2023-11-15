import { signal } from "@preact/signals-react";

import { currentUser } from "../../Login";
// Images
import { CiEdit } from "react-icons/ci";
import { LiaShippingFastSolid } from "react-icons/lia";
// Styles
import "./Shipping.css";

let {
  email = "",
  firstName = "",
  lastName = "",
  phoneNumber = "",
  address = {},
} = currentUser.value || {};

let shippingForm = signal({
  email: email,
  name: firstName + " " + lastName,
  phoneNumber: phoneNumber,
  address: {
    street: address.street || "",
    number: address.number || "",
    postalCode: address.postalCode || "",
    city: address.city || "",
    country: address.country || "",
  },
});

let nameDisabled = signal(true);
let addressDisabled = signal(true);

const Shipping = () => {
  return (
    <form className="shipping-form text-wrapper-4">
      <div className="flex gap-10px margin-bottom-10px vertically-center">
        <LiaShippingFastSolid size={30} />
        <h1 className="form-title margin-0">Shipping</h1>
      </div>
      <div className="shipping-form-item vertical-flex-start margin-top-30px">
        <div className="flex-column gap-10px">
          <h2 className="shipping-form-item-title">Contact</h2>
          <CiEdit
            size={25}
            onClick={() => (nameDisabled.value = !nameDisabled.value)}
            style={{
              color: nameDisabled.value ? "red" : "black",
              cursor: "pointer",
            }}
          />
        </div>
        <input
          id="shipping-form-name"
          type="name"
          autoComplete="name"
          value={shippingForm.value.name}
          required
          disabled={nameDisabled.value}
          style={{ marginLeft: "105px" }}
          className={
            nameDisabled.value
              ? "input-disabled shipping-input-field"
              : "input-active shipping-input-field"
          }
          onChange={(e) =>
            (shippingForm.value = {
              ...shippingForm.value,
              name: e.target.value,
            })
          }
        />
      </div>
      <div className="shipping-form-item">
        <div className="flex-column gap-10px">
          <h2 className="shipping-form-item-title">Address</h2>
          <CiEdit
            size={25}
            onClick={() => (addressDisabled.value = !addressDisabled.value)}
            style={{
              color: addressDisabled.value ? "red" : "black",
              cursor: "pointer",
            }}
          />
        </div>
        <div className="flex-column" style={{ gap: "15px", marginTop: "5px" }}>
          <label className="italic-bold" htmlFor="shipping-form-street">
            Street
          </label>
          <label className="italic-bold" htmlFor="shipping-form-number">
            Number
          </label>
          <label
            className="italic-bold"
            htmlFor="shipping-form-postal-code"
          >
            Postal code
          </label>
          <label className="italic-bold" htmlFor="shipping-form-city">
            City
          </label>
          <label
            className="italic-bold"
            htmlFor="shipping-form-country"
          >
            Country
          </label>
        </div>
        <div className="flex-column gap-10px" style={{ marginTop: "5px" }}>
          <div className="flex gap-10px">
            <input
              id="shipping-form-street"
              type="address"
              autoComplete="address"
              value={shippingForm.value.address.street}
              required
              disabled={addressDisabled.value}
              className={
                addressDisabled.value
                  ? "input-disabled shipping-input-field"
                  : "input-active shipping-input-field"
              }
              onChange={(e) =>
                (shippingForm.value = {
                  ...shippingForm.value,
                  address: {
                    ...shippingForm.value.address,
                    street: e.target.value,
                  },
                })
              }
            />
          </div>
          <input
            id="shipping-form-number"
            type="text"
            value={shippingForm.value.address.number}
            disabled={addressDisabled.value}
            className={
              addressDisabled.value
                ? "input-disabled shipping-input-field"
                : "input-active shipping-input-field"
            }
            onChange={(e) =>
              (shippingForm.value = {
                ...shippingForm.value,
                address: {
                  ...shippingForm.value.address,
                  number: e.target.value,
                },
              })
            }
          />

          <input
            id="shipping-form-postal-code"
            type="text"
            value={shippingForm.value.address.postalCode}
            disabled={addressDisabled.value}
            className={
              addressDisabled.value
                ? "input-disabled shipping-input-field"
                : "input-active shipping-input-field"
            }
            onChange={(e) =>
              (shippingForm.value = {
                ...shippingForm.value,
                address: {
                  ...shippingForm.value.address,
                  postalCode: e.target.value,
                },
              })
            }
          />

          <input
            id="shipping-form-city"
            type="text"
            value={shippingForm.value.address.city}
            disabled={addressDisabled.value}
            className={
              addressDisabled.value
                ? "input-disabled shipping-input-field"
                : "input-active shipping-input-field"
            }
            onChange={(e) =>
              (shippingForm.value = {
                ...shippingForm.value,
                address: {
                  ...shippingForm.value.address,
                  city: e.target.value,
                },
              })
            }
          />

          <input
            id="shipping-form-country"
            type="text"
            value={shippingForm.value.address.country}
            disabled={addressDisabled.value}
            className={
              addressDisabled.value
                ? "input-disabled shipping-input-field"
                : "input-active shipping-input-field"
            }
            onChange={(e) =>
              (shippingForm.value = {
                ...shippingForm.value,
                address: {
                  ...shippingForm.value.address,
                  country: e.target.value,
                },
              })
            }
          />
        </div>
      </div>
    </form>
  );
};

export default Shipping;
