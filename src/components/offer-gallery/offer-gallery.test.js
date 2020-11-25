import React from 'react';
import renderer from 'react-test-renderer';
import OfferGallery from './offer-gallery';

const PHOTOS = [`img/apartment-01.jpg`, `img/apartment-03.jpg`];

describe(`Should OfferGallery render correctly`, () => {
  it(`Should OfferGallery render correctly with photos`, () => {
    const tree = renderer
      .create(
          <OfferGallery images={PHOTOS} />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Should OfferGallery render correctly without photos`, () => {
    const tree = renderer
      .create(
          <OfferGallery />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
