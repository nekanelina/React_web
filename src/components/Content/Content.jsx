// Libraries
import { signal } from "@preact/signals-react";
import { useState, useEffect } from "react";
// Components
import MainPage from "../MainPage";
import Checkout from "../Checkout";
import Register from "../Register";
import CategoryDropdownMenu from "../Header/CategoryDropdownMenu";
import Sale from "../SalePage";
import Shopping from "../Shopping";
import PaymentMethod from "../PaymentMethod/PaymentMethod";
// Styles
import "./Content.css";

export const pageStates = signal({
  mainPage: false,
  loginPage: false,
  registerPage: false,
  accountPage: false,
  checkoutPage: false,
  salePage: false,
  shoppingPage: false,
  PaymentMethod: false,
});

export const showOnePage = (pageToShow) => {
  pageStates.value = { ...pageStates.value, [pageToShow]: true };
};

export const hideOnePage = (pageToHide) => {
  pageStates.value = { ...pageStates.value, [pageToHide]: false };
};

export const showOnlyOnePage = (pageToShow) => {
  const resetState = {
    loginPage: false,
    registerPage: false,
    accountPage: false,
    checkoutPage: false,
  };
  pageStates.value = {
    ...resetState,
    [pageToShow]: true,
  };
};

export const currentUser = signal(null);

const DisplayBar = () => {
  return (
    <div className="display-bar flex-column gap-10px">
      {Object.entries(pageStates.value).map(([pageName, pageState]) => {
        return (
          <button
            key={pageName}
            style={{ backgroundColor: pageState ? "red" : "green" }}
            className="btn"
            onClick={() =>
              (pageStates.value = {
                ...pageStates.value,
                [pageName]: !pageState,
              })
            }
          >
            {pageName}
          </button>
        );
      })}
    </div>
  );
};

const Content = () => {
  console.log("Render: Content");

  const [isMobile, setIsMobile] = useState(window.innerWidth < 769);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 769);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="content">
      {isMobile && <CategoryDropdownMenu />}
      <DisplayBar />
      {pageStates.value.mainPage && <MainPage />}
      {(pageStates.value.registerPage || pageStates.value.accountPage) && (
        <Register />
      )}
      {pageStates.value.checkoutPage && <Checkout />}
      {pageStates.value.salePage && <Sale />}
      {pageStates.value.shoppingPage && <Shopping />}
      {pageStates.value.PaymentMethod && <PaymentMethod />}
    </div>
  );
};

export default Content;
