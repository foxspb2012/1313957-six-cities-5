import {sortOffers} from '../../utils';
import {createSelector} from 'reselect';
import {NameSpace, MAXIMUM_OFFERS} from '../../const';
import {getActiveCity, getActiveSortType} from '../app/selectors';

export const getOffers = (state) => state[NameSpace.OFFERS].offers;

export const getNearOffers = (state) => state[NameSpace.OFFERS].nearOffers;

export const getOneOffer = (state) => state[NameSpace.OFFERS].offer;

export const getMapOffers = createSelector(
    getNearOffers,
    getOneOffer,
    getActiveSortType,
    (nearOffers, offer) => {
      const mapOffers = nearOffers.slice(0, MAXIMUM_OFFERS);
      mapOffers.push(offer);
      return mapOffers;
    }
);

export const getOfferWithId = (state, offerId) => getOffers(state).find(({id}) => id === offerId);

export const getIsLoaded = (state) => state[NameSpace.OFFERS].isLoaded;

export const getIsLoadedOffer = (state) => state[NameSpace.OFFERS].isLoadedOffer;

export const getIsLoadedNearOffers = (state) => state[NameSpace.OFFERS].isLoadedNearOffers;

export const getIsLoadedFavoritesOffers = (state) => state[NameSpace.OFFERS].isLoadedFavoritesOffers;

export const getFavoriteOffers = (state) => state[NameSpace.OFFERS].favoriteOffers;

export const getGroupedByCityFavoriteOffers = (state) => getFavoriteOffers(state).reduce((groups, offer) => {
  const {city: {name: city}} = offer;

  if (!groups[city]) {
    groups[city] = [];
  }

  groups[city].push(offer);

  return groups;
}, {});

export const getFilteredAndSortedOffers = createSelector(
    getOffers,
    getActiveCity,
    getActiveSortType,
    (offers, activeCity, activeSortType) => (
      sortOffers(offers.filter(({city: {name: city}}) => city === activeCity), activeSortType)
    )
);
