import {SortType} from './const';

export const getOffersInCity = (offers, city) => offers.filter((offer) => offer.city === city);

export const extend = (a, b) => {
  return Object.assign({}, a, b);
};

export const getOffersBySorting = (offers, sortType) => {
  const offersCopy = [...offers];
  switch (sortType) {
      case SortType.POPULAR:
        return offersCopy;
      case SortType. PRICE_LOW_TO_HIGH:
        return offersCopy.sort((a, b) => a.price - b.price);
      case SortType.PRICE_HIGH_TO_LOW:
        return offersCopy.sort((a, b) => b.price - a.price);
      case SortType.TOP_RATED_FIRST:
        return offersCopy.sort((a, b) => b.rating - a.rating);
    default:
      return offersCopy;
  }
};