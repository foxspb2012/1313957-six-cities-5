import {NameSpace} from '../../const';
import {sortOffers} from '../../utils';
import {createSelector} from 'reselect';
import {getActiveCity, getActiveSortType} from '../app/selectors';

export const getOffers = (state) => state[NameSpace.OFFERS].offers;

export const getNearOffers = (state) => state[NameSpace.OFFERS].nearOffers;

export const getOneOffer = (state) => state[NameSpace.OFFERS].offer;

export const getFavoriteOffers = (state) => state[NameSpace.OFFERS].favoriteOffers;

export const getIsLoaded = (state) => state[NameSpace.OFFERS].isLoaded;

export const getIsLoadedOffer = (state) => state[NameSpace.OFFERS].isLoadedOffer;

export const getIsLoadedNearOffers = (state) => state[NameSpace.OFFERS].isLoadedNearOffers;

export const getSelectedOffer = (state, offerId) => getOffers(state).find((it) => it.id === offerId);

export const getGroupedByCityFavoriteOffers = (state) => {
  const favoriteOffers = getFavoriteOffers(state);
  const cities = [...new Set(favoriteOffers.map((offer) => offer.name))];

  const citiesToOffers = cities.reduce((curr, acc) => {
    return curr.set(acc, favoriteOffers.filter((offer) => offer.name === acc));
  }, new Map());

  return citiesToOffers;
};

export const getFilteredAndSortedOffers = createSelector(
    getOffers,
    getActiveCity,
    getActiveSortType,
    (offers, activeCity, activeSortType) => (
      sortOffers(offers.filter(({city: {name: city}}) => city === activeCity), activeSortType)
    )
);
