import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';

import MiniPlayerControls from './MiniPlayerControls';
import MiniPlayerInfo from './MiniPlayerInfo';
import PlayerCanvas from '../PlayerCanvas';

import './mini-player.scss';

// Mini Player
const MiniPlayer = props => {
  // play
  const [ play, setPlay ] = useState(false);
  // props
  const { item, onNextPrev } = props;

  // on set play
  const onSetPlay = () => {
    props.onPlay(!play);
    setPlay(!play);
  };

  // redner
  return (
    <div className="mini-player">
      {item && 
        <Fragment>
          <MiniPlayerInfo play={play} {...item} />
          <MiniPlayerControls play={play} onNextPrev={onNextPrev} onPlay={onSetPlay} />
        </Fragment>
      }

      <PlayerCanvas
        color={'#000'}
        height={40}
        item={item}
        play={play}
        width={320} />
    </div>
  );
};

MiniPlayer.propTypes = {
  any: PropTypes.any,
}

export default MiniPlayer;