import React from 'react';
import {Router, Switch, Route} from 'react-router-dom';
import history from '../history';
import {AppRoute} from '../const';
import MainPage from '../pages/main-page/main-page';
import LoginPage from '../pages/login-page/login-page';
import OfferPage from '../pages/offer-page/offer-page';
import PrivateRoute from '../components/private-route/private-route';
import NotFoundPage from '../pages/not-found-page/not-found-page';
import FavoritesPage from '../pages/favorites-page/favorites-page';

const App = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path={AppRoute.MAIN} render={() => <MainPage />}/>
        <PrivateRoute path={AppRoute.LOGIN} exact render={() => <LoginPage />}/>
        <Route exact path={AppRoute.FAVORITES} render={() => <FavoritesPage />}/>
        <Route exact path={`${AppRoute.OFFER}/:offerId`}
          render={({match: {params: {offerId}}}) => {
            return <OfferPage
              id={Number(offerId)}/>;
          }}
        />
        <Route component={NotFoundPage} />
      </Switch>
    </Router>
  );
};

export default App;
