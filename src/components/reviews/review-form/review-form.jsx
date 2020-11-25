import React, {Fragment} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import * as Type from '../../../prop-types';
import ErrorMessage from '../../message/message';
import {TextLengthLimit, STARS} from '../../../const';
import withReviewData from '../../../hocs/with-review-data';
import {Operation as ReviewsOperation} from '../../../store/reviews/reviews';
import {getReviewSendingStatus, getError} from '../../../store/reviews/selectors';

const ReviewForm = (props) => {
  const {disabled, error, text, rating: activeRating, onTextChange, onRatingChange, onReviewFormSubmit, onFormValuesReset} = props;

  const stars = STARS.map(({value, title}, index) => (
    <Fragment key={`star-review-${index}`}>

      <input
        className="form__rating-input visually-hidden"
        type="radio"
        name="rating"
        value={value}
        id={`${value}-stars`}
        checked={value === activeRating}
        required
        disabled={disabled}
        onChange={() => onRatingChange(value)}/>

      <label
        className="reviews__rating-label form__rating-label"
        title={title}
        htmlFor={`${value}-stars`}>
        <svg className="form__star-image" width="37" height="33">
          <use xlinkHref="#icon-star"/>
        </svg>
      </label>

    </Fragment>
  ));

  const isSubmitButtonDisabled = (
    disabled || !activeRating || !text || text.length < TextLengthLimit.MIN || text.length > TextLengthLimit.MAX
  );

  return (
    <form
      className="reviews__form form"
      action="#"
      method="post"
      onSubmit={(evt) => {
        evt.preventDefault();
        onReviewFormSubmit({text, rating: activeRating});
        onFormValuesReset();
      }}>
      {error && <ErrorMessage text={error}/>}
      <label className="reviews__label form__label" htmlFor="text">Your review</label>
      <div className="reviews__rating-form form__rating">{stars}</div>
      <textarea
        className="reviews__textarea form__textarea"
        name="text"
        value={text}
        minLength={TextLengthLimit.MIN}
        maxLength={TextLengthLimit.MAX}
        placeholder="Tell how was your stay, what you like and what can be improved"
        id="text"
        required
        disabled={disabled}
        onChange={(evt) => onTextChange(evt.target.value)}/>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay
          with at least <b className="reviews__text-amount">{TextLengthLimit.MIN} characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={isSubmitButtonDisabled}>
          Submit
        </button>
      </div>
    </form>
  );
};

ReviewForm.propTypes = {
  id: Type.ID,
  disabled: Type.FLAG,
  error: Type.REVIEW_ERROR,
  text: Type.REVIEW_TEXT,
  rating: Type.REVIEW_RATING,
  onTextChange: Type.FUNCTION,
  onRatingChange: Type.FUNCTION,
  onReviewFormSubmit: Type.FUNCTION,
  onFormValuesReset: Type.FUNCTION,
};

const mapStateToProps = (state) => ({
  disabled: getReviewSendingStatus(state),
  error: getError(state),
});

const mapDispatchToProps = (dispatch, {match: {params: {offerId}}}) => ({
  onReviewFormSubmit: (review) => dispatch(ReviewsOperation.sendReview(offerId, review))
});

export {ReviewForm};
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(withReviewData(ReviewForm)));
