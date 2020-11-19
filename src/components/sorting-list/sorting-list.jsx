import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {ActionCreator} from '../../store/action';
import {SortTypes} from '../../const';

const SortingList = (props) => {
  const {activeSortType, changeSortType} = props;

  return (
    <ul className="places__options places__options--custom places__options--opened">
      {SortTypes.map((sortType) => (
        <li
          className={`places__option ${sortType === activeSortType ? `places__option--active` : ``}`}
          tabIndex="0"
          onClick={() => changeSortType(sortType)}
          key={sortType}
        >
          {sortType}
        </li>
      ))}
    </ul>
  );
};

const mapStateToProps = ({PROCESS}) => ({
  activeSortType: PROCESS.sortType
});

const mapDispatchToProps = (dispatch) => ({
  changeSortType(sortType) {
    dispatch(ActionCreator.changeSortType(sortType));
  }
});

SortingList.propTypes = {
  activeSortType: PropTypes.string.isRequired,
  changeSortType: PropTypes.func.isRequired
};

export {SortingList};
export default connect(mapStateToProps, mapDispatchToProps)(SortingList);
