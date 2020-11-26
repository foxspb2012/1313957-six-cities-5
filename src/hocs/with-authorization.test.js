import React from 'react';
import renderer from 'react-test-renderer';
import * as Type from '../prop-types';
import withAuthorization from './with-authorization';

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

const MockComponentWrapped = withAuthorization(MockComponent);

describe(`withAuthorization render correctly`, () => {
  it(`withAuthorization render correctly with authorization`, () => {
    const tree = renderer.create((
      <MockComponentWrapped
        email={`foxspb2012@gmail.com`}
        activeCity={`Paris`}
        password={111}
        onEmailChange={testing}
        onPasswordChange={testing}
        onLoginPageSubmit ={testing} >
        <React.Fragment />
      </MockComponentWrapped>
    )).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`withAuthorization render correctly without authorization`, () => {
    const tree = renderer.create((
      <MockComponentWrapped
        activeCity={`Paris`}
        onEmailChange={testing}
        onPasswordChange={testing}
        onLoginPageSubmit ={testing} >
        <React.Fragment />
      </MockComponentWrapped>
    )).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
