import React from 'react';
import * as Type from '../../prop-types';
import {upperCaseFirstLetter} from '../../utils';


const OfferFeatures = ({type, bedroomAmount, guestAmount}) => {
  return (
    <ul className="property__features">
      <li className="property__feature property__feature--entire">
        {upperCaseFirstLetter(type)}
      </li>
      <li className="property__feature property__feature--bedrooms">
        {bedroomAmount} Bedrooms
      </li>
      <li className="property__feature property__feature--adults">
        Max {guestAmount} adults
      </li>
    </ul>
  );
};

OfferFeatures.propTypes = {
  type: Type.OFFER_TYPE.isRequired,
  bedroomAmount: Type.OFFER_BEDROOMS_COUNT,
  guestAmount: Type.OFFER_GUEST_COUNT,
};


export default OfferFeatures;
