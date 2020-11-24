import {NameSpace} from '../../const';

export const getError = (state) => state[NameSpace.REVIEWS].error;

export const getReviews = (state) => state[NameSpace.REVIEWS].reviews;

export const getReviewSendingStatus = (state) => state[NameSpace.REVIEWS].isReviewSending;

