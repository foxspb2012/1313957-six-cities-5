import React from 'react';
import * as Type from '../../prop-types';
import {withLoad} from '../../hocs/with-load';
import OfferCard from '../offer-card/offer-card';

const BASE_CLASS = `places__list`;
const OffersListType = {
  MAIN: `MAIN`,
  NEAR: `NEAR`,
  FAVORITES: `FAVORITES`,
};

const getClassName = (type) => {
  switch (type) {
    case OffersListType.MAIN:
      return `${BASE_CLASS} cities__places-list tabs__content`;
    case OffersListType.NEAR:
      return `${BASE_CLASS} near-places__list`;
    case OffersListType.FAVORITES:
      return `favorites__places`;
    default:
      return BASE_CLASS;
  }
};

const OfferList = ({typeClass, offers = []}) => {

  return (
    <div className={getClassName(typeClass)}>
      {offers.map((offer) => (
        <OfferCard
          key={offer.id}
          offer={offer}
          typeClass={typeClass}
        />
      ))}
    </div>
  );
};

OfferList.propTypes = {
  typeClass: Type.TYPE_NAME,
  offers: Type.OFFERS_LIST,
};

export {OffersListType};
export default withLoad(OfferList);
