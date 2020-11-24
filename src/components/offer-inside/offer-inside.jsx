import React from 'react';
import PropTypes from 'prop-types';

const OfferInside = ({features = []}) => {
  return (
    <div className="property__inside">
      <h2 className="property__inside-title">What&apos;s inside</h2>
      <ul className="property__inside-list">
        {features.map((it, index) => (
          <li key={`${index}-${it}`} className="property__inside-item">
            {it}
          </li>
        ))}
      </ul>
    </div>
  );
};

OfferInside.propTypes = {
  features: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default OfferInside;
