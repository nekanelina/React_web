import MenuMain from "./MenuMain/MenuMain";
import SaleContainer from "./SaleContainer";
import MostPopular from "./MostPopular";

const MainPage = () => {
  return (
    <div className="mainpage">
      <MenuMain />
      <SaleContainer />
      <MostPopular />
    </div>
  );
};

export default MainPage;