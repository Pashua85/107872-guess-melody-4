import React from 'react';
import PropTypes from 'prop-types';

class AudioPlayer extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isPlaying: false,
      playingTrack: null
    };
  }

  render() {
    const {tracks, type, onInputChange} = this.props;
    return (
      <React.Fragment>
        {
          tracks.map((track, index) => (
            <div className="track" key={track.src}>
              <button className="track__button track__button--play" type="button"></button>
              <div className="track__status">
                <audio></audio>
              </div>
              {
                type === `genre` &&
                <div className="game__answer">
                  <input
                    className="game__input visually-hidden"
                    type="checkbox"
                    name="answer"
                    value={track.genre}
                    id={track.genre}
                    onChange={() => {
                      onInputChange(index);
                    }}
                  />
                  <label className="game__check" htmlFor={track.genre}>Отметить</label>
                </div>
              }
            </div>
          ))
        }
      </React.Fragment>
    );
  }
}

AudioPlayer.propTypes = {
  tracks: PropTypes.arrayOf(
      PropTypes.shape({
        src: PropTypes.string.isRequired,
        artist: PropTypes.string,
        genre: PropTypes.string
      })
  ),
  type: PropTypes.string.isRequired,
  onInputChange: PropTypes.func
};


export default AudioPlayer;
