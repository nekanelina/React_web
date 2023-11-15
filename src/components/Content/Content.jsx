// Libraries
import { signal } from "@preact/signals-react";
import React from "react";
// Components
import MenuMain from "../MenuMain";
import SaleContainer from "../SaleContainer";
import MostPopular from "../MostPopular";
import Checkout from "../Checkout";
import Register from "../Register";
// Styles
import "./Content.css";

export const pageStates = signal({
  loginPage: false,
  registerPage: false,
  accountPage: false,
});

const Content = () => {
  console.log("Render: Content");

  return (
    <div className="content">
      <MenuMain />
      <SaleContainer />
      <MostPopular />
      {(pageStates.value.registerPage || pageStates.value.accountPage) && (
        <Register />
      )}
      <Checkout />
    </div>
  );
};

export default Content;
