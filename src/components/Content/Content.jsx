// Libraries
import React from "react";
import { signal } from "@preact/signals-react";
// Components
import Login from "../Login";
import Register from "../Register";
// Styles
import "./Content.css";

export const pageStates = signal({
  showLoginPage: false,
  showRegisterPage: false,
  showAccountPage: false,
});

const Content = () => {
  console.log("Render: Content");

  return (
    <div className="content">
      {pageStates.value.showLoginPage && <Login />}
      {(pageStates.value.showRegisterPage || pageStates.value.showAccountPage) && <Register />}
    </div>
  );
};

export default Content;
