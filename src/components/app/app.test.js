import React from 'react';
import renderer from 'react-test-renderer';
import App from './app';

describe(`App`, () => {
  it(`should render correctly`, () => {
    const tree = renderer
      .create(<App errorAmount={1} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
