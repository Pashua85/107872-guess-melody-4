import React from 'react';
import PropTypes from 'prop-types';

class AudioPlayer extends React.PureComponent {
  constructor(props) {
    super(props);
    this.getButtonClass = this.getButtonClass.bind(this);
    this.handleTrackClick = this.handleTrackClick.bind(this);
    this.buttonRefs = [];

    this.state = {
      isPlaying: false,
      playingTrack: null
    };
  }

  handleTrackClick(src, index) {
    if (!this.state.isPlaying) {
      this.buttonRefs[index].play();
      this.setState({
        isPlaying: true,
        playingTrack: src
      });
    } else if (this.state.playingTrack === src) {
      this.buttonRefs[index].pause();
      this.setState({
        isPlaying: false,
        playingTrack: null,
      });
    } else {
      this.buttonRefs.forEach((ref) => {
        ref.pause();
      });
      this.buttonRefs[index].play();
      this.setState({
        playingTrack: src
      });
    }
  }

  getButtonClass(src) {
    if (this.state.playingTrack === src) {
      return `track__button track__button--pause`;
    } else {
      return `track__button track__button--play`;
    }
  }

  render() {
    const {tracks, type, onInputChange} = this.props;

    return (
      <React.Fragment>
        {
          tracks.map((track, index) => (
            <div className="track" key={track.src}>
              <button
                className={this.getButtonClass(track.src)}
                type="button"
                onClick={() => {
                  this.handleTrackClick(track.src, index);
                }}
              >
              </button>
              <div className="track__status">
                <audio
                  src={track.src}
                  ref={(btnRef) => {
                    this.buttonRefs[index] = btnRef;
                  }}
                >
                </audio>
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
