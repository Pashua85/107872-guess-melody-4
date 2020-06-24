import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import AudioPlayer from './audio-player';
import questions from '../../mocks/test-questions';

Enzyme.configure({
  adapter: new Adapter()
});

describe(`AudioPlayer`, () => {
  it(`should render correctly with one track`, () => {
    const wrapper = shallow(
        <AudioPlayer
          tracks={questions[0].tracks}
          type={questions[0].type}
        />
    );
    expect(wrapper).toMatchSnapshot();
  });

  it(`should render correctly with 4 tracks`, () => {
    const wrapper = shallow(
        <AudioPlayer
          tracks={questions[1].tracks}
          type={questions[1].type}
          onInputChange={() => {}}
        />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
