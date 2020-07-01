import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {ResultScreen} from './result-screen';
import questions from '../../mocks/test-questions';

Enzyme.configure({
  adapter: new Adapter()
});

describe(`ResultScreen`, () => {
  it(`should render correctly`, () => {
    const wrapper = shallow(
        <ResultScreen
          questions={questions}
          mistakes={1}
          step={2}
          onAgainClick={() => {}}
        />
    );
    expect(wrapper).toMatchSnapshot();
  });
});

