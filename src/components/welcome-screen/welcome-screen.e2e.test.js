import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import WelcomeScreen from './welcome-screen';

Enzyme.configure({
  adapter: new Adapter()
});

describe(`WelcomeScreen`, () => {
  it(`should call onStartClick when start button is clicked`, () => {
    const onStartClickFn = jest.fn();
    const component = shallow(<WelcomeScreen errorAmount={2} onStartClick={onStartClickFn} />);

    component
      .find(`.welcome__button`)
      .simulate(`click`);
    expect(onStartClickFn).toHaveBeenCalled();
  });
});
