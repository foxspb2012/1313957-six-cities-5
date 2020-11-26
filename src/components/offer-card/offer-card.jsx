import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {AppRoute} from '../../const';
import * as Type from '../../prop-types';
import {upperCaseFirstLetter} from '../../utils';
import OfferMark from '../offer-mark/offer-mark';
import StarRating from '../star-rating/star-rating';
import OfferPrice from '../offer-price/offer-price';
import {OffersListType} from '../offer-list/offer-list';
import {ActionCreator as AppActionCreator} from '../../store/app/app';
import {Operation as OffersOperation} from '../../store/offers/offers';
import BookmarkButton, {BookmarkButtonType} from '../bookmark-btn/bookmark-btn';

const TypeName = {
  OFFER_PRICE: `place-card`,
  RAITING_STARS: `place-card__stars`,
  MARK: `place-card`,
};

const getClassName = (type) => {
  switch (type) {
    case OffersListType.MAIN:
      return {
        card: `cities__place-card`,
        image: `cities__image-wrapper`,
      };
    case OffersListType.NEAR:
      return {
        card: `near-places__card`,
        image: `near-places__image-wrapper`,
      };
    case OffersListType.FAVORITES:
      return {
        card: `favorites__card`,
        image: `favorites__image-wrapper`,
      };
    default:
      return {
        card: ``,
        image: ``,
      };
  }
};

const getImageSize = (type) => {
  switch (type) {
    case OffersListType.FAVORITES:
      return {width: 150, height: 110};
    default:
      return {width: 260, height: 200};
  }
};

const OfferCard = (props) => {
  const {offer, typeClass, onActiveOfferChange, onOfferFavoritenessChange} = props;
  const {id, type, name,
    photos: [src],
    price,
    rating,
    isPremium,
    isFavorite,
  } = offer;
  const className = getClassName(typeClass);
  const imageSize = getImageSize(typeClass);

  return (
    <article className={`place-card ${className.card}`} onMouseEnter={() => onActiveOfferChange(id)}>
      {isPremium && <OfferMark typeClass={TypeName.MARK}/>}
      <div className={`place-card__image-wrapper ${className.image}`}>
        <Link to={`${AppRoute.OFFER}/${id}`}>
          <img className="place-card__image" src={src} width={imageSize.width} height={imageSize.height} alt={name} />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <OfferPrice
            typeClass={TypeName.OFFER_PRICE}
            price={price}
          />
          <BookmarkButton
            typeClass={BookmarkButtonType.OFFER_ITEM}
            isActive={isFavorite}
            onClick={() => onOfferFavoritenessChange(id, isFavorite)}
          />
        </div>
        <StarRating
          typeClass={TypeName.RAITING_STARS}
          value={rating}
        />
        <h2 className="place-card__name">
          <Link to={`${AppRoute.OFFER}/${id}`}>{name}</Link>
        </h2>
        <p className="place-card__type">{upperCaseFirstLetter(type)}</p>
      </div>
    </article>
  );
};

OfferCard.propTypes = {
  offer: Type.OFFER.isRequired,
  typeClass: Type.TYPE_NAME.isRequired,
  onActiveOfferChange: Type.FUNCTION.isRequired,
  onOfferFavoritenessChange: Type.FUNCTION.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  onActiveOfferChange: (activeOffer) => dispatch(AppActionCreator.setActiveOffer(activeOffer)),
  onOfferFavoritenessChange: (offerId, status) => dispatch(OffersOperation.toggleFavoriteness(offerId, status)),
});

export {OfferCard};
export default connect(null, mapDispatchToProps)(OfferCard);
