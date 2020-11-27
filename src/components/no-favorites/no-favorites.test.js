import React from 'react';
import NoFavorites from './no-favorites';
import renderer from 'react-test-renderer';

it(`Should NoFavorites render correctly`, () => {
  const tree = renderer
    .create(
        <NoFavorites />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
