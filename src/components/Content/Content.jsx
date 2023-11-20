// Libraries
import React from "react";
import { signal } from "@preact/signals-react";
// Components
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
      {(pageStates.value.registerPage || pageStates.value.accountPage) && (
        <Register />
      )}
    </div>
  );
};

export default Content;
