import React from 'react';
import * as Type from '../../prop-types';

const BookmarkButtonType = {
  OFFER: `OFFER`,
  OFFER_ITEM: `OFFER_ITEM`,
};

const Prefix = {
  [BookmarkButtonType.OFFER]: `property`,
  [BookmarkButtonType.OFFER_ITEM]: `place-card`,
};

const getImageSize = (type) => {
  switch (type) {
    case BookmarkButtonType.OFFER:
      return {width: 31, height: 33};
    case BookmarkButtonType.OFFER_ITEM:
      return {width: 18, height: 19};
    default:
      return {width: 18, height: 19};
  }
};

const BookmarkButton = ({typeClass, isActive, onClick}) => {

  const text = isActive ? `In bookmarks` : `To bookmarks`;
  const prefix = Prefix[typeClass];
  const imageSize = getImageSize(typeClass);
  return (
    <button
      className={`${prefix}__bookmark-button button ${isActive ?
        `${prefix}__bookmark-button--active` :
        ``}`
      }
      type="button"
      onClick={onClick}>
      <svg className="place-card__bookmark-icon" width={imageSize.width} height={imageSize.height}>
        <use xlinkHref="#icon-bookmark"/>
      </svg>
      <span className="visually-hidden">{text}</span>
    </button>
  );
};

BookmarkButton.propTypes = {
  typeClass: Type.TYPE_NAME.isRequired,
  isActive: Type.FLAG.isRequired,
  onClick: Type.FUNCTION.isRequired,
};

export {BookmarkButtonType};
export default BookmarkButton;
