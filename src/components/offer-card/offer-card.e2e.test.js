import React from 'react';
import {extend} from '../../utils';
import {OfferCard} from './offer-card';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

const getOffersMock = (count) => {
  const templateOffers = Array(count)
    .fill(``)
    .map((_, index) => {
      return {
        'id': index + 1,
        'city': {
          'name': `Paris`,
          'location': {
            'coordinates': [48.85661, 2.351499],
            'zoom': 13
          }
        },
        'type': `room`,
        'name': `Wood and stone place`,
        'description': `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
        'photos': [`img/apartment-01.jpg`, `img/apartment-03.jpg`],
        'isFavorite': Boolean(Math.random()),
        'isPremium': Boolean(Math.random()),
        'rating': 1,
        'price': 100,
        'bedroomAmount': 1,
        'guestAmount': 1,
        'features': [`Dishwasher`, `Baby seat`],
        'host': {
          'name': `Host`,
          'avatar': `img/avatar-angelina.jpg`,
          'isPro': false,
          'id': index + 1
        },
        'location': {
          'coordinates': [48.87961000000001, 2.353499],
          'zoom': 16
        },
        'mainPhoto': `img/apartment-02.jpg`,
      };
    });

  if (count === 1) {
    const [oneOffer] = templateOffers;
    return oneOffer;
  }

  return templateOffers;
};

const OffersListType = {
  MAIN: `MAIN`,
  NEAR: `NEAR`,
  FAVORITES: `FAVORITES`,
};

const testing = () => {};

const testMocks = {
  offer: getOffersMock(1),
  typeClass: OffersListType.MAIN,
  onActiveOfferChange: testing,
  onOfferFavoritenessChange: testing
};

it(`e2e test: OfferCard should call onActiveOfferChange`, () => {
  const id = 1;
  const onActiveOfferChange = jest.fn();

  shallow(<OfferCard {...extend(testMocks, {id, onActiveOfferChange})}/>)
      .find(`.place-card`).simulate(`mouseenter`);

  expect(onActiveOfferChange).toHaveBeenCalledTimes(1);
  expect(onActiveOfferChange.mock.calls[0][0]).toBe(id);
});
