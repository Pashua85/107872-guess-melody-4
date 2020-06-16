import React from 'react';
import renderer from 'react-test-renderer';
import ArtistQuestionScreen from './artist-question-screen';
import questions from '../../mocks/test-questions';

describe(`ArtistQuestionScreen`, () => {
  it(`should render correctly`, () => {
    const tree = renderer
      .create(<ArtistQuestionScreen question={questions[1]} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
