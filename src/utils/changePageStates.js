import { pageStates } from "../components/Content";

const showOnePage = (pageToShow) => {
  const newState = { ...pageStates.value, [pageToShow]: true };
  console.log(newState);
  return newState;
};

const hideOnePage = (pageToHide) => {
  const newState = { ...pageStates.value, [pageToHide]: false };
  console.log(newState);
  return newState;
};

const showOnlyOnePage = (pageToShow) => {
  const resetState = {
    loginPage: false,
    registerPage: false,
    accountPage: false,
    checkoutPage: false,
  };
  const newState = {
    ...resetState,
    [pageToShow]: true,
  };
  return newState;
};

export { showOnePage, hideOnePage, showOnlyOnePage };
