import {City, SortType, AuthorizationStatus} from './const';

import {
  number,
  shape,
  oneOf,
  arrayOf,
  string,
  bool,
  func,
  element,
  oneOfType,
  node
} from 'prop-types';

export const ID = number;
export const PATH = string;
export const TYPE_NAME = string;
export const FLAG = bool;
export const EXACT = bool;
export const CHILDREN = element;
export const FUNCTION = func;
export const BLOCK_CLASS_NAME = string;
export const EMAIL = string;
export const PASSWORD = string;
export const AUTHORIZATION_STATUS = oneOf(Object.values(AuthorizationStatus));
export const MESSAGE_TEXT = string;
export const LIST_SORTS = Object.values(SortType);


export const ACTIVE_OFFER = oneOfType([number, bool]);
export const ACTIVE_CITY = string;

export const CITIES_LIST = Object.values(City);
export const CITY_NAME = oneOf(CITIES_LIST);
export const CITY_LOCATION = shape({
  coordinates: arrayOf(number),
  zoom: number,
});
export const CITY = shape({
  name: CITY_NAME,
  location: CITY_LOCATION,
});

export const REVIEW_USER = shape({
  avatar: string,
  id: number,
  isPro: bool,
  name: string,
});
export const REVIEW_ID = number;
export const REVIEW_DATE = string;
export const REVIEW_TEXT = string;
export const REVIEW_RATING = number;
export const REVIEW = shape({
  text: REVIEW_TEXT,
  date: REVIEW_DATE,
  id: REVIEW_ID,
  rating: REVIEW_RATING,
  user: REVIEW_USER,
});
export const REVIEWS_LIST = arrayOf(REVIEW);
export const REVIEW_ERROR = string;

export const RATE = number;
export const OFFER_IMAGE = string;
export const OFFER_LOCATION = shape({
  coordinates: arrayOf(number),
  zoom: number,
});
export const OFFER_NAME = string;
export const OFFER_TYPE = string;
export const OFFER_PRICE = number;
export const OFFER_BEDROOMS_COUNT = number;
export const OFFER_GUEST_COUNT = number;
export const OFFER_FEATURES = arrayOf(string);
export const OFFER_IMAGES = arrayOf(OFFER_IMAGE);
export const OFFER_DESCRIPTION = string;
export const OFFER_IS_PREMIUM = bool;
export const OFFER_IS_FAVORITE = bool;
export const OFFER_HOST = shape({
  avatar: string,
  id: number,
  isPro: bool,
  name: string,
});
export const OFFER = shape({
  bedroomAmount: OFFER_BEDROOMS_COUNT,
  city: CITY,
  description: OFFER_DESCRIPTION,
  features: OFFER_FEATURES,
  guestAmount: OFFER_GUEST_COUNT,
  host: OFFER_HOST,
  id: ID,
  isFavorite: OFFER_IS_FAVORITE,
  isPremium: OFFER_IS_PREMIUM,
  location: OFFER_LOCATION,
  mainPhoto: OFFER_IMAGE,
  name: OFFER_NAME,
  photos: OFFER_IMAGES,
  price: OFFER_PRICE,
  rating: RATE,
  type: OFFER_TYPE,
});

export const CITY_TO_OFFERS = shape({
  [string]: arrayOf(OFFER),
});

export const OFFERS_LIST = arrayOf(OFFER);
export const FAVORITES_OFFERS = arrayOf(arrayOf(oneOfType([string, OFFERS_LIST])));

export const MOCK_COMPONENT = oneOfType([arrayOf(node), node
]);

