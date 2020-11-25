import React from 'react';
import PropTypes from 'prop-types';
import FavoritesItem from '../favorites-item/favorites-item';

const FavoritesList = ({offers}) => {

  return (
    <ul className="favorites__list">
      {Array.from(offers.keys()).map((city) => (
        <FavoritesItem
          key={`favorites-item-${city}`}
          city={city}
          сityOffers={offers.get(city)}
        />
      ))}
    </ul>
  );
};

FavoritesList.propTypes = {
  offers: PropTypes.objectOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    city: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    photos: PropTypes.arrayOf(PropTypes.string).isRequired,
    isFavorite: PropTypes.bool.isRequired,
    isPremium: PropTypes.bool.isRequired,
    rating: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    bedroomAmount: PropTypes.number.isRequired,
    guestAmount: PropTypes.number.isRequired,
    features: PropTypes.arrayOf(PropTypes.string).isRequired,
    host: PropTypes.shape({
      name: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
      isPro: PropTypes.bool.isRequired
    }).isRequired,
    reviews: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      date: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
      user: PropTypes.shape({
        name: PropTypes.string.isRequired,
        avatar: PropTypes.string.isRequired
      }).isRequired
    }))
  }))
};


export default FavoritesList;
