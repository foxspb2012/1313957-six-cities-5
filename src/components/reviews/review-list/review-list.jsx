import React from 'react';
import {connect} from 'react-redux';
import Review from '../review/review';
import * as Type from '../../../prop-types';
import {getlastReviews} from '../../../store/reviews/selectors';

const ReviewList = (props) => {
  const {lastReviews} = props;

  return (
    <ul className="reviews__list">
      {lastReviews.map((review) => <Review key={review.id} {...review}/>)}
    </ul>
  );
};

ReviewList.propTypes = {
  lastReviews: Type.REVIEWS_LIST,
};

const mapStateToProps = (state) => ({
  lastReviews: getlastReviews(state),
});

export {ReviewList};
export default connect(mapStateToProps)(ReviewList);
