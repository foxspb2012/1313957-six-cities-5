import React from 'react';
import renderer from 'react-test-renderer';
import OfferFeatures from './offer-features';

describe(`Should OfferFeatures render correctly`, () => {
  it(`Should OfferFeatures render correctly with bedrooms and adults`, () => {
    const tree = renderer
      .create(
          <OfferFeatures
            type={`apartment`}
            bedroomAmount={3}
            guestAmount={4}
          />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Should OfferFeatures render correctly without bedrooms and adults`, () => {
    const tree = renderer
      .create(
          <OfferFeatures type={`apartment`}/>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
