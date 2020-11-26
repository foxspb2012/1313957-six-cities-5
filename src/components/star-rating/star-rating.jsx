import React from 'react';
import {MAX_RATING} from '../../const';
import * as Type from '../../prop-types';

const StarRating = ({typeClass, value}) => {
  const valueElement = <span className="property__rating-value rating__value">{value}</span>;
  return (
    <React.Fragment>
      <div className={`rating__stars ${typeClass}`}>
        <span style={{width: `${100 / MAX_RATING * Math.round(value)}%`}}></span>
        <span className="visually-hidden">Rating</span>
      </div>
      {typeClass === `property__stars` ? valueElement : null}
    </React.Fragment>
  );
};

StarRating.propTypes = {
  typeClass: Type.TYPE_NAME,
  value: Type.REVIEW_RATING,
};

export default StarRating;
