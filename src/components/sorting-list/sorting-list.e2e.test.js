import React from 'react';
import {extend} from '../../utils';
import {SortType} from '../../const';
import {SortingList} from './sorting-list';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

const testing = () => { };
const testMocks = {
  isActive: false,
  onActiveStateChange: testing,
  activeType: SortType.POPULAR,
  onTypeChange: testing
};

describe(`e2e test: SortingList component`, () => {
  it(`should call onActiveStateChange`, () => {
    const onActiveStateChange = jest.fn();

    shallow(<SortingList {...extend(testMocks, {onActiveStateChange})}/>)
      .find(`.places__sorting-type`).simulate(`click`);

    expect(onActiveStateChange).toHaveBeenCalledTimes(1);
  });

  it(`should call onTypeChange with type`, () => {
    const onTypeChange = jest.fn();

    shallow(<SortingList {...extend(testMocks, {onTypeChange})}/>)
      .find(`.places__option`).at(0).simulate(`click`);

    expect(onTypeChange).toHaveBeenCalledTimes(1);
    expect(onTypeChange.mock.calls[0][0]).toBe(SortType.POPULAR);
  });
});
