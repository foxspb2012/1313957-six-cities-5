import React from 'react';
import {connect} from 'react-redux';
import Review from '../review/review';
import * as Type from '../../prop-types';
import {AuthorizationStatus} from '../../const';
import ReviewForm from '../review-form/review-form';
import withReviewData from '../../hocs/with-review-data';
import {getAuthorizationStatus} from '../../store/user/selectors';
import {Operation as ReviewsOperation} from '../../store/reviews/reviews';
import {getReviews, getReviewSendingStatus, getError} from '../../store/reviews/selectors';

const ReviewFormWithReviewData = withReviewData(ReviewForm);

const MAX_REVIEW_AMOUNT = 10;

const ReviewList = (props) => {
  const {
    authorizationStatus,
    reviews,
    isReviewFormDisabled,
    reviewFormError,
    onReviewFormSubmit
  } = props;

  const reviewForm = (
    <ReviewFormWithReviewData
      disabled={isReviewFormDisabled}
      error={reviewFormError}
      onSubmit={onReviewFormSubmit}/>
  );

  const slicedReviews = reviews.slice(0, MAX_REVIEW_AMOUNT);

  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">
        Reviews &middot; <span className="reviews__amount">{slicedReviews.length}</span>
      </h2>
      <ul className="reviews__list">
        {slicedReviews.map((review) => <Review key={review.id} {...review}/>)}
      </ul>
      {authorizationStatus === AuthorizationStatus.AUTHORIZED ? reviewForm : null}
    </section>
  );
};

ReviewList.propTypes = {
  authorizationStatus: Type.AUTHORIZATION_STATUS,
  reviews: Type.REVIEWS_LIST,
  isReviewFormDisabled: Type.FLAG,
  reviewFormError: Type.REVIEW_ERROR,
  onReviewFormSubmit: Type.FUNCTION,
};

const mapStateToProps = (state) => ({
  authorizationStatus: getAuthorizationStatus(state),
  reviews: getReviews(state),
  isReviewFormDisabled: getReviewSendingStatus(state),
  reviewFormError: getError(state),
});

const mapDispatchToProps = (dispatch, {id}) => ({
  onReviewFormSubmit: (review) => dispatch(ReviewsOperation.sendReview(id, review))
});

export {ReviewList};
export default connect(mapStateToProps, mapDispatchToProps)(ReviewList);
