import React from 'react';
import {MemoryRouter} from 'react-router-dom';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ArtistQuestionScreen from './artist-question-screen';
import questions from '../../mocks/test-questions';

Enzyme.configure({
  adapter: new Adapter()
});

describe(`ArtistQuestionScreen`, () => {
  it(`should render correctly`, () => {
    const wrapper = shallow(
        <MemoryRouter>
          <ArtistQuestionScreen
            question={questions[0]}
            onAnswerSelect={() => {}}
          />
        </MemoryRouter>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
