import {ActionType} from './action';
import {offers} from '../mocks/offers';
import {Cities, SortTypes} from '../const';
import {extend} from '../utils';

const initialState = {
  city: Cities[0],
  offers,
  sortType: SortTypes[0],
  activeCardId: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return extend(state, {city: action.payload});

    case ActionType.CHANGE_SORT_TYPE:
      return extend(state,{sortType: action.payload});

    case ActionType.CHANGE_ACTIVE_CARD:
      return extend(state,{activeCardId: action.payload});

    case ActionType.RESET_ACTIVE_CARD:
      return extend(state,{activeCardId: null});

    default:
      return state;
  }
};

export {reducer};
