import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import withAuthorization from './with-authorization';

configure({adapter: new Adapter()});

const MockComponent = () => <div />;

const MockComponentWithAuthorization = withAuthorization(MockComponent);

const testMocks = {
  email: ``,
  password: ``
};

describe(`e2e test: withAuthorization HOC`, () => {

  it(`should pass email`, () => expect(
      shallow(<MockComponentWithAuthorization {...testMocks}/>).props().email
  ).toBe(``));

  it(`should pass password`, () => expect(
      shallow(<MockComponentWithAuthorization {...testMocks}/>).props().password
  ).toBe(``));

  it(`should change email`, () => {
    const email = `email`;
    const wrapper = shallow(<MockComponentWithAuthorization {...testMocks}/>);
    wrapper.props().onEmailChange(email);
    expect(wrapper.props().email).toBe(email);
  });

  it(`should change password`, () => {
    const password = `1582`;
    const wrapper = shallow(<MockComponentWithAuthorization {...testMocks}/>);
    wrapper.props().onPasswordChange(password);
    expect(wrapper.props().password).toBe(password);
  });
});
