import React from 'react';
import OfferInside from './offer-inside';
import renderer from 'react-test-renderer';

const FEATURES = [`Dishwasher`, `Baby seat`];

describe(`Should OfferInside render correctly`, () => {
  it(`Should OfferInside render correctly with features`, () => {
    const tree = renderer
      .create(
          <OfferInside
            features={FEATURES}
          />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Should OfferInside render correctly without features`, () => {
    const tree = renderer
      .create(
          <OfferInside />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
