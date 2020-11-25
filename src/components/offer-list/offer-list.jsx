import React from 'react';
import * as Type from '../../prop-types';
import {withLoad} from '../../hocs/with-load';
import OfferCard from '../offer-card/offer-card';

const OfferList = ({offers, blockClassName}) => {

  return (
    <div className={`places__list ${blockClassName}`}>
      {offers.map((offer) => (
        <OfferCard
          key={offer.id}
          {...offer}
        />
      ))}
    </div>
  );
};

OfferList.propTypes = {
  offers: Type.OFFERS_LIST,
  blockClassName: Type.BLOCK_CLASS_NAME,
};

export default withLoad(OfferList);
