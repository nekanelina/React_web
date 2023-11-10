// Libraries
import React from "react";
// StateVariables aka Signals
import { showLoginPage } from "../Header";
// Components
import Login from "../Login";
// Styles
import "./Content.css";

const Content = () => {
  console.log("Render: Content");
  return (
    <div className="content">
      {showLoginPage.value && <Login />}
    </div>
  );
};

export default Content;
