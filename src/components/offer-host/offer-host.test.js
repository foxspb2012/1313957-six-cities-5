import React from 'react';
import OfferHost from './offer-host';
import renderer from 'react-test-renderer';

const HOST = {
  'name': `Host`,
  'avatar': `img/avatar-angelina.jpg`,
  'isPro': false,
  'id': 1
};
const DESCRIPTION = `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`;

it(`Should OfferHost render correctly`, () => {
  const tree = renderer
    .create(
        <OfferHost
          host={HOST}
          description={DESCRIPTION}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
