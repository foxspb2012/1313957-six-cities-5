import React from 'react';
import {connect} from 'react-redux';
import * as Type from '../../prop-types';
import {getOneOffer} from '../../store/offers/selectors';
import {Operation as OffersOperation} from '../../store/offers/offers';
import BookmarkButton, {BookmarkButtonType} from '../bookmark-btn/bookmark-btn';

const OfferHeader = ({name, isFavorite, onOfferFavoritenessChange, offer}) => {
  const {id} = offer;

  return (
    <div className="property__name-wrapper">
      <h1 className="property__name">
        {name}
      </h1>
      <BookmarkButton
        typeClass={BookmarkButtonType.OFFER}
        isActive={isFavorite}
        onClick={() => onOfferFavoritenessChange(id, isFavorite)}
      />
    </div>
  );
};

OfferHeader.propTypes = {
  offer: Type.OFFER,
  name: Type.OFFER_NAME,
  isFavorite: Type.OFFER_IS_FAVORITE,
  onOfferFavoritenessChange: Type.FUNCTION,
};

const mapStateToProps = (state) => ({
  offer: getOneOffer(state),
});

const mapDispatchToProps = (dispatch) => ({
  onOfferFavoritenessChange: (offerId, status) => dispatch(OffersOperation.toggleFavoriteness(offerId, status)),
});

export {OfferHeader};
export default connect(mapStateToProps, mapDispatchToProps)(OfferHeader);
