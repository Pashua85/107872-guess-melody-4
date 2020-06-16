import React from 'react';
import renderer from 'react-test-renderer';
import GenreQuestionScreen from './genre-question-screen';
import questions from '../../mocks/test-questions';

describe(`GenreQuestionScreen`, () => {
  it(`should render correctly`, () => {
    const tree = renderer
      .create(<GenreQuestionScreen question={questions[1]}/>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
