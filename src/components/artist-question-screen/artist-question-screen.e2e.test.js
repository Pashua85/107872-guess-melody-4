import React from 'react';
import Enzyme, {mount} from 'enzyme';
import {MemoryRouter} from 'react-router-dom';
import Adapter from 'enzyme-adapter-react-16';
import ArtistQuestionScreen from './artist-question-screen';
import questions from '../../mocks/test-questions';

Enzyme.configure({
  adapter: new Adapter()
});

describe(`ArtistQuestionScreen`, () => {
  describe(`onAnswerClick`, () => {
    test(`When use clicks answer with "Thad Jones" as an artist,
      onAcserClick should be called with "artist" and "Thad Jones" as parameters`, () => {
      const onAnswerClick = jest.fn();
      const wrapper = mount(
          <MemoryRouter>
            <ArtistQuestionScreen
              question={questions[0]}
              onAnswerClick={onAnswerClick}
            />
          </MemoryRouter>
      );
      wrapper
        .find(`input[value="Thad Jones"]`)
        .simulate(`click`);
      expect(onAnswerClick).toHaveBeenCalledTimes(1);
      expect(onAnswerClick).toHaveBeenCalledWith(`artist`, `Thad Jones`);
    });

    test(`When use clicks answer with "Miles Davis" as an artist,
      onAcserClick should be called with "artist" and "Miles Davis" as parameters`, () => {
      const onAnswerClick = jest.fn();
      const wrapper = mount(
          <MemoryRouter>
            <ArtistQuestionScreen
              question={questions[0]}
              onAnswerClick={onAnswerClick}
            />
          </MemoryRouter>
      );
      wrapper
        .find(`input[value="Miles Davis"]`)
        .simulate(`click`);
      expect(onAnswerClick).toHaveBeenCalledTimes(1);
      expect(onAnswerClick).toHaveBeenCalledWith(`artist`, `Miles Davis`);
    });
  });
});
