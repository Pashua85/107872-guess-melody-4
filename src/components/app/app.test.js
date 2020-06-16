import React from 'react';
import renderer from 'react-test-renderer';
import App from './app';
import questions from '../../mocks/test-questions';

describe(`App`, () => {
  it(`should render correctly`, () => {
    const tree = renderer
      .create(<App errorAmount={1} questions={questions} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
