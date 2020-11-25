import React from 'react';
import renderer from 'react-test-renderer';
import StarRating from './star-rating';

const RAITING_TYPE = `place-card__stars`;

describe(`Should StarRating render correctly`, () => {
  it(`Should StarRating render correctly without typeClass and value 0`, () => {
    const tree = renderer
      .create(
          <StarRating
            value={0}
          />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Should StarRating render correctly without typeClass and value 2.5`, () => {
    const tree = renderer
      .create(
          <StarRating
            value={2.5}
          />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Should StarRating render correctly without typeClass and value 5`, () => {
    const tree = renderer
      .create(
          <StarRating
            value={5}
          />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Should StarRating render correctly with typeClass and value 0`, () => {
    const tree = renderer
      .create(
          <StarRating
            typeClass={RAITING_TYPE}
            value={0}
          />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Should StarRating render correctly with typeClass and value 2.5`, () => {
    const tree = renderer
      .create(
          <StarRating
            typeClass={RAITING_TYPE}
            value={2.5}
          />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Should StarRating render correctly with typeClass and value 5`, () => {
    const tree = renderer
      .create(
          <StarRating
            typeClass={RAITING_TYPE}
            value={5}
          />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
