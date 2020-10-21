import React from "react";
import PropTypes from "prop-types";
import {Switch, Route, BrowserRouter, Redirect} from "react-router-dom";
import MainPage from "../pages/main-page/main-page";
import SignInPage from "../pages/sign-in-page/sign-in-page";
import FavoritesPage from "../pages/favorites-page/favorites-page";
import RoomPage from "../pages/room-page/room-page";

const App = (props) => {
  const {offers, reviews} = props;
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" render={() => <MainPage offers = {offers}/>}/>
        <Route exact path="/login" component={SignInPage} />
        <Route exact path='/favorites' render={() => <FavoritesPage offers={offers.filter((offer) => offer.isFavorite)}/>}/>
        <Route exact path='/offer/:id' render={() => <RoomPage offer={offers[0]} reviews={reviews[0]}/>}/>
        <Redirect to="/"/>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  offers: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string,
        description: PropTypes.string,
        type: PropTypes.oneOf([`Apartment`, `Private room`, `House`, `Hotel`]),
        price: PropTypes.number,
        rating: PropTypes.number,
        isPremium: PropTypes.bool,
        bedroomsCount: PropTypes.number,
        guestsMaxCount: PropTypes.number,
        features: PropTypes.arrayOf(PropTypes.string),
        photos: PropTypes.arrayOf(PropTypes.string),
        host: PropTypes.shape({
          name: PropTypes.string,
          avatar: PropTypes.string,
          isSuper: PropTypes.bool
        })
      })).isRequired,
  reviews: PropTypes.arrayOf(
      PropTypes.arrayOf(
          PropTypes.shape({
            author: PropTypes.shape({
              name: PropTypes.string,
              avatar: PropTypes.string
            }),
            comment: PropTypes.string,
            rating: PropTypes.number
          })
      )
  )
};

export default App;
