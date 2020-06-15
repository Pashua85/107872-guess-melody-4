import React from 'react';
import renderer from 'react-test-renderer';
import GenreQuestionScreen from './genre-question-screen';

describe(`GenreQuestionScreen`, () => {
  it(`should render correctly`, () => {
    const tree = renderer
      .create(<GenreQuestionScreen/>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
