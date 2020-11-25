import React from 'react';
import {Provider} from 'react-redux';
import ReviewList from './review-list';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';

const NameSpace = {
  APP: `APP`,
  USER: `USER`,
  OFFERS: `OFFERS`,
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
    authorizationStatus: `AUTHORIZED`,
    email: null
  }
};

describe(`Should ReviewList render correctly`, () => {
  it(`Should ReviewList render correctly with reviews`, () => {
    const mockStore = configureStore();
    const store = mockStore(mockStateWithAuthorization);
    const tree = renderer
      .create(
          <Provider store={store}>
            <ReviewList/>
          </Provider>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Should ReviewList render correctly when no reviews`, () => {
    const mockStore = configureStore();
    const store = mockStore(mockStateWithNoReviews);
    const tree = renderer
      .create(
          <Provider store={store}>
            <ReviewList/>
          </Provider>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
