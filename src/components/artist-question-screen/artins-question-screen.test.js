import React from 'react';
import renderer from 'react-test-renderer';
import ArtistQuestionScreen from './artist-question-screen';

describe(`ArtistQuestionScreen`, () => {
  it(`should render correctly`, () => {
    const tree = renderer
      .create(<ArtistQuestionScreen/>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
