import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from './app';

Enzyme.configure({
  adapter: new Adapter()
});

describe(`App`, () => {

  it(`should render correctly`, () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  });

});
