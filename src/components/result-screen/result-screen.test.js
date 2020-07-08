import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {ResultScreen} from './result-screen';

Enzyme.configure({
  adapter: new Adapter()
});

describe(`ResultScreen`, () => {
  it(`should render correctly`, () => {
    const wrapper = shallow(
        <ResultScreen
          questionsAmount={2}
          mistakes={1}
          step={2}
          onAgainClick={() => {}}
        />
    );
    expect(wrapper).toMatchSnapshot();
  });
});

