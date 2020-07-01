import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {ArtistQuestionScreen} from './artist-question-screen';
import questions from '../../mocks/test-questions';

Enzyme.configure({
  adapter: new Adapter()
});

describe(`ArtistQuestionScreen`, () => {
  it(`should render correctly`, () => {
    const wrapper = shallow(
        <ArtistQuestionScreen
          mistakesLimit={3}
          mistakes={0}
          step={0}
          question={questions[0]}
          onAnswerClick={() => {}}
        />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
