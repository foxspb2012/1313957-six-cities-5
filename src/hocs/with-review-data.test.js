import React from 'react';
import * as Type from '../prop-types';
import renderer from 'react-test-renderer';
import withReviewData from './with-review-data';

const testing = () => { };
const flag = true;

const MockComponent = (props) => {
  const {children} = props;

  return (
    <React.Fragment>
      {children}
    </React.Fragment>
  );
};

MockComponent.propTypes = {
  children: Type.MOCK_COMPONENT.isRequired,
};

const MockComponentWrapped = withReviewData(MockComponent);

describe(`withReviewData render correctly`, () => {
  it(`withReviewData render correctly ReviewForm with text and rating`, () => {
    const tree = renderer.create((
      <MockComponentWrapped
        text={`A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`}
        rating={4.6}
        id={1}
        disabled={flag}
        error={`error`}
        onTextChange={testing}
        onRatingChange={testing}
        onReviewFormSubmit={testing}
        onFormValuesReset={testing}
      >
        <React.Fragment />
      </MockComponentWrapped>
    )).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`withReviewData render correctly ReviewForm without text and rating`, () => {
    const tree = renderer.create((
      <MockComponentWrapped
        id={1}
        disabled={flag}
        error={`error`}
        onTextChange={testing}
        onRatingChange={testing}
        onReviewFormSubmit={testing}
        onFormValuesReset={testing}
      >
        <React.Fragment />
      </MockComponentWrapped>
    )).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
