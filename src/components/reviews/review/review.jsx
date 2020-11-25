import React from "react";
import {dateConverter} from '../../../utils';
import * as Type from '../../../prop-types';
import StarRating from "../../star-rating/star-rating";

const RAITING_STARS_TYPE = `reviews__stars`;

const Review = (props) => {
  const {date, text, rating, user: {name, avatar}} = props;

  const dateDescription = dateConverter.format(new Date(date));

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={avatar} alt="User photo" width="54" height="54"/>
        </div>
        <span className="reviews__user-name">{name}</span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <StarRating
            typeClass={RAITING_STARS_TYPE}
            value={rating}
          />
        </div>
        <p className="reviews__text">{text}</p>
        <time className="reviews__time" dateTime={date}>{dateDescription}</time>
      </div>
    </li>
  );
};

Review.propTypes = {
  date: Type.REVIEW_DATE,
  text: Type.REVIEW_TEXT,
  rating: Type.REVIEW_RATING,
  user: Type.REVIEW_USER
};

export default Review;
