import React from 'react';
import * as Type from '../../prop-types';

const renderFeatures = (features) => {
  return (
    <>
      <h2 className="property__inside-title">What&apos;s inside</h2>
      <ul className="property__inside-list">
        {features.map((it, index) => (
          <li key={`${index}-${it}`} className="property__inside-item">
            {it}
          </li>
        ))}
      </ul>
    </>
  );
};

const OfferInside = ({features = []}) => {
  return (
    <div className="property__inside">
      {features ? renderFeatures(features) : null}
    </div>
  );
};

OfferInside.propTypes = {
  features: Type.OFFER_FEATURES,
};

export default OfferInside;
