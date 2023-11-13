import PropTypes from 'prop-types';

const changePageState = (pageToShow) => {
  const resetState = {
    showLoginPage: false,
    showRegisterPage: false,
    showAccountPage: false,
  };
  const newState = {
    ...resetState,
    [pageToShow]: true,
  };
  return newState;
};

changePageState.propTypes = {
  pageToShow: PropTypes.string.isRequired,
};

export default changePageState;
