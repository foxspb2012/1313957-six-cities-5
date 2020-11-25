import {extend} from '../../utils';
import {DEFAULT_CITY, DEFAULT_SORT_TYPE} from '../../const';

const initialState = {
  activeCity: DEFAULT_CITY,
  activeSortType: DEFAULT_SORT_TYPE,
  activeOffer: null,
};

export const ActionType = {
  SET_ACTIVE_CITY: `SET_ACTIVE_CITY`,
  SET_ACTIVE_SORT_TYPE: `SET_ACTIVE_SORT_TYPE`,
  SET_ACTIVE_OFFER: `SET_ACTIVE_OFFER`,
};

export const ActionCreator = {
  setActiveCity: (activeCity) => ({type: ActionType.SET_ACTIVE_CITY, payload: activeCity}),
  setActiveSortType: (activeSortType) => ({type: ActionType.SET_ACTIVE_SORT_TYPE, payload: activeSortType}),
  setActiveOffer: (activeOffer) => ({type: ActionType.SET_ACTIVE_OFFER, payload: activeOffer}),
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_ACTIVE_CITY:
      return extend(state, {activeCity: action.payload});
    case ActionType.SET_ACTIVE_SORT_TYPE:
      return extend(state, {activeSortType: action.payload});
    case ActionType.SET_ACTIVE_OFFER:
      return extend(state, {activeOffer: action.payload});
    default:
      return state;
  }
};
