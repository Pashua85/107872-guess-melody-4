import React from 'react';
import renderer from 'react-test-renderer';
import WelcomeScreen from './welcome-screen';

describe(`WelcomeScreen`, () => {
  it(`should render correctly with 3 errors`, () => {
    const tree = renderer
      .create(<WelcomeScreen errorAmount={3} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it(`should render correctly with 2 errors`, () => {
    const tree = renderer
      .create(<WelcomeScreen errorAmount={2} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
