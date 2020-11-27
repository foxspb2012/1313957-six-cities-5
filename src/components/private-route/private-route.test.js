import React from 'react';
import renderer from 'react-test-renderer';
import {PrivateRoute} from './private-route';
import {BrowserRouter} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const';

const testing = () => {};

describe(`PrivateRoute render`, () => {
  it(`PrivateRoute with authorization`, () => {
    const tree = renderer
      .create(
          <BrowserRouter>
            <PrivateRoute
              path={AppRoute.FAVORITES}
              exact={true}
              authorizationStatus={AuthorizationStatus.AUTHORIZED}
              onFavoriteButtonClick={testing}
              render={testing}>
            </PrivateRoute>
          </BrowserRouter>
      )

    .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`PrivateRoute without authorization`, () => {
    const tree = renderer
      .create(
          <BrowserRouter>
            <PrivateRoute
              path={AppRoute.LOGIN}
              exact={true}
              authorizationStatus={AuthorizationStatus.UNAUTHORIZED}
              onFavoriteButtonClick={testing}
              render={testing}>
            </PrivateRoute>
          </BrowserRouter>
      )

    .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
