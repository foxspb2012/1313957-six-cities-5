import React from 'react';
import * as Type from '../../prop-types';

const OfferHost = ({host, description}) => {
  const {name, avatar, isPro} = host;

  return (
    <div className="property__host">
      <h2 className="property__host-title">Meet the host</h2>
      <div className="property__host-user user">
        <div
          className={`property__avatar-wrapper  user__avatar-wrapper ${isPro ?
            `property__avatar-wrapper--pro` :
            ``}`}
        >
          <img className="property__avatar user__avatar" src={avatar} width="74" height="74" alt="Host avatar"></img>
        </div>
        <span className="property__user-name">
          {name}
        </span>
      </div>
      <div className="property__description">
        <p className="property__text">
          {description}
        </p>
      </div>
    </div>
  );
};

OfferHost.propTypes = {
  host: Type.OFFER_HOST,
  description: Type.OFFER_DESCRIPTION,
};

export default OfferHost;
