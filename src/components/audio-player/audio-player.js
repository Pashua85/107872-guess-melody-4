import React, {useState} from 'react';
import PropTypes from 'prop-types';

const AudioPlayer = (props) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [playingTrack, setPlayingTrack] = useState(null);
  const buttonRefs = [];

  const handleTrackClick = (src, index) => {
    if (!isPlaying) {
      buttonRefs[index].play();
      setIsPlaying(true);
      setPlayingTrack(src);
    } else if (playingTrack === src) {
      buttonRefs[index].pause();
      setIsPlaying(false);
      setPlayingTrack(null);
    } else {
      buttonRefs.forEach((ref) => {
        ref.pause();
      });
      buttonRefs[index].play();
      setPlayingTrack(src);
    }
  };

  const getButtonClass = (src) => {
    if (playingTrack === src) {
      return `track__button track__button--pause`;
    } else {
      return `track__button track__button--play`;
    }
  };

  const {tracks, type, onInputChange} = props;

  return (
    <React.Fragment>
      {
        tracks.map((track, index) => (
          <div className="track" key={track.src}>
            <button
              className={getButtonClass(track.src)}
              type="button"
              onClick={() => {
                handleTrackClick(track.src, index);
              }}
            >
            </button>
            <div className="track__status">
              <audio
                src={track.src}
                ref={(btnRef) => {
                  buttonRefs[index] = btnRef;
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


};

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
