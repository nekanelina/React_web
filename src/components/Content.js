import React from "react";
import { Login } from "./Login";
import "../css/content.css";

export const Content = ({ setUser, showLogin, setShowLogin }) => {
  console.log('Render: Content');
  return (
    <div className="content">
      {showLogin && <Login setUser={setUser} setShowLogin={setShowLogin} />}
    </div>
  );
};
