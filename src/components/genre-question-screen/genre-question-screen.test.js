import React from 'react';
import {MemoryRouter} from 'react-router-dom';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {GenreQuestionScreen} from './genre-question-screen';
import questions from '../../mocks/test-questions';

Enzyme.configure({
  adapter: new Adapter()
});

describe(`GenreQuestionScreen`, () => {
  it(`should render correctly`, () => {
    const wrapper = shallow(
        <MemoryRouter>
          <GenreQuestionScreen
            mistakes={1}
            mistakesLimit={3}
            step={1}
            question={questions[1]}
            onAnswerClick={() => {}}
            authStatus={`NO_AUTH`}
          />
        </MemoryRouter>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
