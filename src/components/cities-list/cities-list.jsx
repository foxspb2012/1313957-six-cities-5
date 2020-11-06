import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {ActionCreator} from '../../store/action';
import {connect} from 'react-redux';
import {City} from '../../const';

const CitiesList = (props) => {
  const {changeCity} = props;
  const onLinkClickHandler = (city) => {
    changeCity(city);
  };

  return (
    <Fragment>
      <li className="locations__item">
        <a className="locations__item-link tabs__item" href="#" onClick={(evt) => {
          evt.preventDefault();
          onLinkClickHandler(City.PARIS);
        }}>
          <span>Paris</span>
        </a>
      </li>
      <li className="locations__item">
        <a className="locations__item-link tabs__item" href="#" onClick={(evt) => {
          evt.preventDefault();
          onLinkClickHandler(City.COLOGNE);
        }}>
          <span>Cologne</span>
        </a>
      </li>
      <li className="locations__item">
        <a className="locations__item-link tabs__item" href="#" onClick={(evt) => {
          evt.preventDefault();
          onLinkClickHandler(City.BRUSSELS);
        }}>
          <span>Brussels</span>
        </a>
      </li>
      <li className="locations__item">
        <a className="locations__item-link tabs__item tabs__item--active" onClick={(evt) => {
          evt.preventDefault();
          onLinkClickHandler(City.AMSTERDAM);
        }}>
          <span>Amsterdam</span>
        </a>
      </li>
      <li className="locations__item">
        <a className="locations__item-link tabs__item" href="#" onClick={(evt) => {
          evt.preventDefault();
          onLinkClickHandler(City.HAMBURG);
        }}>
          <span>Hamburg</span>
        </a>
      </li>
      <li className="locations__item">
        <a className="locations__item-link tabs__item" href="#" onClick={(evt) => {
          evt.preventDefault();
          onLinkClickHandler(City.DUSSELDORF);
        }}>
          <span>Dusseldorf</span>
        </a>
      </li>
    </Fragment>
  );
};

const mapDispatchToProps = (dispatch) => ({
  changeCity(city) {
    dispatch(ActionCreator.changeCity(city));
  }
});

CitiesList.propTypes = {
  changeCity: PropTypes.func.isRequired
};

export {CitiesList};
export default connect(null, mapDispatchToProps)(CitiesList);
