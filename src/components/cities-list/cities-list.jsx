import React from 'react';
import {connect} from 'react-redux';
import {City} from '../../const';
import * as Type from '../../prop-types';
import {getActiveCity} from '../../store/app/selectors';
import {ActionCreator as AppActionCreator} from '../../store/app/app';

const CitiesList = ({activeCity, onClick}) => (
  <div className="tabs">
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {Object.values(City).map((city) => {
          const itemClassName = `locations__item-link tabs__item ${city === activeCity ? `tabs__item--active` : ``}`;
          return (
            <li key={city} className="locations__item">
              <a className={itemClassName} onClick={() => onClick(city)}>
                <span>{city}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </section>
  </div>
);

CitiesList.propTypes = {
  onClick: Type.FUNCTION.isRequired,
  activeCity: Type.ACTIVE_CITY.isRequired,
};

const mapStateToProps = (state) => ({
  activeCity: getActiveCity(state),
});

const mapDispatchToProps = (dispatch) => ({
  onClick: (city) => dispatch(AppActionCreator.setActiveCity(city)),
});

export {CitiesList};
export default connect(mapStateToProps, mapDispatchToProps)(CitiesList);
