import React from 'react';
import PropTypes from "prop-types";
import {Router as BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import MainPage from "../pages/main-page/main-page";
import SignInPage from "../pages/sign-in-page/sign-in-page";
import FavoritesPage from "../pages/favorites-page/favorites-page";
import RoomPage from "../pages/room-page/room-page";
import PrivateRoute from '../private-route/private-route';
import browserHistory from '../../browser-history';

const App = (props) => {
  const {reviews} = props;
  return (
    <BrowserRouter history={browserHistory}>
      <Switch>
        <Route exact path="/" render={() => <MainPage />}/>
        <Route exact path="/login" component={SignInPage} />
        <PrivateRoute exact path='/favorites' render={() => <FavoritesPage />}/>
        <Route exact path='/offer/:id' render={(prop) => <RoomPage {...prop} offers={offers}
          offer={offers.find((elem) => elem.id.toString() === prop.match.params.id)}
          review={reviews.find((elem) => elem.id.toString() === prop.match.params.id)}
        />}/>
        <Redirect to="/"/>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  reviews: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        comments: PropTypes.arrayOf(
            PropTypes.shape({
              author: PropTypes.shape({
                name: PropTypes.string,
                avatar: PropTypes.string
              }),
              comment: PropTypes.string,
              rating: PropTypes.number
            })
        )
      })
  ).isRequired
};

export default App;
