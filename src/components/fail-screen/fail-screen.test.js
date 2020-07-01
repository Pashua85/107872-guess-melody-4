import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {FailScreen} from './fail-screen';

Enzyme.configure({
  adapter: new Adapter()
});

describe(`FailScreen`, () => {
  it(`should render correctly`, () => {
    const wrapper = shallow(
        <FailScreen
          step={1}
          onAgainClick={() => {}}
        />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
