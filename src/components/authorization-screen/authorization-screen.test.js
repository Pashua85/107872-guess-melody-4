import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {AuthorizationScreen} from './authorization-screen';

Enzyme.configure({
  adapter: new Adapter()
});

describe(`AuthorizationScreen`, () => {
  it(`should render correctly`, () => {
    const wrapper = shallow(
        <AuthorizationScreen
          authStatus={`NO_AUTH`}
          onLoginClick={() => {}}
        />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
