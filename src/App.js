import React from "react";
import {Content} from "./components/ContentStartVersion";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import "./css/style.css";
import "./css/styleguide.css";

function App() {
  console.log("Render: App");

  return (
    <div className="App">
      <Header />
      <NavBar />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
