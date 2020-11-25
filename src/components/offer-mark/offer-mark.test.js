import React from 'react';
import OfferMark from './offer-mark';
import renderer from 'react-test-renderer';

const Type = {
  OFFER_PAGE_CONTENT_CARD: `place-card`,
  OFFER_CARD: `property`,
};

describe(`Should OfferMark render correctly`, () => {
  it(`Should OfferMark render correctly offer-page-content card typeClass`, () => {
    const tree = renderer
      .create(
          <OfferMark typeClass={Type.OFFER_PAGE_CONTENT_CARD} />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Should OfferMark render correctly offer card typeClass`, () => {
    const tree = renderer
      .create(
          <OfferMark typeClass={Type.OFFER_CARD} />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
