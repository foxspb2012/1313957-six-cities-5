export const OfferType = {
  HOTEL: `Hotel`,
  HOUSE: `House`,
  APARTMENT: `Apartment`,
  PRIVATE_ROOM: `Private room`,
};

export const CardTypeOptions = {
  DEFAULT: {
    cardClassName: `cities__place-card`,
    isPremiumMark: false,
    imageWrapperName: `cities__image-wrapper`,
    imageStyle: {
      width: `260`,
      height: `200`
    },
    bookmarkPrefix: `To`
  },
  FAVORITE: {
    cardClassName: `favorites__card`,
    isPremiumMark: true,
    imageWrapperName: `favorites__image-wrapper`,
    imageStyle: {
      width: `150`,
      height: `110`
    },
    bookmarkPrefix: `In`
  },
  NEARBY: {
    cardClassName: `near-places__card`,
    isPremiumMark: true,
    imageWrapperClassName: `near-places__image-wrapper`,
    imageStyle: {
      width: `260`,
      height: `200`
    },
    bookmarkPrefix: `To`
  }
};

export const Cities = [
  `Paris`,
  `Cologne`,
  `Brussels`,
  `Amsterdam`,
  `Hamburg`,
  `Dusseldorf`,
];

export const SortTypes = [
  `Popular`,
  `Price: low to high`,
  `Price: high to low`,
  `Top rated first`,
];

export const SortType = {
  POPULAR: `Popular`,
  PRICE_LOW_TO_HIGH: `Price: low to high`,
  PRICE_HIGH_TO_LOW: `Price: high to low`,
  TOP_RATED_FIRST: `Top rated first`
};

export const CityPoints = {
  PARIS: [48.85341, 2.34],
  COLOGNE: [50.93333, 6.95],
  BRUSSELS: [50.85045, 4.35],
  AMSTERDAM: [52.38333, 4.9],
  HAMBURG: [53.57532, 10.01],
  DUSSELDORF: [51.22172, 6.77]
};

