import React from 'react';
import PropTypes from 'prop-types';
import SortingList from '../sorting-list/sorting-list';
import CardList from '../cards/cards-list/cards-list';

const Announcement = (props) => {
  const {offers, sortType, city} = props;

  return (
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
        <SortingList/>
      </form>

      <div className="cities__places-list places__list tabs__content">
        <CardList offers={offers}/>
      </div>
    </section>
  );
};

Announcement.propTypes = {
  city: PropTypes.string.isRequired,
  offers: PropTypes.array.isRequired,
  sortType: PropTypes.string.isRequired
};

export default Announcement;
