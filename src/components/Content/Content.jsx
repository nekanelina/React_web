// Libraries
import { signal } from "@preact/signals-react";
import React from "react";
// Components
import MainPage from "../MainPage";
import Checkout from "../Checkout";
import Register from "../Register";
import Sale from "../SalePage"
// Styles
import "./Content.css";

export const pageStates = signal({
  mainPage: true,
  loginPage: false,
  registerPage: false,
  accountPage: false,
  checkoutPage: false,
  salePage: false,
});

const DisplayBar = () => {
  return (
    <div className="display-bar flex-column gap-10px">
      {Object.entries(pageStates.value).map(([pageName, pageState]) => {
        return (
          <button
            style={{ backgroundColor: pageState ? "red" : "green" }}
            className="btn"
            onClick={() =>
              (pageStates.value = {
                ...pageStates.value,
                [pageName]: !pageState,
              })
            }
          >
            {pageName}
          </button>
        );
      })}
    </div>
  );
};

const Content = () => {
  console.log("Render: Content");

  return (
    <div className="content">
      <DisplayBar />
      {(pageStates.value.mainPage && <MainPage />)}
      {(pageStates.value.registerPage || pageStates.value.accountPage) && (
        <Register />
      )}
      {pageStates.value.checkoutPage && <Checkout />}
      {pageStates.value.salePage && <Sale />}
    </div>
  );
};

export default Content;
