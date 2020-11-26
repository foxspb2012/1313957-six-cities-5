import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {SortType} from '../../const';
import {upperCaseFirstLetter} from '../../utils';
import {getActiveSortType} from '../../store/app/selectors';
import {ActionCreator as AppActionCreator} from '../../store/app/app';
import withActiveState from '../../hocs/with-active-state';

const SortingList = ({isActive, onActiveStateChange, activeType, onTypeChange}) => (
  <form className="places__sorting" action="#" method="get">
    <span className="places__sorting-caption">Sort by </span>
    <span className="places__sorting-type" tabIndex={0} onClick={onActiveStateChange}>
      {activeType}
      <svg className="places__sorting-arrow" width="7" height="4">
        <use xlinkHref="#icon-arrow-select"/>
      </svg>
    </span>
    <ul className={`places__options places__options--custom ${isActive ? `places__options--opened` : ``}`}>
      {Object.values(SortType).map((sortType) => (
        <li
          key={sortType}
          className={`places__option ${sortType === activeType ? `places__option--active` : ``}`}
          tabIndex={0}
          onClick={() => onTypeChange(sortType)}>
          {upperCaseFirstLetter(sortType)}
        </li>
      ))}
    </ul>
  </form>
);

SortingList.propTypes = {
  isActive: PropTypes.bool,
  onActiveStateChange: PropTypes.func,
  activeType: PropTypes.string,
  onTypeChange: PropTypes.func,
};

const mapStateToProps = (state) => ({
  activeType: getActiveSortType(state),
});

const mapDispatchToProps = (dispatch) => ({
  onTypeChange: (sortType) => dispatch(AppActionCreator.setActiveSortType(sortType)),
});

export {SortingList};
export default connect(mapStateToProps, mapDispatchToProps)(withActiveState(SortingList));
