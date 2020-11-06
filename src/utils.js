export const getOffersInCity = (offers, city) => offers.filter((offer) => offer.city === city);

export const extend = (a, b) => {
  return Object.assign({}, a, b);
};
