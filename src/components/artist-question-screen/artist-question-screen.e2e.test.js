import React from 'react';
import Enzyme, {mount} from 'enzyme';
// import {MemoryRouter} from 'react-router-dom';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import {ArtistQuestionScreen} from './artist-question-screen';
import questions from '../../mocks/test-questions';

Enzyme.configure({
  adapter: new Adapter()
});

describe(`ArtistQuestionScreen`, () => {
  describe(`onAnswerClick`, () => {
    test(`When use clicks answer with "Thad Jones" as an artist,
      onAnswerClick should be called with "artist" and "Thad Jones" as parameters`, () => {
      const mockStore = configureStore([]);
      const store = mockStore({
        mistakes: 0,
        mistakesLimit: 3,
        step: 0,
        questions
      });
      const onAnswerClick = jest.fn();

      const wrapper = mount(
          <Provider store={store}>
            <ArtistQuestionScreen
              mistakes={0}
              mistakesLimit={3}
              step={0}
              question={questions[0]}
              onAnswerClick={onAnswerClick}
            />
          </Provider>
      );
      wrapper
        .find(`label[htmlFor="Thad Jones"]`)
        .props()
        .onClick();
      expect(onAnswerClick).toHaveBeenCalledTimes(1);
      expect(onAnswerClick).toHaveBeenCalledWith(`artist`, `Thad Jones`);
    });

    test(`When use clicks answer with "Miles Davis" as an artist,
      onAnswerClick should be called with "artist" and "Miles Davis" as parameters`, () => {
      const mockStore = configureStore([]);
      const store = mockStore({
        mistakes: 0,
        mistakesLimit: 3,
        step: 0,
        questions
      });
      const onAnswerClick = jest.fn();

      const wrapper = mount(
          <Provider store={store}>
            <ArtistQuestionScreen
              mistakes={0}
              mistakesLimit={3}
              step={0}
              question={questions[0]}
              onAnswerClick={onAnswerClick}
            />
          </Provider>
      );
      wrapper
        .find(`label[htmlFor="Miles Davis"]`)
        .props()
        .onClick();
      expect(onAnswerClick).toHaveBeenCalledTimes(1);
      expect(onAnswerClick).toHaveBeenCalledWith(`artist`, `Miles Davis`);
    });
  });
});
