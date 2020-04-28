import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import { PlayerContext } from '../../../providers/PlayerProvider';

import './mini-player-controls.scss';

// Mini Player Controls
const MiniPlayerControls = ({ onPrevNext }) => {

  const playerContext = useContext(PlayerContext);
  const { audio: { element }, onPlayAudio } = playerContext;

  console.log(element);

  // render
  return (
    <div className="mini-player--controls">
      <button className="btn btn-play" onClick={() => onPlayAudio()} data-paused={false}>
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

export default MiniPlayerControls;