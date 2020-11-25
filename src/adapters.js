const convertLocationFromServerFormat = ({latitude, longitude, zoom}) => ({coordinates: [latitude, longitude], zoom});

const convertCityFromServerFormat = ({name, location}) => ({name, location: convertLocationFromServerFormat(location)});

const convertUserFromServerFormat = ({id, name, avatar_url: avatar, is_pro: isPro}) => ({id, name, avatar, isPro});

export const convertOfferFromServerFormat = (offer) => {
  const {
    bedrooms: bedroomAmount,
    city,
    description,
    goods: features,
    host,
    id,
    images: photos,
    is_favorite: isFavorite,
    is_premium: isPremium,
    location,
    max_adults: guestAmount,
    preview_image: mainPhoto,
    price,
    rating,
    title: name,
    type,
  } = offer;

  return {
    bedroomAmount,
    city: convertCityFromServerFormat(city),
    description,
    features,
    host: convertUserFromServerFormat(host),
    id,
    photos,
    isFavorite,
    isPremium,
    location: convertLocationFromServerFormat(location),
    guestAmount,
    mainPhoto,
    price,
    rating,
    name,
    type,
  };
};

export const convertOffersFromServerFormat = (offers) => offers.map(convertOfferFromServerFormat);

export const convertReviewFromServerFormat = ({comment, date, id, rating, user}) => ({
  text: comment,
  date,
  id,
  rating,
  user: convertUserFromServerFormat(user)
});

export const convertReviewToServerFormat = ({text: comment, rating}) => ({comment, rating});

export const convertReviewsFromServerFormat = (reviews) => reviews.map(convertReviewFromServerFormat);
