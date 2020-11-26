import React from 'react';
import history from '../../history';
import {Provider} from 'react-redux';
import {Router} from 'react-router-dom';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import OfferPageContent from './offer-page-content';

const NameSpace = {
  APP: `APP`,
  USER: `USER`,
  OFFERS: `OFFERS`,
  REVIEWS: `REVIEWS`,
};

const getOffersMock = (count) => {
  const templateOffers = Array(count)
    .fill(``)
    .map((_, index) => {
      return {
        'id': index + 1,
        'city': {
          'name': `Paris`,
          'location': {
            'coordinates': [48.85661, 2.351499],
            'zoom': 13
          }
        },
        'type': `room`,
        'name': `Wood and stone place`,
        'description': `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
        'photos': [`img/apartment-01.jpg`, `img/apartment-03.jpg`],
        'isFavorite': Boolean(Math.random()),
        'isPremium': Boolean(Math.random()),
        'rating': 1,
        'price': 100,
        'bedroomAmount': 1,
        'guestAmount': 1,
        'features': [`Dishwasher`, `Baby seat`],
        'host': {
          'name': `Host`,
          'avatar': `img/avatar-max.jpg`,
          'isPro': false,
          'id': index + 1
        },
        'location': {
          'coordinates': [48.87961000000001, 2.353499],
          'zoom': 16
        },
        'mainPhoto': `img/apartment-03.jpg`,
      };
    });

  if (count === 1) {
    const [oneOffer] = templateOffers;
    return oneOffer;
  }

  return templateOffers;
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

describe(`Should OfferPageContent render correctly`, () => {
  it(`Should OfferPageContent render correctly without offer`, () => {
    const mockStore = configureStore();
    const store = mockStore(mockState);
    const tree = renderer
      .create(
          <Provider store={store}>
            <Router history={history}>
              <OfferPageContent/>
            </Router>
          </Provider>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Should OfferPageContent render correctly with offer`, () => {
    const mockStore = configureStore();
    const store = mockStore(mockState);
    const tree = renderer
      .create(
          <Provider store={store}>
            <Router history={history}>
              <OfferPageContent
                offer={getOffersMock(1)}
              />
            </Router>
          </Provider>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
