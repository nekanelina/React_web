import MenuMain from "./MenuMain/MenuMain";
import SaleContainer from "./SaleContainer";
import MostPopular from "./MostPopular";

import { pageStates } from "../Content";

import "./MainPage.css";

const MainPage = () => {
  return (
    <div className="mainpage">
      <MenuMain />
      <SaleContainer />
      <MostPopular />
      {(pageStates.value.registerPage ||
        pageStates.value.accountPage ||
        pageStates.value.checkoutPage) && (
        <div className="mainpage-blocker"></div>
      )}
    </div>
  );
};

export default MainPage;