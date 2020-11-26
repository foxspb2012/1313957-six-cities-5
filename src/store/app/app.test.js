import {ActionType, ActionCreator, reducer} from './app';
import {DEFAULT_CITY, DEFAULT_SORT_TYPE, SortType, City} from '../../const';

const city = DEFAULT_CITY;
const sortType = DEFAULT_SORT_TYPE;
const mockStateApp = {
  activeCity: `Paris`,
  activeSortType: `popular`,
  activeOffer: null
};

describe(`AppActionCreator`, () => {
  it(`should create SET_ACTIVE_CITY action`, () => {
    expect(ActionCreator.setActiveCity(city)).toEqual({
      type: ActionType.SET_ACTIVE_CITY,
      payload: city
    });
  });

  it(`should create SET_ACTIVE_SORT_TYPE action`, () => {
    expect(ActionCreator.setActiveSortType(sortType)).toEqual({
      type: ActionType.SET_ACTIVE_SORT_TYPE,
      payload: sortType
    });
  });

  it(`should create SET_ACTIVE_OFFER action`, () => {
    const offerId = 4;
    expect(ActionCreator.setActiveOffer(offerId)).toEqual({
      type: ActionType.SET_ACTIVE_OFFER,
      payload: offerId
    });
  });
});

describe(`appReducer`, () => {
  it(`should return initialState app`, () => expect(reducer(undefined, {})).toEqual(mockStateApp));

  it(`should set activeCity`, () => {
    const newCity = City.BRUSSELS;
    expect(reducer({activeCity: city}, {type: ActionType.SET_ACTIVE_CITY, payload: newCity})).toEqual({activeCity: newCity});
  });

  it(`should set activeSortType`, () => {
    const newSortType = SortType.TOP_RATED;
    expect(reducer({activeSortType: sortType}, {type: ActionType.SET_ACTIVE_SORT_TYPE, payload: newSortType})).toEqual({activeSortType: newSortType});
  });

  it(`should set activeOffer`, () => {
    const newActiveOffer = 2;
    expect(reducer({activeOffer: null}, {type: ActionType.SET_ACTIVE_OFFER, payload: newActiveOffer})).toEqual({activeOffer: newActiveOffer});
  });
});
