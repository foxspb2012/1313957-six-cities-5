import React from 'react';
import PropTypes from 'prop-types';
import CardsList from '../cards/cards-list/cards-list';
import {CardTypeOptions} from '../../const';

const FavoritesCities = (props) => {
  const {offers} = props;
  const selectedCities = [...new Set(offers.map((elem) => elem.city.name))];;

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
          <CardsList cardOptions={CardTypeOptions.FAVORITE} offers={offers.filter((elem) => elem.city.name === city)}/>
        </div>
      </li>
    )
  );
};

FavoritesCities.propTypes = {
  offers: PropTypes.array
};

export default FavoritesCities;
