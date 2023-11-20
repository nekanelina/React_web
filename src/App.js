import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Content from "./components/Content";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import "./css/style.css";
import "./css/styleguide.css";

function App() {
  console.log("Render: App");

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
