import React from 'react';
import {Router} from 'react-router-dom';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import OfferList from './offer-list';
import history from '../../history';

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
const OffersListType = {
  MAIN: `MAIN`,
  NEAR: `NEAR`,
  FAVORITES: `FAVORITES`,
};

describe(`Should OfferList render correctly`, () => {
  it(`Should OfferList render correctly empty component`, () => {
    const mockStore = configureStore();
    const store = mockStore(mockState);
    const tree = renderer
      .create(
          <Provider store={store}>
            <Router history={history}>
              <OfferList/>
            </Router>
          </Provider>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Should OfferList render correctly with offers`, () => {
    const mockStore = configureStore();
    const store = mockStore(mockState);
    const tree = renderer
      .create(
          <Provider store={store}>
            <Router history={history}>
              <OfferList
                offer={getOffersMock(5)}
              />
            </Router>
          </Provider>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Should OfferList render correctly with offers and favorites type`, () => {
    const mockStore = configureStore();
    const store = mockStore(mockState);
    const tree = renderer
      .create(
          <Provider store={store}>
            <Router history={history}>
              <OfferList
                typeClass={OffersListType.FAVORITES}
                offer={getOffersMock(5)}
              />
            </Router>
          </Provider>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Should OfferList render correctly with offers and main type`, () => {
    const mockStore = configureStore();
    const store = mockStore(mockState);
    const tree = renderer
      .create(
          <Provider store={store}>
            <Router history={history}>
              <OfferList
                typeClass={OffersListType.MAIN}
                offer={getOffersMock(5)}
              />
            </Router>
          </Provider>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Should OfferList render correctly with offers and near type`, () => {
    const mockStore = configureStore();
    const store = mockStore(mockState);
    const tree = renderer
      .create(
          <Provider store={store}>
            <Router history={history}>
              <OfferList
                typeClass={OffersListType.NEAR}
                offer={getOffersMock(5)}
              />
            </Router>
          </Provider>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
