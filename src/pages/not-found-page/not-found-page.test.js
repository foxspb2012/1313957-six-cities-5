import React from 'react';
import history from '../../history';
import {Router} from 'react-router-dom';
import renderer from 'react-test-renderer';
import NotFoundPage from './not-found-page';

it(`Should NotFoundPage render correctly`, () => {
  const tree = renderer
    .create(
        <Router history={history}>
          <NotFoundPage />
        </Router>

    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
