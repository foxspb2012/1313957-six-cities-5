import React from 'react';
import {City} from '../../const';
import {extend} from '../../utils';
import {CitiesList} from './cities-list';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

const testing = () => { };

const testMocks = {
  activeCity: City.AMSTERDAM,
  onClick: testing
};

describe(`e2e test: CityList component`, () => {
  it(`should call onClick with city`, () => {
    const city = City.PARIS;
    const onClick = jest.fn();

    shallow(<CitiesList {...extend(testMocks, {onClick})}/>)
      .find(`.tabs__item`).at(0).simulate(`click`);

    expect(onClick).toHaveBeenCalledTimes(1);
    expect(onClick.mock.calls[0][0]).toBe(city);
  });
});
