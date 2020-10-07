import React from "react";
import PropTypes from "prop-types";
import {Switch, Route, BrowserRouter, Redirect} from "react-router-dom";
import FavoritesPage from "../pages/favorites-page/favorites-page";
import MainPage from "../pages/main-page/main-page";
import RoomPage from "../pages/room-page/room-page";
import SignInPage from "../pages/sign-in-page/sign-in-page";

const App = (props) => {
  const {offersCount} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" render={() => <MainPage offersCount = {offersCount}/>}/>
        <Route exact path="/login" component={SignInPage} />
        <Route exact path="/favorites" component={FavoritesPage} />
        <Route exact path="/offer/:id" component={RoomPage}/>
        <Redirect to="/"/>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  offersCount: PropTypes.number.isRequired,
};

export default App;
