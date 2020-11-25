import React from 'react';
import Map from './map';
import history from '../../history';
import {Provider} from 'react-redux';
import {Router} from 'react-router-dom';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';

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

describe(`Should Map render correctly`, () => {
  it(`Should Map render correctly with offer and block class name offer-page`, () => {
    const offers = getOffersMock(4);
    const centerCoordinates = getOffersMock(1).location;
    const mockStore = configureStore();
    const store = mockStore(mockState);
    const tree = renderer
      .create(
          <Provider store={store}>
            <Router history={history}>
              <Map
                blockClassName={`property`}
                centerCoordinates={centerCoordinates}
                offers={offers}
              />
            </Router>
          </Provider>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Should Map render correctly with offers and block class name main-page`, () => {
    const offers = getOffersMock(12);
    const mockStore = configureStore();
    const store = mockStore(mockState);
    const tree = renderer
      .create(
          <Provider store={store}>
            <Router history={history}>
              <Map
                blockClassName={`cities`}
                centerCoordinates={offers[0].city.location}
                offers={offers}
              />
            </Router>
          </Provider>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Should Map render correctly without offers`, () => {
    const mockStore = configureStore();
    const store = mockStore(mockState);
    const tree = renderer
      .create(
          <Provider store={store}>
            <Router history={history}>
              <Map/>
            </Router>
          </Provider>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
