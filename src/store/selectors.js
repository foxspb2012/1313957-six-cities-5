import {createSelector} from 'reselect';
import {SortType} from '../const';

export const getCity = (state) => state.PROCESS.city;
export const getSortType = (state) => state.PROCESS.sortType;
export const getActiveCardId = (state) => state.PROCESS.activeCardId;
export const getOffers = (state) => state.DATA.offers;

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
      switch (sortType) {
        case SortType.PRICE_HIGH_TO_LOW:
          return offersInCity.sort((a, b) => {
            if (a.price === b.price) {
              if (a.title > b.title) {
                return 1;
              }
              return -1;
            }
            return b.price - a.price;
          });

        case SortType.PRICE_LOW_TO_HIGH:
          return offersInCity.sort((a, b) => {
            if (a.price === b.price) {
              if (a.title > b.title) {
                return 1;
              }
              return -1;
            }
            return a.price - b.price;
          });

        case SortType.TOP_RATED_FIRST:
          return offersInCity.sort((a, b) => {
            if (a.rating === b.rating) {
              if (a.title > b.title) {
                return 1;
              }
              return -1;
            }
            return b.rating - a.rating;
          });

        default:
          return offersInCity;
      }
    }
);
