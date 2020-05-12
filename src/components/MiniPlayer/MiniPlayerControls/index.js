import React, { memo } from 'react';
import PropTypes from 'prop-types';

import './mini-player-controls.scss';

// Mini Player Controls
const MiniPlayerControls = ({ audio, onPlayAudio, onPrevNext }) => {
  // audio
  const { element } = audio;

  // render
  return (
    <div className="mini-player--controls">
      <button className="btn btn-play"
        onClick={() => onPlayAudio()}
        data-paused={element.current instanceof Object ? !element.current.paused : false}>
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
  onPrevNext: PropTypes.func,
};

export default memo(MiniPlayerControls);