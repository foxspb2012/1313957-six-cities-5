import React from 'react';
import {connect} from 'react-redux';
import * as Type from '../../prop-types';
import {AuthorizationStatus} from '../../const';
import ReviewList from '../reviews/review-list/review-list';
import ReviewForm from '../reviews/review-form/review-form';
import {getlastReviews} from '../../store/reviews/selectors';
import {getAuthorizationStatus} from '../../store/user/selectors';

const Reviews = (props) => {
  const {authorizationStatus, lastReviews} = props;

  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">
        Reviews &middot; <span className="reviews__amount">{lastReviews.length}</span>
      </h2>
      <ReviewList/>
      {authorizationStatus === AuthorizationStatus.AUTHORIZED ? <ReviewForm/> : null}
    </section>
  );
};

Reviews.propTypes = {
  authorizationStatus: Type.AUTHORIZATION_STATUS.isRequired,
  lastReviews: Type.REVIEWS_LIST,
};

const mapStateToProps = (state) => ({
  authorizationStatus: getAuthorizationStatus(state),
  lastReviews: getlastReviews(state),
});

export {Reviews};
export default connect(mapStateToProps)(Reviews);
