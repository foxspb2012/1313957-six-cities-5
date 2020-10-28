import React from 'react';
import PropTypes from 'prop-types';
import CardsList from '../cards/cards-list/cards-list';
import {favoriteCardOptions} from '../../const';

const FavoritesCities = (props) => {
  const {offers} = props;
  const selectedCities = [...new Set(offers.map((elem) => elem.city))];

  return (
    selectedCities.map((city) =>
      <li className="favorites__locations-items" key={city}>
        <div className="favorites__locations locations locations--current">
          <div className="locations__item">
            <a className="locations__item-link" href="#">
              <span>{city}</span>
            </a>
          </div>
        </div>
        <div className="favorites__places">
          <CardsList cardOptions={favoriteCardOptions} offers={offers.filter((elem) => elem.city === city)}/>
        </div>
      </li>
    )
  );
};

FavoritesCities.propTypes = {
  offers: PropTypes.array
};

export default FavoritesCities;
