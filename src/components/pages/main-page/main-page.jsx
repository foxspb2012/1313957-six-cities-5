import React from 'react';
import PropTypes from "prop-types";
import Header from "../../header/header";
import CitiesList from '../../cities/cities-list/cities-list';
import Announcement from '../../announcement/announcement';
import АnnouncementEmpty from '../../announcement-empty/announcement-empty';
import Map from '../../map/map';
import {connect} from 'react-redux';
import {getOffersInCity, getOffersBySorting} from '../../../utils';


const MainPage = (props) => {
  const {city, offers, sortType, activeCardId} = props;
  return (
    <React.Fragment>
      <div className="page page--gray page--main">
        <Header />
        <main className={`page__main page__main--index ${!offers.length && `page__main--index-empty`}`}>
          <h1 className="visually-hidden">Cities</h1>
          <div className="tabs">
            <section className="locations container">
              <CitiesList />
            </section>
          </div>
          <div className="cities">
            <div className={`cities__places-container ${!offers.length && `cities__places-container--empty`} container`}>
              {offers.length === 0 ? <АnnouncementEmpty/> : <Announcement offers={offers} city={city} sortType={sortType}/>}
            <div className="cities__right-section">
              {offers.length &&
                <section className="cities__map map">
                  <Map city={city} offers={offers} activeCardId={activeCardId}/>
                </section>
              }
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
