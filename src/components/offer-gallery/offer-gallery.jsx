import React from 'react';
import * as Type from '../../prop-types';

const OfferGallery = ({photos = []}) => {
  return (
    <div className="property__gallery-container container">
      <div className="property__gallery">
        {photos.slice(0, 6).map((image, index) => (
          <div className="property__image-wrapper" key={`gallery-item${index}`} >
            <img className="property__image" src={image} alt="Photo studio" />
          </div>
        ))}
      </div>
    </div>
  );
};

OfferGallery.propTypes = {
  photos: Type.OFFER_IMAGES,
};

export default OfferGallery;
