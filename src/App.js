import React from "react";
import Content from "./components/Content";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import MostPopular from "./components/MostPopular";
import "./css/style.css";
import "./css/styleguide.css";

function App() {
  console.log("Render: App");

  return (
    <div className="App">
      <Header />
      <NavBar />
      <MostPopular />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
