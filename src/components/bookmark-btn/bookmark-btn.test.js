import React from 'react';
import renderer from 'react-test-renderer';
import BookmarkButton from './bookmark-btn';

const TYPE = `place-card`;

const testing = () => {};

describe(`Should BookmarkButton render correctly`, () => {
  it(`Should BookmarkButton render correctly with isActive`, () => {
    const tree = renderer
      .create(
          <BookmarkButton
            isActive={true}
            typeClass={TYPE}
            onClick={testing}
          />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Should BookmarkButton render correctly without isActive`, () => {
    const tree = renderer
      .create(
          <BookmarkButton
            typeClass={TYPE}
            onClick={testing}
          />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
