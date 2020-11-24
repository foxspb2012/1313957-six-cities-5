import React from 'react';
import PropTypes from 'prop-types';
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
  type: PropTypes.string.isRequired,
  bedroomAmount: PropTypes.number.isRequired,
  guestAmount: PropTypes.number.isRequired
};


export default OfferFeatures;
