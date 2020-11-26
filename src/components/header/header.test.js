import React from 'react';
import {Header} from './header';
import history from '../../history';
import {Provider} from 'react-redux';
import {Router} from 'react-router-dom';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';

const mockState = {
  USER: {
    authorizationStatus: `UNAUTHORIZED`,
    email: `foxspb2012@gmail.com`
  }
};

it(`Should Header is rendered correctly`, () => {
  const mockStore = configureStore();
  const store = mockStore(mockState);
  const tree = renderer
      .create(
          <Provider store={store}>
            <Router history={history}>
              <Header
                email={`foxspb2012@gmail.com`}
              />
            </Router>
          </Provider>
      )
      .toJSON();

  expect(tree).toMatchSnapshot();
});
