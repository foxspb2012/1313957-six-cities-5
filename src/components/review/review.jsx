import React from 'react';
import * as Type from '../../prop-types';
import {dateConverter} from '../../utils';
import StarRating from '../star-rating/star-rating';

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
        <StarRating blockClassName={`reviews`} value={rating} isValueShown={false}/>
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
