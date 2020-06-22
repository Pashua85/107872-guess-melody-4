import React from 'react';
import renderer from 'react-test-renderer';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from './app';
import questions from '../../mocks/test-questions';

Enzyme.configure({
  adapter: new Adapter()
});

describe(`App`, () => {

  it(`should render correctly`, () => {
    const tree = renderer
      .create(<App errorAmount={1} questions={questions} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  describe(`increaseStep`, () => {
    it(`should change step from -1 to 1, when it is called twice`, () => {
      const component = shallow(<App errorAmount={3} questions={questions} />);
      expect(component.state().step).toBe(-1);
      component.instance().increaseStep();
      component.instance().increaseStep();
      expect(component.state().step).toBe(1);
    });
  });

  describe(`rebootStep`, () => {
    it(`should return step to -1, when it is called`, () => {
      const component = shallow(<App errorAmount={3} questions={questions} />);
      component.instance().increaseStep();
      component.instance().increaseStep();
      component.instance().increaseStep();
      expect(component.state().step).toBe(2);
      component.instance().rebootStep();
      expect(component.state().step).toBe(-1);
    });
  });
});
