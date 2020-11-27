import React from 'react';
import OfferList, {OffersListType} from '../offer-list/offer-list';
import * as Type from '../../prop-types';

const FavoritesItem = (props) => {
  const {сityOffers, city, isLoadedFavoritesOffers} = props;

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
        <OfferList
          typeClass={OffersListType.FAVORITES}
          offers={сityOffers}
          isLoaded={isLoadedFavoritesOffers}/>
      </div>
    </li>
  );
};

FavoritesItem.propTypes = {
  city: Type.CITY_NAME,
  сityOffers: Type.OFFERS_LIST,
  isLoadedFavoritesOffers: Type.FLAG,
};


export default FavoritesItem;
