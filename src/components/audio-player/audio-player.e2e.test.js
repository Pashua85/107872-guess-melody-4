import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import AudioPlayer from './audio-player';
import questions from '../../mocks/test-questions';

Enzyme.configure({
  adapter: new Adapter()
});

describe(`AudioPlayer`, () => {

  describe(`handleTrackClick`, () => {
    HTMLMediaElement.prototype.play = () => { };
    HTMLMediaElement.prototype.pause = () => { };

    it(`it should change isPlaying from false to true, when track is clicked in not playing player`, () => {
      const wrapper = mount(
          <AudioPlayer
            tracks={questions[0].tracks}
            type={questions[0].type}
          />
      );
      expect(wrapper.state().isPlaying).toBe(false);

      wrapper
        .find(`.track__button`)
        .simulate(`click`);
      expect(wrapper.state().isPlaying).toBe(true);
    });

    it(`it should change isPlaying from true to false, when track is clicked in playing player`, () => {
      const wrapper = mount(
          <AudioPlayer
            tracks={questions[0].tracks}
            type={questions[0].type}
          />
      );
      wrapper.setState({isPlaying: true});

      wrapper
        .find(`.track__button`)
        .simulate(`click`);
      expect(wrapper.state().isPlaying).toBe(true);
    });

    it(`should change plaingTrack from null to "someTestSrc-4", then this track is clicked in not playing player`, () => {
      const wrapper = mount(
          <AudioPlayer
            tracks={questions[0].tracks}
            type={questions[0].type}
          />
      );
      expect(wrapper.state().playingTrack).toBe(null);

      wrapper
        .find(`.track__button`)
        .simulate(`click`);
      expect(wrapper.state().playingTrack).toBe(`someTestSrc-4`);
    });

    test(`When track with src "someTestSrc-0" is playing and user clicks on the track with src "someTestSrc-2", playingTrack in state
    should change from "someTestSrc-0" to "someTestSrc-2"`, () => {
      const wrapper = mount(
          <AudioPlayer
            tracks={questions[1].tracks}
            type={questions[1].type}
          />
      );
      wrapper
        .find(`.track`).at(0)
        .find(`.track__button`)
        .simulate(`click`);
      expect(wrapper.state().playingTrack).toBe(questions[1].tracks[0].src);
      wrapper
        .find(`.track`).at(2)
        .find(`.track__button`)
        .simulate(`click`);
      expect(wrapper.state().playingTrack).toBe(questions[1].tracks[2].src);
    });

  });
});
