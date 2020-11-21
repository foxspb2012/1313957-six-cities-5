import {ActionType} from '../../action';
import {Cities, SortTypes} from '../../../const';
import {extend} from '../../../utils';

const initialState = {
  city: Cities[0],
  sortType: SortTypes[0],
  activeCardId: null
};

const appProcess = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return extend(state,{city: action.payload});
    case ActionType.CHANGE_SORT_TYPE:
      return extend(state,{sortType: action.payload});
    case ActionType.CHANGE_ACTIVE_CARD:
      return extend(state,{activeCardId: action.payload});
    case ActionType.RESET_ACTIVE_CARD:
      return extend(state,{activeCardId: null});
  }

  return state;
};

export {appProcess};
