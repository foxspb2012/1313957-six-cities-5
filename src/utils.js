import {SortType} from './const';

const upperCaseFirstLetter = (str) => str[0].toUpperCase() + str.slice(1);

const dateConverter = new Intl.DateTimeFormat(`en-us`, {
  year: `numeric`,
  month: `long`,
});

const getNearOffers = (offers, selectOffer) => {
  const nearOffers = offers.filter((offer) => offer.id !== selectOffer.id);
  return nearOffers;
};

const extend = (target, update) => Object.assign({}, target, update);

const getOfferLocationActive = (arr, id) => {
  const a = arr.find((it) => it.id === id).location;
  return a;
};

const getCityCoordinates = (offers) => offers[0].city.location;

const sortOffers = (offers, sortType) => {
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

export {upperCaseFirstLetter, dateConverter, getNearOffers, extend, getOfferLocationActive, sortOffers, getCityCoordinates};
