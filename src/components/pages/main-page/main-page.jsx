import React from 'react';
import PropTypes from "prop-types";
import Header from "../../header/header";
import CitiesList from '../../cities/cities-list/cities-list';
import CardsList from '../../cards/cards-list/cards-list';
import SortingList from '../../sorting-list/sorting-list';
import Map from '../../map/map';
import {connect} from 'react-redux';
import {getOffersInCity, getOffersBySorting} from '../../../utils';


const MainPage = (props) => {
  const {city, offers, sortType, activeCardId} = props;
  return (
    <React.Fragment>
      <div className="page page--gray page--main">
        <Header />
        <main className="page__main page__main--index">
          <h1 className="visually-hidden">Cities</h1>
          <div className="tabs">
            <section className="locations container">
              <CitiesList />
            </section>
          </div>
          <div className="cities">
            <div className="cities__places-container container">
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">{offers.length} places to stay in {city}</b>
                <form className="places__sorting" action="#" method="get">
                  <span className="places__sorting-caption">Sort by</span>
                  <span className="places__sorting-type" tabIndex="0">
                    {sortType}
                    <svg className="places__sorting-arrow" width="7" height="4">
                      <use xlinkHref="#icon-arrow-select"></use>
                    </svg>
                  </span>
                  <ul className="places__options places__options--custom places__options--opened">
                    <li className="places__option places__option--active" tabIndex="0">Popular</li>
                    <li className="places__option" tabIndex="0">Price: low to high</li>
                    <li className="places__option" tabIndex="0">Price: high to low</li>
                    <li className="places__option" tabIndex="0">Top rated first</li>
                  </ul>
                  <SortingList />
                </form>
                <div className="cities__places-list places__list tabs__content">
                  <CardsList offers={offers}/>
                </div>
              </section>
              <div className="cities__right-section">
                <section className="cities__map map">
                  <Map city={city} offers={offers} activeCardId={activeCardId}/>
                </section>
              </div>
            </div>
          </div>
        </main>
      </div>
    </React.Fragment>
  );
};

MainPage.propTypes = {
  offers: PropTypes.array.isRequired,
  city: PropTypes.string.isRequired,
  sortType: PropTypes.string.isRequired,
  activeCardId: PropTypes.number
};

const mapStateToProps = (state) => ({
  city: state.city,
  offers: getOffersBySorting(getOffersInCity(state.offers, state.city), state.sortType),
  sortType: state.sortType,
  activeCardId: state.activeCardId
});

export {MainPage};
export default connect(mapStateToProps)(MainPage);
