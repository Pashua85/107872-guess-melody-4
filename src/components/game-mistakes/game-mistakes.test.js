import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {GameMistakes} from './game-mistakes';

Enzyme.configure({
  adapter: new Adapter()
});

describe(`GameMistkes`, () => {
  it(`should render correctly with no mistakes`, () => {
    const wrapper = shallow(<GameMistakes mistakes={0} />);
    expect(wrapper).toMatchSnapshot();
  });

  it(`should render correctly with 2 mistakes`, () => {
    const wrapper = shallow(<GameMistakes mistakes={2} />);
    expect(wrapper).toMatchSnapshot();
  });
});
