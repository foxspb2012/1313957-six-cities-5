import React from 'react';
import renderer from 'react-test-renderer';
import OfferPrice from './offer-price';

const PRICE = 120;
const Type = {
  OFFER_PAGE_CONTENT_CARD: `place-card`,
  OFFER_CARD: `property`,
};

describe(`Should OfferPrice render correctly`, () => {
  it(`Should OfferPrice render correctly offer-page-content card typeClass`, () => {
    const tree = renderer
      .create(
          <OfferPrice
            typeClass={Type.OFFER_PAGE_CONTENT_CARD}
            price={PRICE}
          />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Should OfferPrice render correctly offer card typeClass`, () => {
    const tree = renderer
      .create(
          <OfferPrice
            typeClass={Type.OFFER_CARD}
            price={PRICE}
          />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
