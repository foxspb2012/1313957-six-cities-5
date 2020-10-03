import React from "react";
import PropTypes from "prop-types";

const App = (props) => {
  const {offersCount} = props;

  return (
    <p> Количество предложений для аренды: {offersCount}</p>
  );
};

App.propTypes = {
  offersCount: PropTypes.number.isRequired,
};

export default App;
