import {NameSpace} from '../../const';
import {createSelector} from 'reselect';
import {takesLastReviews} from '../../utils';

export const getReviews = (state) => state[NameSpace.REVIEWS].reviews;

export const getReviewSendingStatus = (state) => state[NameSpace.REVIEWS].isReviewSending;

export const getError = (state) => state[NameSpace.REVIEWS].error;

export const getlastReviews = createSelector(
    getReviews,
    (reviews) => takesLastReviews(reviews)
);
