import React from "react";
import PropTypes from "prop-types";
import {Switch, Route, BrowserRouter, Redirect} from "react-router-dom";
import Favorites from "../pages/favorites-page/favorites-page";
import PageMain from "../pages/main-page/main-page";
import Room from "../pages/room-page/room-page";
import SignIn from "../pages/sign-in-page/sign-in-page";

const App = (props) => {
  const {offersCount} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" render={() => <PageMain offersCount = {offersCount}/>}/>
        <Route exact path="/login" component={SignIn} />
        <Route exact path="/favorites" component={Favorites} />
        <Route exact path="/offer/:id" component={Room}/>
        <Redirect to="/"/>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  offersCount: PropTypes.number.isRequired,
};

export default App;
