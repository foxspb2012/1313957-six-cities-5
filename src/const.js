export const OfferType = {
  HOTEL: `Hotel`,
  HOUSE: `House`,
  APARTMENT: `Apartment`,
  PRIVATE_ROOM: `Private room`,
};

export const mainCardOptions = {
  cardClassName: `cities__place-card`,
  isPremiumMark: false,
  imageWrapperName: `cities__image-wrapper`,
  imageStyle: {
    width: `260`,
    height: `200`,
  },
  bookmarkCode: `To`
};

export const favoriteCardOptions = {
  cardClassName: `favorites__card`,
  isPremiumMark: true,
  imageWrapperName: `favorites__image-wrapper`,
  imageStyle: {
    width: `150`,
    height: `110`,
  },
  bookmarkCode: `In`
};

export const nearbyCardOptions = {
  cardClassName: `near-places__card`,
  isPremiumMark: true,
  imageWrapperName: `near-places__image-wrapper`,
  imageStyle: {
    width: `260`,
    height: `200`
  },
  bookmarkCode: `To`
};
