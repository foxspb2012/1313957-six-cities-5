import React from "react";
import PropTypes from "prop-types";
import MainPage from "../main/main";

const App = (props) => {
  const {offersCount} = props;

  return (
    <MainPage offersCount = {offersCount}/>
  );
};

App.propTypes = {
  offersCount: PropTypes.number.isRequired,
};

export default App;
