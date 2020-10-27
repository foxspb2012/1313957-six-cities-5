import {OfferType} from '../const';

export const offers = [
  {
    id: 1,
    city: `Amsterdam`,
    title: `Canal View Prinsengracht`,
    description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
    type: OfferType.APARTMENT,
    price: 150,
    rating: 3,
    isPremium: true,
    isFavorite: false,
    bedroomsCount: 3,
    guestsMaxCount: 4,
    features: [`Wi-Fi`, `Heating`, `Coffee machine`, `Baby seat`, `Kitchen`, `Dishwasher`],
    photos: [`http://picsum.photos/248/152?r=${Math.random()}`, `http://picsum.photos/248/152?r=${Math.random()}`, `http://picsum.photos/248/152?r=${Math.random()}`, `http://picsum.photos/248/152?r=${Math.random()}`, `http://picsum.photos/248/152?r=${Math.random()}`, `http://picsum.photos/248/152?r=${Math.random()}`],
    host: {
      name: `Steven`,
      avatar: `https://www.stevensegallery.com/640/360`,
      isSuper: true
    },
    coords: [52.3909553943508, 4.85309666406198]
  },
  {
    id: 2,
    city: `Amsterdam`,
    title: `Nice, cozy, warm big bed apartment`,
    description: `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
    type: OfferType.HOUSE,
    price: 120,
    rating: 5,
    isPremium: false,
    isFavorite: true,
    bedroomsCount: 2,
    guestsMaxCount: 4,
    features: [`Wi-Fi`, `Washing machine`, `Towels`],
    photos: [`http://picsum.photos/248/152?r=${Math.random()}`, `http://picsum.photos/248/152?r=${Math.random()}`, `http://picsum.photos/248/152?r=${Math.random()}`, `http://picsum.photos/248/152?r=${Math.random()}`],
    host: {
      name: `Fill`,
      avatar: `https://www.fillmurray.com/640/360`,
      isSuper: true
    },
    coords: [52.369553943508, 4.85309666406198]
  },
  {
    id: 3,
    city: `Amsterdam`,
    title: `Beautiful & luxurious apartment at great location`,
    description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
    type: OfferType.HOTEL,
    price: 122,
    rating: 4,
    isPremium: false,
    isFavorite: false,
    bedroomsCount: 3,
    guestsMaxCount: 6,
    features: [`Wi-Fi`, `Baby seat`, `Kitchen`, `Dishwasher`, `Cabel TV`, `Fridge`],
    photos: [`http://picsum.photos/248/152?r=${Math.random()}`, `http://picsum.photos/248/152?r=${Math.random()}`],
    host: {
      name: `Cage`,
      avatar: `https://www.placecage.com/640/360`,
      isSuper: true
    },
    coords: [52.3909553943508, 4.929309666406198]
  },
  {
    id: 4,
    city: `Amsterdam`,
    title: `Wood and stone place`,
    description: `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
    type: OfferType.PRIVATE_ROOM,
    price: 180,
    rating: 5,
    isPremium: true,
    isFavorite: true,
    bedroomsCount: 2,
    guestsMaxCount: 2,
    features: [`Wi-Fi`, `Washing machine`, `Towels`, `Heating`, `Fridge`],
    photos: [`http://picsum.photos/248/152?r=${Math.random()}`, `http://picsum.photos/248/152?r=${Math.random()}`, `http://picsum.photos/248/152?r=${Math.random()}`],
    host: {
      name: `Beard`,
      avatar: `https://placebeard.it/640x360`,
      isSuper: true
    },
    coords: [52.3809553943508, 4.939309666406198]
  }
];
