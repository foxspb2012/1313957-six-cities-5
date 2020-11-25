import React from 'react';
import {MAX_RATING} from '../../const';
import * as Type from '../../prop-types';

const StarRating = ({typeClass, value}) => {
  return (
    <div className={`rating__stars ${typeClass}`}>
      <span style={{width: `${100 / MAX_RATING * Math.round(value)}%`}}></span>
      <span className="visually-hidden">Rating</span>
    </div>
  );
};

StarRating.propTypes = {
  typeClass: Type.TYPE_NAME,
  value: Type.REVIEW_RATING,
};

export default StarRating;
