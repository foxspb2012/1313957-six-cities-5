import React from 'react';
import renderer from 'react-test-renderer';
import * as Type from '../prop-types';
import withActiveState from './with-active-state';

const testing = () => {};

const MockComponent = (props) => {
  const {children} = props;

  return (
    <React.Fragment>
      {children}
    </React.Fragment>
  );
};

MockComponent.propTypes = {
  children: Type.MOCK_COMPONENT.isRequired,
};

const MockComponentWrapped = withActiveState(MockComponent);

describe(`withActiveState render correctly`, () => {
  it(`withActiveState render correctly with flag true`, () => {
    const flag = true;
    const tree = renderer.create((
      <MockComponentWrapped
        isActive={flag}
        onActiveStateChange={testing}
        activeType={`top rated first`}
        onTypeChange={testing}
      >
        <React.Fragment />
      </MockComponentWrapped>
    )).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`withActiveState render correctly without flag true`, () => {
    const flag = false;
    const tree = renderer.create((
      <MockComponentWrapped
        isActive={flag}
        onActiveStateChange={testing}
        activeType={`top rated first`}
        onTypeChange={testing}
      >
        <React.Fragment />
      </MockComponentWrapped>
    )).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
