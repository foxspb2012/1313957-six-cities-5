export const MAXIMUM_OFFERS = 3;

export const OfferType = {
  APARTMENT: `apartment`,
  HOTEL: `hotel`,
  HOUSE: `house`,
  ROOM: `room`,
};

export const AppRoute = {
  MAIN: `/`,
  LOGIN: `/login`,
  OFFER: `/offer`,
  FAVORITES: `/favorites`,
  NOT_FOUND: `/not-found`,
};

export const City = {
  PARIS: `Paris`,
  COLOGNE: `Cologne`,
  BRUSSELS: `Brussels`,
  AMSTERDAM: `Amsterdam`,
  HAMBURG: `Hamburg`,
  DUSSELDORF: `Dusseldorf`
};

export const MAX_RATING = 5;

export const RATING_COEFFICIENT = 20;

export const SortType = {
  POPULAR: `popular`,
  TO_HIGH_PRICE: `price: low to high`,
  TO_LOW_PRICE: `price: high to low`,
  TOP_RATED: `top rated first`,
};

export const DEFAULT_CITY = City.PARIS;

export const DEFAULT_SORT_TYPE = SortType.POPULAR;

export const NameSpace = {
  APP: `APP`,
  USER: `USER`,
  OFFERS: `OFFERS`,
  REVIEWS: `REVIEWS`,
};

export const EMPTY_CLASS = {
  MAIN: `page__main--index-empty`,
  CITIES: `cities__places-container--empty`,
};

export const ERROR_TIMEOUT = 4000;

export const ServerResponseStatus = {
  OK: 200,
  UNAUTHORIZED: 401,
};

export const ServerURL = {
  LOGIN: `/login`,
  OFFERS: `/hotels`,
  FAVORITES: `/favorite`,
  REVIEWS: `/comments`,
};

export const AuthorizationStatus = {
  AUTHORIZED: `AUTHORIZED`,
  UNAUTHORIZED: `UNAUTHORIZED`,
};

export const TextLengthLimit = {MIN: 50, MAX: 300};

export const STARS = [
  {value: 5, title: `perfect`},
  {value: 4, title: `good`},
  {value: 3, title: `not bad`},
  {value: 2, title: `badly`},
  {value: 1, title: `terribly`},
];
