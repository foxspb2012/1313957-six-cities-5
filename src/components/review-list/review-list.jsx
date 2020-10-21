import React from "react";
import PropTypes from 'prop-types';
import ReviewItem from '../review-item/review-item';

const ReviewsList = (props) => {
  const {reviews} = props;
  return (
    <React.Fragment>
      {reviews.map((review) =>
        <ReviewItem review={review} key={review.comment}/>
      )}
    </React.Fragment>
  );
};

ReviewsList.propTypes = {
  reviews: PropTypes.array.isRequired
};

export default ReviewsList;
