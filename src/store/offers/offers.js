import {extend} from '../../utils';
import {ServerURL, ERROR_TIMEOUT} from '../../const';
import {convertOfferFromServerFormat, convertOffersFromServerFormat} from '../../adapters';

let errorTimeout;

const temporarilySetError = (dispatch, error) => {
  clearTimeout(errorTimeout);
  dispatch(ActionCreator.setError(error));
  errorTimeout = setTimeout(() => dispatch(ActionCreator.removeError()), ERROR_TIMEOUT);
};

const initialState = {
  offers: [],
  offer: {},
  nearOffers: [],
  favoriteOffers: [],
  error: null,
  isLoaded: false,
  isLoadedOffer: false,
  isLoadedNearOffers: false,
};

export const ActionType = {
  SET_OFFERS: `SET_OFFERS`,
  SET_OFFER: `SET_OFFER`,
  SET_NEAR_OFFERS: `SET_NEAR_OFFERS`,
  SET_FAVORITE_OFFERS: `SET_FAVORITE_OFFERS`,
  SET_ERROR: `SET_ERROR`,
  REMOVE_ERROR: `REMOVE_ERROR`,
  CHANGE_LOAD_STATUS: `CHANGE_LOAD_STATUS`,
  CHANGE_LOAD_STATUS_OFFER: `CHANGE_LOAD_STATUS_OFFER`,
  CHANGE_LOAD_STATUS_NEAR_OFFERS: `CHANGE_LOAD_STATUS_NEAR_OFFERS`,
};

export const ActionCreator = {
  setOffers: (offers) => ({type: ActionType.SET_OFFERS, payload: offers}),
  setOneOffer: (offer) => ({type: ActionType.SET_OFFER, payload: offer}),
  setNearOffers: (nearOffers) => ({type: ActionType.SET_NEAR_OFFERS, payload: nearOffers}),
  setFavoriteOffers: (favoriteOffers) => ({type: ActionType.SET_FAVORITE_OFFERS, payload: favoriteOffers}),
  setError: (error) => ({type: ActionType.SET_ERROR, payload: error}),
  removeError: () => ({type: ActionType.REMOVE_ERROR}),
  changeLoadStatus: (status) => ({type: ActionType.CHANGE_LOAD_STATUS, payload: status}),
  changeLoadStatusOffer: (status) => ({type: ActionType.CHANGE_LOAD_STATUS_OFFER, payload: status}),
  changeLoadStatusNearOffers: (status) => ({type: ActionType.CHANGE_LOAD_STATUS_NEAR_OFFERS, payload: status}),
};

export const Operation = {
  loadOffers: () => (dispatch, getState, api) => api.get(ServerURL.OFFERS)
    .then(({data}) => {
      dispatch(ActionCreator.setOffers(convertOffersFromServerFormat(data)));
      dispatch(ActionCreator.changeLoadStatus(true));
    })
    .catch(() => temporarilySetError(dispatch, `offers loading error`)),

  loadOneOffer: (offerId) => (dispatch, getState, api) => api.get(`${ServerURL.OFFERS}/${offerId}`)
    .then(({data}) => {
      dispatch(ActionCreator.setOneOffer(convertOfferFromServerFormat(data)));
      dispatch(ActionCreator.changeLoadStatusOffer(true));
    })
    .catch(() => temporarilySetError(dispatch, `offer loading error`)),

  loadNearOffers: (offerId) => (dispatch, getState, api) => api.get(`${ServerURL.OFFERS}/${offerId}/nearby`)
    .then(({data}) => {
      dispatch(ActionCreator.setNearOffers(convertOffersFromServerFormat(data)));
      dispatch(ActionCreator.changeLoadStatusNearOffers(true));
    })
    .catch(() => temporarilySetError(dispatch, `near offers loading error`)),

  loadFavoriteOffers: () => (dispatch, getState, api) => api.get(ServerURL.FAVORITES)
    .then(({data}) => dispatch(ActionCreator.setFavoriteOffers(convertOffersFromServerFormat(data))))
    .catch(() => temporarilySetError(dispatch, `favorite offers loading error`)),
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_OFFERS:
      return extend(state, {offers: action.payload});
    case ActionType.SET_OFFER:
      return extend(state, {offer: action.payload});
    case ActionType.SET_NEAR_OFFERS:
      return extend(state, {nearOffers: action.payload});
    case ActionType.SET_FAVORITE_OFFERS:
      return extend(state, {favoriteOffers: action.payload});
    case ActionType.SET_ERROR:
      return extend(state, {error: action.payload});
    case ActionType.REMOVE_ERROR:
      return extend(state, {error: null});
    case ActionType.CHANGE_LOAD_STATUS:
      return extend(state, {isLoaded: action.payload});
    case ActionType.CHANGE_LOAD_STATUS_OFFER:
      return extend(state, {isLoadedOffer: action.payload});
    case ActionType.CHANGE_LOAD_STATUS_NEAR_OFFERS:
      return extend(state, {isLoadedNearOffers: action.payload});
    default:
      return state;
  }
};
