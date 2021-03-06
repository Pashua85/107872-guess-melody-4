import React from 'react';
import Enzyme, {mount} from 'enzyme';
import {MemoryRouter} from 'react-router-dom';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import {GenreQuestionScreen} from './genre-question-screen';
import questions from '../../mocks/test-questions';

Enzyme.configure({
  adapter: new Adapter()
});

describe(`GenreQuestionScreen`, () => {
  describe(`onAnswerClick`, () => {

    test(`When user clicks answer-button with no checked answers,
      onAnswerClick should be called with "genre" and [false, false, false, false] as parameters`, () => {
      const mockStore = configureStore([]);
      const store = mockStore({
        GAME: {
          mistakes: 0,
          mistakesLimit: 3,
          step: 1
        }
      });
      const onAnswerClick = jest.fn();

      const wrapper = mount(
          <Provider store={store}>
            <MemoryRouter>
              <GenreQuestionScreen
                step={1}
                mistakes={1}
                mistakesLimit={3}
                question={questions[1]}
                onAnswerClick={onAnswerClick}
                authStatus={`NO_AUTH`}
              />
            </MemoryRouter>
          </Provider>
      );
      wrapper
        .find(`button.game__submit`)
        .simulate(`click`);
      expect(onAnswerClick).toHaveBeenCalledTimes(1);
      expect(onAnswerClick).toHaveBeenCalledWith(questions[1], [false, false, false, false]);
    });

    test(`When user click anser-button with first two ansers checked,
      onAnswerClick should be called with "genre" and [true, true, false, false] as parameters`, () => {
      const mockStore = configureStore([]);
      const store = mockStore({
        GAME: {
          mistakes: 0,
          mistakesLimit: 3,
          step: 1
        }
      });
      const onAnswerClick = jest.fn();

      const wrapper = mount(
          <Provider store={store}>
            <MemoryRouter>
              <GenreQuestionScreen
                step={1}
                mistakes={1}
                mistakesLimit={3}
                question={questions[1]}
                onAnswerClick={onAnswerClick}
                authStatus={`NO_AUTH`}
              />
            </MemoryRouter>
          </Provider>
      );
      wrapper
        .find(`input[value="bebop"]`)
        .simulate(`change`);
      wrapper
        .find(`input[value="dixieland"]`)
        .simulate(`change`);
      wrapper
        .find(`button.game__submit`)
        .simulate(`click`);
      expect(onAnswerClick).toHaveBeenCalledTimes(1);
      expect(onAnswerClick).toHaveBeenCalledWith(questions[1], [true, true, false, false]);
    });
  });
});
