import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {WellcomeScreen} from './wellcome-screen';

Enzyme.configure({
  adapter: new Adapter()
});

describe(`WellcomScreen`, () => {
  it(`should call onStartClick when start button is clicked`, () => {
    const onStartClickFn = jest.fn();
    const component = shallow(<WellcomeScreen mistakesLimit={2} onStartClick={onStartClickFn} />);

    component
      .find(`.welcome__button`)
      .simulate(`click`);
    expect(onStartClickFn).toHaveBeenCalled();
  });
});
