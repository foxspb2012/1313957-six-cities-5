import React from 'react';
import PropTypes from 'prop-types';
import FavoritesCard from '../favorites-card/favorites-card';

const FavoritesItem = (props) => {
  const {сityOffers, city} = props;

  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <a className="locations__item-link" href="#">
            <span>{city}</span>
          </a>
        </div>
      </div>
      <div className="favorites__places">
        {сityOffers.map((card, index) => (
          <FavoritesCard
            key={`favorites-card-${index}`}
            offer={card}/>
        ))}
      </div>
    </li>
  );
};

FavoritesItem.propTypes = {
  city: PropTypes.string.isRequired,
  сityOffers: PropTypes.array.isRequired
};


export default FavoritesItem;
