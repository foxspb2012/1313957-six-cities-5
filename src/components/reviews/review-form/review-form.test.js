import React from 'react';
import {Provider} from 'react-redux';
import {ReviewForm} from './review-form';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';

const NameSpace = {
  USER: `USER`,
  REVIEWS: `REVIEWS`,
};

const mockStateWithAuthorization = {
  [NameSpace.REVIEWS]: {
    reviews: [],
    isReviewSending: false,
    error: null
  },
  [NameSpace.USER]: {
    authorizationStatus: `AUTHORIZED`,
    email: null
  }
};

const mockStateWithIsReviewSending = {
  [NameSpace.REVIEWS]: {
    reviews: [],
    isReviewSending: true,
    error: null
  },
  [NameSpace.USER]: {
    authorizationStatus: `AUTHORIZED`,
    email: null
  }
};

const mockStateWithoutAuthorization = {
  [NameSpace.REVIEWS]: {
    reviews: [],
    isReviewSending: false,
    error: null
  },
  [NameSpace.USER]: {
    authorizationStatus: `UNAUTHORIZED`,
    email: null
  }
};

const testing = () => {};

describe(`Should ReviewForm render correctly`, () => {
  it(`Should ReviewForm render correctly with authorization`, () => {
    const mockStore = configureStore();
    const store = mockStore(mockStateWithAuthorization);
    const tree = renderer
      .create(
          <Provider store={store}>
            <ReviewForm
              onReviewFormSubmit={testing}
            />
          </Provider>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Should ReviewForm render correctly with isReviewSending`, () => {
    const mockStore = configureStore();
    const store = mockStore(mockStateWithIsReviewSending);
    const tree = renderer
      .create(
          <Provider store={store}>
            <ReviewForm
              onReviewFormSubmit={testing}
            />
          </Provider>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Should ReviewForm render correctly without authorization`, () => {
    const mockStore = configureStore();
    const store = mockStore(mockStateWithoutAuthorization);
    const tree = renderer
      .create(
          <Provider store={store}>
            <ReviewForm
              onReviewFormSubmit={testing}
            />
          </Provider>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
