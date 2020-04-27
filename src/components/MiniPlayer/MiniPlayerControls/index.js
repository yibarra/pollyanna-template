import React from 'react';
import PropTypes from 'prop-types';

import './mini-player-controls.scss';

// Mini Player Controls
const MiniPlayerControls = ({ paused, onPlay, onNextPrev }) => {
  // render
  return (
    <div className="mini-player--controls">
      <button className="btn btn-play" onClick={() => onPlay(paused)} data-paused={!paused}>
        <i className="material-icons">play_arrow</i>
        <i className="material-icons">pause</i>
      </button>

      <button className="btn" onClick={() => onNextPrev('prev')}>
        <i className="material-icons">skip_previous</i>
      </button>

      <button className="btn" onClick={() => onNextPrev('next')}>
        <i className="material-icons">skip_next</i>
      </button>
    </div>
  );
};

MiniPlayerControls.propTypes = {
  audio: PropTypes.object,
  onPlay: PropTypes.func,
  onNextPrev: PropTypes.func,
};

export default MiniPlayerControls;