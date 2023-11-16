// Libraries
import { signal } from "@preact/signals-react";
import React from "react";
// Components
import MainPage from "../MainPage";
import Checkout from "../Checkout";
import Register from "../Register";
// Styles
import "./Content.css";

export const pageStates = signal({
  mainPage: true,
  loginPage: false,
  registerPage: false,
  accountPage: false,
  checkoutPage: false,
});

const DisplayBar = () => {
  return (
    <div className="display-bar flex-column gap-10px">
      {Object.entries(pageStates.value).map(([pageName, pageState]) => {
        return (
          <button key={pageName}
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
      {process.env.NODE_ENV === 'development' && <DisplayBar />}
      {(pageStates.value.mainPage && <MainPage />)}
      {(pageStates.value.registerPage || pageStates.value.accountPage) && (
        <Register />
      )}
      {pageStates.value.checkoutPage && <Checkout />}
    </div>
  );
};

export default Content;
