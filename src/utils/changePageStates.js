import { pageStates } from "../components/Content";

const showOnePage = (pageToShow) => {
  const newState = { ...pageStates.value, [pageToShow]: true };
  return newState;
};

const hideOnePage = (pageToHide) => {
  const newState = { ...pageStates.value, [pageToHide]: false };
  return newState;
};

const showOnlyOnePage = (pageToShow) => {
  const resetState = {
    loginPage: false,
    registerPage: false,
    accountPage: false,
  };
  const newState = {
    ...resetState,
    [pageToShow]: true,
  };
  return newState;
};

export { showOnePage, hideOnePage, showOnlyOnePage };
