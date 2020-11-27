import React from 'react';
import {connect} from 'react-redux';
import Map from '../map/map';
import * as Type from '../../prop-types';
import SortingList from '../sorting-list/sorting-list';
import {getCityCoordinates} from '../../utils';
import {getActiveCity} from '../../store/app/selectors';
import OfferList, {OffersListType} from '../offer-list/offer-list';
import {getFilteredAndSortedOffers, getIsLoaded} from '../../store/offers/selectors';

const MainContainer = ({offers, activeCity, isLoaded}) => {

  return (
    <>
      <section className="cities__places places">
        <h2 className="visually-hidden">Places</h2>
        <b className="places__found">{offers.length} places to stay in {activeCity}</b>
        <SortingList/>
        <div className="cities__places-list places__list tabs__content">
          <OfferList
            typeClass={OffersListType.MAIN}
            offers={offers}
            isLoaded={isLoaded}
          />
        </div>
      </section>
      <div className="cities__right-section">
        <Map
          blockClassName={`cities`}
          centerCoordinates={getCityCoordinates(offers)}
          offers={offers}
          isLoaded={isLoaded}
        />
      </div>
    </>
  );
};

MainContainer.propTypes = {
  offers: Type.OFFERS_LIST.isRequired,
  activeCity: Type.ACTIVE_CITY.isRequired,
  isLoaded: Type.FLAG.isRequired,
};

const mapStateToProps = (state) => ({
  activeCity: getActiveCity(state),
  offers: getFilteredAndSortedOffers(state),
  isLoaded: getIsLoaded(state),
});

export {MainContainer};
export default connect(mapStateToProps)(MainContainer);
