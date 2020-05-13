import React, { memo } from 'react';
import PropTypes from 'prop-types';

import './mini-player-controls.scss';

// Mini Player Controls
const MiniPlayerControls = ({ onPlayAudio, onPrevNext, paused }) => {
  // render
  return (
    <div className="mini-player--controls">
      <button className="btn btn-play"
        onClick={() => onPlayAudio()}
        data-paused={!paused}>
        <i className="material-icons">play_arrow</i>
        <i className="material-icons">pause</i>
      </button>

      <button className="btn" onClick={() => onPrevNext('prev')}>
        <i className="material-icons">skip_previous</i>
      </button>

      <button className="btn" onClick={() => onPrevNext('next')}>
        <i className="material-icons">skip_next</i>
      </button>
    </div>
  );
};

MiniPlayerControls.propTypes = {
  onPlayAudio: PropTypes.func.isRequired,
  onPrevNext: PropTypes.func,
  paused: PropTypes.bool
};

export default memo(MiniPlayerControls);