import {SortType} from './const';

export const getOffersInCity = (offers, city) => offers.filter((offer) => offer.city === city);

export const extend = (a, b) => {
  return Object.assign({}, a, b);
};

export const getOffersBySorting = (offers, sortType) => {
  switch (sortType) {
    case SortType.PRICE_HIGH_TO_LOW:
      return offers.sort((a, b) => {
        if (a.price === b.price && a.title > b.title) {
          return 1;
        }
        return b.price - a.price;
      });

    case SortType.PRICE_LOW_TO_HIGH:
      return offers.sort((a, b) => {
        if (a.price === b.price && a.title > b.title) {
          return 1;
        }
        return a.price - b.price;
      });

    case SortType.TOP_RATED_FIRST:
      return offers.sort((a, b) => {
        if (a.rating === b.rating && a.title > b.title) {
          return 1;
        }
        return b.rating - a.rating;
      });

    default:
      return offers;
  }
};
