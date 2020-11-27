import React from 'react';
import * as Type from '../../prop-types';
import Reviews from '../reviews/reviews';
import {withLoad} from '../../hocs/with-load';
import OfferMark from '../offer-mark/offer-mark';
import OfferHost from '../offer-host/offer-host';
import StarRating from '../star-rating/star-rating';
import OfferPrice from '../offer-price/offer-price';
import OfferHeader from '../offer-header/offer-header';
import OfferInside from '../offer-inside/offer-inside';
import OfferGallery from '../offer-gallery/offer-gallery';
import OfferFeatures from '../offer-features/offer-features';

const TypeName = {
  OFFER_PRICE: `property`,
  RAITING_STARS: `property__stars`,
  MARK: `property`,
};

const OfferPageContent = ({offer = {}}) => {
  const {photos, isPremium, name, isFavorite, rating, type, bedroomAmount, guestAmount, price, features, host, description} = offer;

  return (
    <React.Fragment>
      <OfferGallery photos={photos}/>
      <div className="property__container container">
        <div className="property__wrapper">
          {isPremium && <OfferMark typeClass={TypeName.MARK}/>}
          <OfferHeader
            name={name}
            isFavorite={isFavorite}
          />
          <div className="property__rating rating">
            <StarRating
              typeClass={TypeName.RAITING_STARS}
              value={rating}
            />
          </div>
          <OfferFeatures
            type={type}
            bedroomAmount={bedroomAmount}
            guestAmount={guestAmount}
          />
          <OfferPrice
            price={price}
            typeClass={TypeName.OFFER_PRICE}
          />
          {features.length && <OfferInside features={features}/>}
          <OfferHost
            host={host}
            description={description} />
          <Reviews/>
        </div>
      </div>
    </React.Fragment>
  );
};

OfferPageContent.propTypes = {
  offer: Type.OFFER.isRequired,
};

export default withLoad(OfferPageContent);
