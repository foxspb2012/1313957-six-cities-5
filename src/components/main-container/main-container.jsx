import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import Map from '../map/map';
import Sort from '../sorting-list/sorting-list';
import OfferList from '../offer-list/offer-list';
import * as Type from '../../prop-types';
import {getCityCoordinates} from '../../utils';
import {getActiveCity} from '../../store/app/selectors';
import {getFilteredAndSortedOffers, getIsLoaded} from '../../store/offers/selectors';

const MainContainer = ({offers, activeCity, isLoaded}) => {
  return (
    <React.Fragment>
      <section className="cities__places places">
        <h2 className="visually-hidden">Places</h2>
        <b className="places__found">{offers.length} places to stay in {activeCity}</b>
        <Sort/>
        <div className="cities__places-list places__list tabs__content">
          <OfferList
            blockClassName={`cities__places-list tabs__content`}
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
    </React.Fragment>
  );
};

const mapStateToProps = (state) => ({
  activeCity: getActiveCity(state),
  offers: getFilteredAndSortedOffers(state),
  isLoaded: getIsLoaded(state),
});

MainContainer.propTypes = {
  offers: Type.OFFERS_LIST,
  activeCity: PropTypes.string.isRequired,
  isLoaded: Type.FLAG,
};

export {MainContainer};
export default connect(mapStateToProps)(MainContainer);
