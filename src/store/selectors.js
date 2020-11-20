import {createSelector} from 'reselect';
import {SortType} from '../const';
import {sorting} from '../utils' 

export const getCity = (state) => state.PROCESS.city;
export const getSortType = (state) => state.PROCESS.sortType;
export const getActiveCardId = (state) => state.PROCESS.activeCardId;
export const getOffers = (state) => state.DATA.offers;
export const getAuthorizationStatus = (state) => state.USER.authorizationStatus;

export const getFavoriteOffers = createSelector(
    getOffers,
    (offers) => offers.filter((offer) => offer.isFavorite)
);

export const getOffersInCityBySortType = createSelector(
    getOffers,
    getCity,
    getSortType,
    (offers, city, sortType) => {
      const offersInCity = offers.filter((offer) => offer.city.name === city);
      return (
        sorting(sortType, offersInCity)
      ) 
    }
);
