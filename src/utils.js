export const extend = (a, b) => {
  return Object.assign({}, a, b);
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