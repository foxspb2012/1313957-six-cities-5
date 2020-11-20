import React from 'react';
import PropTypes from 'prop-types';
import {ActionCreator} from '../../../store/action';
import {connect} from 'react-redux';
import {Cities} from '../../../const';
import CityPoint from '../city-point/city-point';
import {getCity} from '../../../store/selectors';

const CitiesList = (props) => {
  const {city, changeCity} = props;

  return (
    <React.Fragment>
      <ul className="locations__list tabs__list">
        {Cities.map((cityPoint) => (
          <CityPoint
            key={cityPoint}
            city={cityPoint}
            isActive={city === cityPoint}
            changeCity={changeCity}
          />))}
      </ul>
    </React.Fragment>
  );
};

const mapDispatchToProps = (dispatch) => ({
  changeCity(city) {
    dispatch(ActionCreator.changeCity(city));
  }
});

const mapStateToProps = (state) => ({
  city: getCity(state)
});

CitiesList.propTypes = {
  city: PropTypes.string.isRequired,
  changeCity: PropTypes.func.isRequired
};

export {CitiesList};
export default connect(mapStateToProps, mapDispatchToProps)(CitiesList);
