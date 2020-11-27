import React from 'react';
import {Provider} from 'react-redux';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import CityList from '../../components/cities-list/cities-list';

const NameSpace = {
  APP: `APP`,
};

const mockState = {
  [NameSpace.APP]: {
    activeCity: `Paris`,
    activeSortType: `popular`,
    activeOffer: null
  }
};
const testing = () => {};

it(`Should CityList render correctly`, () => {
  const mockStore = configureStore();
  const store = mockStore(mockState);
  const tree = renderer
      .create(
          <Provider store={store}>
            <CityList
              onClick={testing}
            />
          </Provider>
      )
      .toJSON();

  expect(tree).toMatchSnapshot();
});
