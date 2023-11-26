import React, { useEffect, useCallback } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Sale from "./components/SalePage";
import EVcharges from "./components/EVcharges";
import { currentUser } from "./components/Content";
import { showOnlyOnePage } from "./components/Content";
import "./App.css";
import "./css/style.css";
import "./css/styleguide.css";
import MainPage from "./components/MainPage";
import Shopping from "./components/Shopping";
import Checkout from "./components/Checkout";
import PaymentMethod from "./components/PaymentMethod/PaymentMethod";

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
        <Routes>
          <Route path="/sale" element={<Sale />} />
          <Route path="/" element={< MainPage/>} />
          <Route path="/test" element={<Content />} />
          <Route path="/ev-charges" element={<EVcharges />} />
          <Route path="/shopping" element={<Shopping />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/payment-method" element={<PaymentMethod />} />
        </Routes> 
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
