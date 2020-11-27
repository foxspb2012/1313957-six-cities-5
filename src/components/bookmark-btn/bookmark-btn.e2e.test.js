import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {extend} from '../../utils';
import BookmarkButton, {BookmarkButtonType} from './bookmark-btn';

configure({adapter: new Adapter()});

const testing = () => {};

const testMocks = {
  typeClass: BookmarkButtonType.OFFER_ITEM,
  isActive: false,
  onClick: testing
};

describe(`e2e test: BookmarkButton component`, () => {
  it(`should call onClick`, () => {
    const onClick = jest.fn();

    shallow(<BookmarkButton {...extend(testMocks, {onClick})}/>)
      .find(`.button`).simulate(`click`);

    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
