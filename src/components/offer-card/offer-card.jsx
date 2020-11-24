import React from 'react';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../const';
import {upperCaseFirstLetter} from '../../utils';
import {connect} from 'react-redux';
import {ActionCreator as AppActionCreator} from '../../store/app/app';
import * as Type from '../../prop-types';

const OfferCard = (props) => {

  const {id, type, name, photos: [src], price, isPremium, onActiveOfferChange} = props;

  const premiumMark = <div className="place-card__mark"><span>Premium</span></div>;

  return (
    <article className="cities__place-card place-card" onMouseEnter={() => onActiveOfferChange(id)}>
      {isPremium && premiumMark}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={`${AppRoute.OFFER}/${id}`}>
          <img className="place-card__image" src={src} width="260" height="200" alt={name} />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button button" type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `80%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`${AppRoute.OFFER}/${id}`}>{name}</Link>
        </h2>
        <p className="place-card__type">{upperCaseFirstLetter(type)}</p>
      </div>
    </article>
  );
};

const mapDispatchToProps = (dispatch) => ({
  onActiveOfferChange: (activeOffer) => dispatch(AppActionCreator.setActiveOffer(activeOffer))
});

OfferCard.propTypes = {
  id: Type.ID,
  isPremium: Type.OFFER_IS_PREMIUM,
  name: Type.OFFER_NAME,
  photos: Type.OFFER_IMAGES,
  price: Type.OFFER_PRICE,
  type: Type.OFFER_TYPE,
  onActiveOfferChange: Type.FUNCTION,
};

export {OfferCard};
export default connect(null, mapDispatchToProps)(OfferCard);
