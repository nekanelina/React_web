const changePageState = (pageToShow) => {
  const resetState = {
    showLoginPage: false,
    showRegisterPage: false,
  };
  const newState = {
    ...resetState,
    [pageToShow]: true,
  };
  return newState;
};

export default changePageState;
