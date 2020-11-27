import React from 'react';
import {extend} from '../../../utils';
import {ReviewForm} from './review-form';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

const testing = () => { };
const testMocks = {
  disabled: false,
  text: `good`,
  rating: 4,
  onTextChange: testing,
  onRatingChange: testing,
  onReviewFormSubmit: testing,
  onFormValuesReset: testing
};

describe(`e2e test: ReviewForm component`, () => {
  it(`should call onTextChange with text`, () => {
    const text = `good`;
    const onTextChange = jest.fn();

    shallow(<ReviewForm {...extend(testMocks, {onTextChange})}/>)
      .find(`.form__textarea`).simulate(`change`, {target: {value: text}});

    expect(onTextChange).toHaveBeenCalledTimes(1);
    expect(onTextChange).toHaveBeenNthCalledWith(1, text);
  });

  it(`should call onRatingChange with rating`, () => {
    const rating = 4;
    const onRatingChange = jest.fn();

    shallow(<ReviewForm {...extend(testMocks, {onRatingChange})}/>)
      .find(`.form__rating-input[value=${rating}]`).simulate(`change`);

    expect(onRatingChange).toHaveBeenCalledTimes(1);
    expect(onRatingChange).toHaveBeenNthCalledWith(1, rating);
  });

  it(`should call onReviewFormSubmit with data`, () => {
    const text = `good`;
    const rating = 4;
    const preventDefault = jest.fn();
    const onReviewFormSubmit = jest.fn();

    shallow(<ReviewForm {...extend(testMocks, {text, rating, onReviewFormSubmit})}/>)
      .find(`.form`).simulate(`submit`, {preventDefault});

    expect(preventDefault).toHaveBeenCalledTimes(1);
    expect(onReviewFormSubmit).toHaveBeenCalledTimes(1);
    expect(onReviewFormSubmit).toHaveBeenNthCalledWith(1, {text, rating});
  });
});
