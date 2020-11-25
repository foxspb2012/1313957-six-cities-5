import React from 'react';
import * as Type from '../../prop-types';
import FavoritesItem from '../favorites-item/favorites-item';

const FavoritesList = ({offers = [], isLoadedFavoritesOffers}) => {

  return (
    <ul className="favorites__list">
      {offers.map(([city, сityOffers]) => (
        <FavoritesItem
          key={`favorites-item-${city}`}
          city={city}
          сityOffers={сityOffers}
          isLoadedFavoritesOffers={isLoadedFavoritesOffers}
        />
      ))}
    </ul>
  );
};

FavoritesList.propTypes = {
  offers: Type.FAVORITES_OFFERS,
  isLoadedFavoritesOffers: Type.FLAG,
};

export default FavoritesList;
