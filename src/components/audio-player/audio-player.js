import React from 'react';
import PropTypes from 'prop-types';

class AudioPlayer extends React.PureComponent {
  constructor(props) {
    super(props);
    this.getButtonClass = this.getButtonClass.bind(this);
    this.handleTrackClick = this.handleTrackClick.bind(this);

    this.state = {
      isPlaying: false,
      playingTrack: null
    };
  }

  handleTrackClick(src) {
    if (!this.state.isPlaying) {
      this.setState({
        isPlaying: true,
        playingTrack: src
      });
    } else if (this.state.playingTrack === src) {
      this.setState({
        isPlaying: false,
        playingTrack: null,
      });
    } else {
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
                  this.handleTrackClick(track.src);
                }}
              >
              </button>
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
