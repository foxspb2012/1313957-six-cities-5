import React from 'react';
import * as Type from '../../prop-types';

const OfferPrice = (props) => {
  const {price, typeClass} = props;

  return (
    <div className={`${typeClass}__price`}>
      <b className={`${typeClass}__price-value`}>&euro;{price}</b>
      <span className={`${typeClass}__price-text`}>&nbsp;night</span>
    </div>
  );
};

OfferPrice.propTypes = {
  price: Type.OFFER_PRICE,
  typeClass: Type.TYPE_NAME
};

export default OfferPrice;
