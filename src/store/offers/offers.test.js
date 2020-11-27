import MockAdapter from 'axios-mock-adapter';
import createAPI from '../../api';
import {ServerURL, ServerResponseStatus} from '../../const';
import {ActionType, ActionCreator, Operation, reducer} from './offers';
import {convertOfferFromServerFormat, convertOffersFromServerFormat} from '../../adapters';

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
        'mainPhoto': `img/apartment-02.jpg`,
      };
    });

  if (count === 1) {
    const [oneOffer] = templateOffers;
    return oneOffer;
  }

  return templateOffers;
};

const offers = getOffersMock(10);
const offer = getOffersMock(1);
const nearOffers = getOffersMock(3);
const favoriteOffers = getOffersMock(5);
const offerId = 4;
const isLoaded = true;
const isLoadedOffer = true;
const isLoadedNearOffers = true;
const isLoadedFavoritesOffers = true;
const error = `error`;

const mockStateOffers = {
  offers: [],
  offer: {},
  nearOffers: [],
  favoriteOffers: [],
  error: null,
  isLoaded: false,
  isLoadedOffer: false,
  isLoadedNearOffers: false,
  isLoadedFavoritesOffers: false,
};

describe(`offersActionCreator`, () => {
  it(`should create SET_OFFERS action`, () => {
    expect(ActionCreator.setOffers(offers)).toEqual({
      type: ActionType.SET_OFFERS,
      payload: offers
    });
  });

  it(`should create SET_OFFER action`, () => {
    expect(ActionCreator.setOffers(offer)).toEqual({
      type: ActionType.SET_OFFERS,
      payload: offer
    });
  });

  it(`should create SET_NEAR_OFFERS action`, () => {
    expect(ActionCreator.setNearOffers(nearOffers)).toEqual({
      type: ActionType.SET_NEAR_OFFERS,
      payload: nearOffers
    });
  });

  it(`should create SET_FAVORITE_OFFERS action`, () => {
    expect(ActionCreator.setFavoriteOffers(favoriteOffers)).toEqual({
      type: ActionType.SET_FAVORITE_OFFERS,
      payload: favoriteOffers
    });
  });

  it(`should create SET_ERROR action`, () => {
    expect(ActionCreator.setError(error)).toEqual({
      type: ActionType.SET_ERROR,
      payload: error
    });
  });

  it(`should create REMOVE_ERROR action`, () => expect(ActionCreator.removeError()).toEqual({type: ActionType.REMOVE_ERROR}));

  it(`should create CHANGE_LOAD_STATUS action`, () => {
    expect(ActionCreator.changeLoadStatus(isLoaded)).toEqual({
      type: ActionType.CHANGE_LOAD_STATUS,
      payload: isLoaded
    });
  });

  it(`should create CHANGE_LOAD_STATUS_OFFER action`, () => {
    expect(ActionCreator.changeLoadStatusOffer(isLoadedOffer)).toEqual({
      type: ActionType.CHANGE_LOAD_STATUS_OFFER,
      payload: isLoadedOffer
    });
  });

  it(`should create CHANGE_LOAD_STATUS_NEAR_OFFERS action`, () => {
    expect(ActionCreator.changeLoadStatusNearOffers(isLoadedNearOffers)).toEqual({
      type: ActionType.CHANGE_LOAD_STATUS_NEAR_OFFERS,
      payload: isLoadedNearOffers
    });
  });

  it(`should create CHANGE_LOAD_STATUS_FAVORITES_OFFERS action`, () => {
    expect(ActionCreator.changeLoadStatusFavoritesOffers(isLoadedFavoritesOffers)).toEqual({
      type: ActionType.CHANGE_LOAD_STATUS_FAVORITES_OFFERS,
      payload: isLoadedFavoritesOffers
    });
  });

});

describe(`offersOperation`, () => {
  const api = createAPI(() => {});

  it(`should load offers`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    apiMock.onGet(ServerURL.OFFERS).reply(ServerResponseStatus.OK, offers);
    return Operation.loadOffers()(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(1, {type: ActionType.SET_OFFERS, payload: convertOffersFromServerFormat(offers)});
        expect(dispatch).toHaveBeenNthCalledWith(2, {type: ActionType.CHANGE_LOAD_STATUS, payload: true});
      });
  });

  it(`should load offer`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    apiMock.onGet(`${ServerURL.OFFERS}/${offerId}`).reply(ServerResponseStatus.OK, offer);
    return Operation.loadOneOffer(offerId)(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(1, {type: ActionType.SET_OFFER, payload: convertOfferFromServerFormat(offer)});
        expect(dispatch).toHaveBeenNthCalledWith(2, {type: ActionType.CHANGE_LOAD_STATUS_OFFER, payload: true});
      });
  });

  it(`should load nearOffers`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    apiMock.onGet(`${ServerURL.OFFERS}/${offerId}/nearby`).reply(ServerResponseStatus.OK, nearOffers);
    return Operation.loadNearOffers(offerId)(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(1, {type: ActionType.SET_NEAR_OFFERS, payload: convertOffersFromServerFormat(nearOffers)});
        expect(dispatch).toHaveBeenNthCalledWith(2, {type: ActionType.CHANGE_LOAD_STATUS_NEAR_OFFERS, payload: true});
      });
  });

  it(`should load favoriteOffers`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    apiMock.onGet(ServerURL.FAVORITES).reply(ServerResponseStatus.OK, favoriteOffers);
    return Operation.loadFavoriteOffers()(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(1, {type: ActionType.SET_FAVORITE_OFFERS, payload: convertOffersFromServerFormat(favoriteOffers)});
        expect(dispatch).toHaveBeenNthCalledWith(2, {type: ActionType.CHANGE_LOAD_STATUS_FAVORITES_OFFERS, payload: true});
      });
  });
});

describe(`offersReducer`, () => {
  it(`should return initialState offer`, () => expect(reducer(undefined, {})).toEqual(mockStateOffers));

  it(`should set offers`, () => {
    expect(reducer({offers: []}, {type: ActionType.SET_OFFERS, payload: offers})).toEqual({offers});
  });

  it(`should set offer`, () => {
    expect(reducer({offer: {}}, {type: ActionType.SET_OFFER, payload: offer})).toEqual({offer});
  });

  it(`should set nearOffers`, () => {
    expect(reducer({nearOffers: []}, {type: ActionType.SET_NEAR_OFFERS, payload: nearOffers})).toEqual({nearOffers});
  });

  it(`should set favoriteOffers`, () => {
    expect(reducer({favoriteOffers: []}, {type: ActionType.SET_FAVORITE_OFFERS, payload: favoriteOffers})).toEqual({favoriteOffers});
  });

  it(`should set error`, () => {
    expect(reducer({error: null}, {type: ActionType.SET_ERROR, payload: error})).toEqual({error});
  });

  it(`should remove error`, () => expect(reducer({error}, {type: ActionType.REMOVE_ERROR})).toEqual({error: null}));

  it(`should change load status`, () => {
    expect(reducer({isLoaded: false}, {type: ActionType.CHANGE_LOAD_STATUS, payload: isLoaded})).toEqual({isLoaded});
  });

  it(`should change load status offer`, () => {
    expect(reducer({isLoadedOffer: false}, {type: ActionType.CHANGE_LOAD_STATUS_OFFER, payload: isLoadedOffer})).toEqual({isLoadedOffer});
  });

  it(`should change load status near offers`, () => {
    expect(reducer({isLoadedNearOffers: false}, {type: ActionType.CHANGE_LOAD_STATUS_NEAR_OFFERS, payload: isLoadedNearOffers})).toEqual({isLoadedNearOffers});
  });

  it(`should change load status favorites offers`, () => {
    expect(reducer({isLoadedFavoritesOffers: false}, {type: ActionType.CHANGE_LOAD_STATUS_FAVORITES_OFFERS, payload: isLoadedFavoritesOffers})).toEqual({isLoadedFavoritesOffers});
  });
});
