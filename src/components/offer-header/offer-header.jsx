import React from 'react';
import PropTypes from 'prop-types';

const OfferHeader = ({name, isFavorite}) => {
  return (
    <div className="property__name-wrapper">
      <h1 className="property__name">
        {name}
      </h1>
      <button
        className={`button property__bookmark-button ${isFavorite ?
          `property__bookmark-button--active` :
          ``}`
        }
        type="button"
      >
        <svg className="place-card__bookmark-icon" width="31" height="33">
          <use xlinkHref="#icon-bookmark"></use>
        </svg>
        <span className="visually-hidden">{isFavorite ? `In` : `To`} bookmarks</span>
      </button>
    </div>
  );
};

OfferHeader.propTypes = {
  name: PropTypes.string.isRequired,
  isFavorite: PropTypes.bool.isRequired
};

export default OfferHeader;
