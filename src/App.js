import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { signal } from "@preact/signals-react";
import useAuthentication from "./hooks/useAuthentication";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import ProductPage from "./components/ProductPage";
import Sale from "./components/SalePage";
import EVcharges from "./components/EVcharges";
import SolarPanels from "./components/SolarPanels";
import EnergyStorage from "./components/EnergyStorageSolutions/EnergyStorage";
import EnergyEfficient from "./components/EnergyEfficientAppliances/EnergyEfficient";
import WindTurbines from "./components/WindTurbines/WindTurbines";
import Inverters from "./components/Inverters/Inverters";
import Register from "./components/Register";
import MainPage from "./components/MainPage";
import Checkout from "./components/Checkout";
import Orders from "./components/Orders";
import useProducts from "./hooks/useProducts";
import "./App.css";
import "./css/style.css";
import "./css/styleguide.css";

export const currentUser = signal(null);
export const isAuthenticated = signal(false);

function App() {
  const { authenticate } = useAuthentication();
  const { productsData, getAllProducts } = useProducts();

  useEffect(() => {
    isAuthenticated.value = false;
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      authenticate(accessToken);
    }
  }, [authenticate]);

  useEffect(() => {
    const fetchProducts = async () => {
      productsData.value = await getAllProducts();
    };

    fetchProducts();
  }, [getAllProducts, productsData]);

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <NavBar />
        <Routes>
          <Route path="/sale" element={<Sale />} />
          <Route path="/" element={<MainPage />} />
          <Route path="/ev-charges" element={<EVcharges />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/solar-panels" element={<SolarPanels />} />
          <Route path="/:productId" element={<ProductPage />} />
          <Route path="/energy-storage-solutions" element={<EnergyStorage />} />
          <Route
            path="/energy-efficient-appliances"
            element={<EnergyEfficient />}
          />
          <Route path="/wind-turbines" element={<WindTurbines />} />
          <Route path="/inverters" element={<Inverters />} />
          <Route path="/register" element={<Register />} />
          <Route path="/account" element={<Register />} />
          <Route path="/orders" element={<Orders />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
