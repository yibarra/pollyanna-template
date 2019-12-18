import React from 'react';
import PropTypes from 'prop-types';

import { Translation } from 'react-i18next';

import './mini-player-controls.scss';

// Mini Player Controls
const MiniPlayerControls = props => {
  // render
  return (
    <Translation>
      {t =>
        <div className="mini-player--controls">
          <button className="btn btn-play" onClick={() => props.onPlay(!props.play)} data-paused={props.play}>
            <i className="material-icons">play_arrow</i>
            <i className="material-icons">pause</i>
          </button>

          <button className="btn" onClick={() => props.onNextPrev('prev')}>
            <i className="material-icons">skip_previous</i>
          </button>

          <button className="btn" onClick={() => props.onNextPrev('next')}>
            <i className="material-icons">skip_next</i>
          </button>
        </div>
      }
    </Translation>
  );
};

MiniPlayerControls.propTypes = {
  onPlay: PropTypes.func.isRequired,
  onNextPrev: PropTypes.func,
};

export default MiniPlayerControls;