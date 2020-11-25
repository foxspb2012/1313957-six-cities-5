import React from 'react';
import {connect} from 'react-redux';
import * as Type from '../../prop-types';
import {getActiveCity} from '../../store/app/selectors';

const NoPlaces = ({activeCity}) => {
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

NoPlaces.propTypes = {
  activeCity: Type.ACTIVE_CITY,
};

export {NoPlaces};
export default connect(mapStateToProps)(NoPlaces);
