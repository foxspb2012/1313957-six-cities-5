import {NameSpace} from '../../const';

export const getActiveCity = (state) => state[NameSpace.APP].activeCity;

export const getActiveSortType = (state) => state[NameSpace.APP].activeSortType;

export const getActiveOffer = (state) => state[NameSpace.APP].activeOffer;
