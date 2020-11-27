import {SortType} from './const';

export const upperCaseFirstLetter = (str) => str[0].toUpperCase() + str.slice(1);

export const dateConverter = new Intl.DateTimeFormat(`en-us`, {
  year: `numeric`,
  month: `long`,
});

export const getNearOffers = (offers, selectOffer) => {
  const nearOffers = offers.filter((offer) => offer.id !== selectOffer.id);
  return nearOffers;
};

export const extend = (target, update) => Object.assign({}, target, update);

export const pushElement = (array, element) => [...array, element];

export const replaceElement = (array, element, index) => [...array.slice(0, index), element, ...array.slice(index + 1)];

export const removeElement = (array, index) => [...array.slice(0, index), ...array.slice(index + 1)];

export const getOfferLocationActive = (arr, id) => {
  const a = arr.find((it) => it.id === id).location;
  return a;
};

export const getCityCoordinates = (offers) => offers[0].city.location;

export const sortOffers = (offers, sortType) => {
  const offersCopy = [...offers];

  switch (sortType) {
    case SortType.POPULAR:
      return offersCopy;
    case SortType.TO_HIGH_PRICE:
      return offersCopy.sort((a, b) => a.price - b.price);
    case SortType.TO_LOW_PRICE:
      return offersCopy.sort((a, b) => b.price - a.price);
    case SortType.TOP_RATED:
      return offersCopy.sort((a, b) => b.rating - a.rating);
  }

  return offersCopy;
};

export const takesLastReviews = (reviews) => {
  const amountReviews = 10;
  const start = reviews.length - amountReviews;
  const lastReviews = reviews
    .slice(start, reviews.length)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  return lastReviews;
};
