import React, { useEffect, useCallback } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Content from "./components/Content";
import Footer from "./components/Footer";
import { currentUser } from "./components/Content";
import { showOnlyOnePage } from "./components/Content";
import "./App.css";
import "./css/style.css";
import "./css/styleguide.css";

function App() {
  console.log("Render: App");

  // Authenticate user with access token
  const authenticate = useCallback(async (accessToken) => {
    try {
      const response = await fetch(
        "http://localhost:4000/api/user/authenticate",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      // If access token is invalid, refresh token
      if (response.status === 403) {
        const { user, accessToken } = await refreshToken(
          localStorage.getItem("refreshToken")
        );
        currentUser.value = user;
        localStorage.setItem("accessToken", accessToken);
        showOnlyOnePage("mainPage");
        return;
      }

      const json = await response.json();
      if (response.ok) {
        currentUser.value = json.user;
        showOnlyOnePage("mainPage");
        return;
      }
    } catch (error) {
      console.log(error);
    }
  }, []);

  const refreshToken = async (refreshToken) => {
    try {
      const response = await fetch("http://localhost:4000/api/user/token", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ refreshToken: refreshToken }),
      });

      const json = await response.json();

      if (response.stats === 403) {
        console.log("refresh token expired");
        return;
      }

      if (response.ok) {
        return json;
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      authenticate(accessToken);
    }
  }, [authenticate]);

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <NavBar />
        <Content />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
