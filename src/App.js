import React, { useState } from "react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Content } from "./components/Content";
import "./App.css";

function App() {
  const [user, setUser] = useState(null);
  const [showLogin, setShowLogin] = useState(false);

  console.log("Render: App");

  return (
    <div className="App">
      <Header setUser={setUser} user={user} setShowLogin={setShowLogin} />
      <Content
        setUser={setUser}
        showLogin={showLogin}
        setShowLogin={setShowLogin}
      />
      <Footer />
    </div>
  );
}

export default App;
