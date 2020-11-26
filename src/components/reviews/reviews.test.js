import React from 'react';
import history from '../../history';
import {Provider} from 'react-redux';
import Reviews from './reviews';
import {Router} from 'react-router-dom';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';

const NameSpace = {
  USER: `USER`,
  REVIEWS: `REVIEWS`,
};

const reviewsMock = [{
  id: 0,
  date: `2020-10-06`,
  text: `Good`,
  rating: 4,
  user: {
    name: `User`,
    avatar: `img/avatar-angelina.jpg`,
    isPro: false,
    id: 1
  }
},
{
  id: 1,
  date: `2020-10-06`,
  text: `Good`,
  rating: 5,
  user: {
    name: `User`,
    avatar: `img/avatar-max.jpg`,
    isPro: true,
    id: 2
  }
}
];

const mockStateWithAuthorization = {
  [NameSpace.REVIEWS]: {
    reviews: reviewsMock,
    isReviewSending: false,
    error: null
  },
  [NameSpace.USER]: {
    authorizationStatus: `AUTHORIZED`,
    email: null
  }
};

const mockStateWithNoReviews = {
  [NameSpace.REVIEWS]: {
    reviews: [],
    isReviewSending: false,
    error: null
  },
  [NameSpace.USER]: {
    authorizationStatus: `AUTHORIZED`,
    email: null
  }
};

const mockStateWithoutAuthorization = {
  [NameSpace.REVIEWS]: {
    reviews: reviewsMock,
    isReviewSending: false,
    error: null
  },
  [NameSpace.USER]: {
    authorizationStatus: `UNAUTHORIZED`,
    email: null
  }
};

describe(`Should Reviews render correctly`, () => {
  it(`Should Reviews render correctly with reviews and authorization`, () => {
    const mockStore = configureStore();
    const store = mockStore(mockStateWithAuthorization);
    const tree = renderer
      .create(
          <Provider store={store}>
            <Router history={history}>
              <Reviews/>
            </Router>
          </Provider>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Should Reviews render correctly with reviews and without authorization`, () => {
    const mockStore = configureStore();
    const store = mockStore(mockStateWithoutAuthorization);
    const tree = renderer
      .create(
          <Provider store={store}>
            <Router history={history}>
              <Reviews/>
            </Router>
          </Provider>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Should Reviews render correctly when no reviews and authorization`, () => {
    const mockStore = configureStore();
    const store = mockStore(mockStateWithNoReviews);
    const tree = renderer
      .create(
          <Provider store={store}>
            <Router history={history}>
              <Reviews/>
            </Router>
          </Provider>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});

