import { signal } from "@preact/signals-react";

import MenuMain from "./MenuMain/MenuMain";
import SaleContainer from "./SaleContainer";
import MostPopular from "./MostPopular";

import "./MainPage.css";

export const blockMainPage = signal(false);

const MainPage = () => {
  return (
    <div className="mainpage">
      {blockMainPage.value && <div className="mainpage-blocker"></div>}
      <MenuMain />
      <SaleContainer />
      <MostPopular />
    </div>
  );
};

export default MainPage;