import React from 'react';
import {MemoryRouter} from 'react-router-dom';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {WellcomeScreen} from './wellcome-screen';

Enzyme.configure({
  adapter: new Adapter()
});

describe(`WellcomeScreen`, () => {
  it(`should render correctly with 3 errors`, () => {
    const wrapper = shallow(
        <MemoryRouter>
          <WellcomeScreen
            mistakesLimit={3}
            onStartClick={() => {}}
          />
        </MemoryRouter>
    );
    expect(wrapper).toMatchSnapshot();
  });
  it(`should render correctly with 2 errors`, () => {
    const wrapper = shallow(
        <MemoryRouter>
          <WellcomeScreen
            mistakesLimit={2}
            onStartClick={() => {}}
          />
        </MemoryRouter>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
