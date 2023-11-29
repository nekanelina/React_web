import { signal } from "@preact/signals-react";
import { useEffect } from "react";

import { currentUser } from "../../../App";

// Images
import { CiEdit } from "react-icons/ci";
import { LiaShippingFastSolid } from "react-icons/lia";
// Styles
import "./Shipping.css";

const nameDisabled = signal(true);
const addressDisabled = signal(true);

const shippingForm = signal({
  email: "",
  name: "",
  phoneNumber: "",
  address: {
    street: "",
    number: "",
    postalCode: "",
    city: "",
    country: "",
  },
});

const Shipping = () => {
  console.log("Render: Shipping");

  useEffect(() => {
    const user = currentUser.value ?? {};

    const address = user.address ?? {};

    shippingForm.value = {
      email: user.email ?? "",
      name: `${user.firstName ?? ""} ${user.lastName ?? ""}`.trim(),
      phoneNumber: user.phoneNumber ?? "",
      address: {
        street: address.street ?? "",
        number: address.number ?? "",
        postalCode: address.postalCode ?? "",
        city: address.city ?? "",
        country: address.country ?? "",
      },
    };
  }, []);

  return (
    <form className="shipping-form">
      <div className="flex gap-10px margin-bottom-10px vertically-center">
        <LiaShippingFastSolid size={30} />
        <h1 className="form-title margin-0">Shipping</h1>
      </div>
      <div className="shipping-form-item">
        <div className="flex-column" style={{ gap: "5px" }}>
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
      <div className="shipping-form-item address-item">
        <div className="flex-column" style={{ gap: "5px" }}>
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
        <div className="flex-column gap-10px margin-top-10px">
          <div className="label-input-wrapper">
            <label
              className="shipping-form-label"
              htmlFor="shipping-form-street"
            >
              Street
            </label>
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
          <div className="label-input-wrapper">
            <label
              className="shipping-form-label"
              htmlFor="shipping-form-number"
            >
              Number
            </label>
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
          </div>
          <div className="label-input-wrapper">
            <label
              className="shipping-form-label"
              htmlFor="shipping-form-postal-code"
            >
              Postal code
            </label>
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
          </div>
          <div className="label-input-wrapper">
            <label className="shipping-form-label" htmlFor="shipping-form-city">
              City
            </label>
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
          </div>
          <div className="label-input-wrapper">
            <label
              className="shipping-form-label"
              htmlFor="shipping-form-country"
            >
              Country
            </label>
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
      </div>
    </form>
  );
};

export default Shipping;
