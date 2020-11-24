import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {getActiveCity} from '../../store/app/selectors';

const NoOffers = ({activeCity}) => {
  return (
    <React.Fragment>
      <section className="cities__no-places">
        <div className="cities__status-wrapper tabs__content">
          <b className="cities__status">No places to stay available</b>
          <p className="cities__status-description">
            {`We could not find any property available at the moment in ${activeCity}`}
          </p>
        </div>
      </section>
      <div className="cities__right-section"></div>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => ({
  activeCity: getActiveCity(state),
});

NoOffers.propTypes = {
  activeCity: PropTypes.string.isRequired,
};

export {NoOffers};
export default connect(mapStateToProps)(NoOffers);
