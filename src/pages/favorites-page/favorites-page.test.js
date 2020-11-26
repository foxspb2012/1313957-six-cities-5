import React from 'react';
import history from '../../history';
import {Provider} from 'react-redux';
import {Router} from 'react-router-dom';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import {FavoritesPage} from './favorites-page';

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
        'price': 120,
        'bedroomAmount': 1,
        'guestAmount': 1,
        'features': [`Dishwasher`, `Baby seat`],
        'host': {
          'name': `Host`,
          'avatar': `img/avatar-angelina.jpg`,
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
    offers: getOffersMock(12),
    offer: getOffersMock(1),
    nearOffers: getOffersMock(3),
    favoriteOffers: getOffersMock(5),
    error: null,
    isLoaded: false,
    isLoadedOffer: false,
    isLoadedNearOffers: false,
    isLoadedFavoritesOffers: true,
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

const getCitiesToOffers = (offers) => {
  return offers.reduce((groups, offer) => {
    const {city: {name: city}} = offer;

    if (!groups[city]) {
      groups[city] = [];
    }

    groups[city].push(offer);

    return groups;
  }, {});
};

const testing = () => {};

it(`Should FavoritesPage render correctly`, () => {

  const mockStore = configureStore();
  const store = mockStore(mockState);
  const tree = renderer
      .create(
          <Provider store={store}>
            <Router history={history}>
              <FavoritesPage
                citiesToOffers={getCitiesToOffers(getOffersMock(5))}
                isLoadedFavoritesOffers={true}
                loadFavoriteOffers={testing}
              />
            </Router>
          </Provider>
      )
      .toJSON();

  expect(tree).toMatchSnapshot();
});
