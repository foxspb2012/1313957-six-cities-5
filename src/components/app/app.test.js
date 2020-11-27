import React from 'react';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import App from './app';

const NameSpace = {
  APP: `APP`,
  USER: `USER`,
  OFFERS: `OFFERS`,
  REVIEWS: `REVIEWS`,
};

const mockState = {
  [NameSpace.APP]: {
    activeCity: `Paris`,
    activeSortType: `popular`,
    activeOffer: null
  },
  [NameSpace.OFFERS]: {
    offers: [],
    offer: {},
    nearOffers: [],
    favoriteOffers: [],
    error: null,
    isLoaded: false,
    isLoadedOffer: false,
    isLoadedNearOffers: false,
    isLoadedFavoritesOffers: false,
  },
  [NameSpace.REVIEWS]: {
    reviews: [],
    isReviewSending: false,
    error: null
  },
  [NameSpace.USER]: {
    authorizationStatus: `UNAUTHORIZED`,
    email: null
  }
};

it(`App is rendered correctly`, () => {
  const middlewares = [thunk];
  const mockStore = configureStore(middlewares);
  const store = mockStore(mockState);

  const tree = renderer
    .create(
        <Provider store={store}>
          <App/>
        </Provider>, {
          createNodeMock: () => document.createElement(`div`)
        }
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
