import {SortType} from './const';

export const extend = (a, b) => {
  return Object.assign({}, a, b);
};

export const sorting = (sortType, offersInCity) => {
  switch (sortType) {
    case SortType.PRICE_HIGH_TO_LOW:
      return offersInCity.sort((a, b) => {
        if (a.price === b.price) {
          if (a.title > b.title) {
            return 1;
          }
          return -1;
        }
        return b.price - a.price;
      });

    case SortType.PRICE_LOW_TO_HIGH:
      return offersInCity.sort((a, b) => {
        if (a.price === b.price) {
          if (a.title > b.title) {
            return 1;
          }
          return -1;
        }
        return a.price - b.price;
      });

    case SortType.TOP_RATED_FIRST:
      return offersInCity.sort((a, b) => {
        if (a.rating === b.rating) {
          if (a.title > b.title) {
            return 1;
          }
          return -1;
        }
        return b.rating - a.rating;
      });

    default:
      return offersInCity;
  }
};

export const adaptToClient = (offer) => {
  const adaptedOffer = Object.assign(
      {},
      offer,
      {
        previewImage: offer.preview_image,
        isFavorite: offer.is_favorite,
        isPremium: offer.is_premium,
        guestsMaxCount: offer.max_adults,
        host: Object.assign(
            {},
            offer.host,
            {
              avatar: offer.host.avatar_url,
              isPro: offer.host.is_pro
            }
        )
      }
  );

  delete adaptedOffer.preview_image;
  delete adaptedOffer.is_favorite;
  delete adaptedOffer.is_premium;
  delete adaptedOffer.max_adults;
  delete adaptedOffer.host.avatar_url;
  delete adaptedOffer.host.is_pro;

  return adaptedOffer;
};

