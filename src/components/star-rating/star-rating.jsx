import React from 'react';
import {MAX_RATING} from '../../const';
import * as Type from '../../prop-types';

const StarRating = ({blockClassName, value, isValueShown}) => {
  const ratingClassName = `${blockClassName}__rating rating`;
  const starsClassName = `${blockClassName}__stars rating__stars`;
  const valueClassName = `${blockClassName}__rating-value rating__value`;
  const starsStyle = {width: `${100 / MAX_RATING * Math.round(value)}%`};
  const valueElement = <span className={valueClassName}>{value}</span>;

  return (
    <div className={ratingClassName}>
      <div className={starsClassName}>
        <span style={starsStyle}/>
        <span className="visually-hidden">Rating</span>
      </div>
      {isValueShown && valueElement}
    </div>
  );
};

StarRating.propTypes = {
  blockClassName: Type.BLOCK_CLASS_NAME,
  value: Type.REVIEW_RATING,
  isValueShown: Type.FLAG,
};

export default StarRating;
