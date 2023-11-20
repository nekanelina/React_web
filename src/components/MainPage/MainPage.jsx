import MenuMain from "./MenuMain/MenuMain";
import SaleContainer from "./SaleContainer";
import MostPopular from "./MostPopular";

import { pageStates } from "../Content";

const MainPage = () => {
  return (
    <div style={pageStates.value.registerPage || pageStates.value.accountPage || pageStates.value.checkoutPage ? { filter: "blur(5px)" } : {} }>
        <MenuMain />
        <SaleContainer />
        <MostPopular />
    </div>
  )
}

export default MainPage;
