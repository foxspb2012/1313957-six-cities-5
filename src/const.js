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
