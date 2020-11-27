import createAPI from '../../api';
import MockAdapter from 'axios-mock-adapter';
import {ServerURL, ServerResponseStatus} from '../../const';
import {ActionType, ActionCreator, Operation, reducer} from './reviews';
import {convertReviewsFromServerFormat, convertReviewToServerFormat} from '../../adapters';

const reviews = [{
  id: 0,
  date: `2020-10-06`,
  text: `Good`,
  rating: 4,
  user: {
    name: `User`,
    avatar: `img/avatar-angelina.jpg`,
    isPro: false,
    id: 1
  }
},
{
  id: 1,
  date: `2020-10-06`,
  text: `Good`,
  rating: 5,
  user: {
    name: `User`,
    avatar: `img/avatar-max.jpg`,
    isPro: true,
    id: 2
  }
}
];
const reviewsMock = {
  reviews: [],
  isReviewSending: false,
  error: null
};

const error = `error`;

describe(`reviewsActionCreator`, () => {
  it(`should create SET_REVIEWS action`, () => {
    expect(ActionCreator.setReviews(reviews)).toEqual({
      type: ActionType.SET_REVIEWS,
      payload: reviews
    });
  });

  it(`should create SET_REVIEW_SENDING_STATUS action`, () => {
    const isReviewSending = true;
    expect(ActionCreator.setReviewSendingStatus(isReviewSending)).toEqual({
      type: ActionType.SET_REVIEW_SENDING_STATUS,
      payload: isReviewSending
    });
  });

  it(`should create SET_ERROR action reviews`, () => {
    expect(ActionCreator.setError(error)).toEqual({
      type: ActionType.SET_ERROR,
      payload: error
    });
  });

  it(`should create REMOVE_ERROR action reviews`, () => expect(ActionCreator.removeError()).toEqual({type: ActionType.REMOVE_ERROR}));
});

describe(`reviewsOperation`, () => {
  const api = createAPI(() => { });
  const offerId = 4;

  it(`should load reviews`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    apiMock.onGet(`${ServerURL.REVIEWS}/${offerId}`).reply(ServerResponseStatus.OK, reviews);
    return Operation.loadReviews(offerId)(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {type: ActionType.SET_REVIEWS, payload: convertReviewsFromServerFormat(reviews)});
      });
  });

  it(`should send reviews`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    apiMock.onPost(`${ServerURL.REVIEWS}/${offerId}`, convertReviewToServerFormat(reviews[0])).reply(ServerResponseStatus.OK, reviews);
    return Operation.sendReview(offerId, reviews[0])(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(3);
        expect(dispatch).toHaveBeenNthCalledWith(1, {type: ActionType.SET_REVIEW_SENDING_STATUS, payload: true});
        expect(dispatch).toHaveBeenNthCalledWith(2, {type: ActionType.SET_REVIEWS, payload: convertReviewsFromServerFormat(reviews)});
        expect(dispatch).toHaveBeenNthCalledWith(3, {type: ActionType.SET_REVIEW_SENDING_STATUS, payload: false});
      });
  });
});

describe(`reviewsReducer`, () => {
  it(`should return initialState review`, () => expect(reducer(undefined, {})).toEqual(reviewsMock));

  it(`should set reviews`, () => {
    expect(reducer({reviews: []}, {type: ActionType.SET_REVIEWS, payload: reviews})).toEqual({reviews});
  });

  it(`should set reviewSendingStatus`, () => {
    const isReviewSending = true;
    expect(reducer({isReviewSending: false}, {type: ActionType.SET_REVIEW_SENDING_STATUS, payload: true})).toEqual({isReviewSending});
  });

  it(`should set error review`, () => {
    expect(reducer({error: null}, {type: ActionType.SET_ERROR, payload: error})).toEqual({error});
  });

  it(`should remove error`, () => expect(reducer({error}, {type: ActionType.REMOVE_ERROR})).toEqual({error: null}));
});
