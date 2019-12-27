import React, { Fragment, useCallback, useEffect, useContext, useState } from 'react';
import PropTypes from 'prop-types';

import { PlayerContext } from '../../providers/PlayerProvider';
import { ThemeContext } from '../../providers/ThemeProvider';

import MiniPlayerControls from './MiniPlayerControls';
import MiniPlayerInfo from './MiniPlayerInfo';
import PlayerCanvas from '../PlayerCanvas';

import './mini-player.scss';

// Mini Player
const MiniPlayer = () => {
  // player context
  const playerContext = useContext(PlayerContext);
  // theme context
  const themeContext = useContext(ThemeContext);

  // audios
  const { audios, audio, onPlayAudio, audio: { paused } } = playerContext;

  // item
  const [ item, setItem ] = useState({});
  // current
  const [ current, setCurrent ] = useState(0);
  
  // on next prev
  const onNextPrev = (e = 'prev') => {
    let index = 0;
    const total = audios.length - 1;

    if (e === 'prev') {
      index = (current - 1) < 0 ? total : current - 1;
    } else if (e === 'next') {
      index = (current + 1) > total ? 0 : (current + 1);
    }

    onSetItem(index);
  };

  // set audio
  const setAudio = useCallback(audio => {
    if (audio instanceof Object) {
      setItem(audio);
    }
  }, [ setItem ]);

  // on set item
  const onSetItem = useCallback(index => {
    if (Number.isInteger(index) === true) {
      const item = audios[index];

      if (item instanceof Object) {
        setAudio(item);
      }

      setCurrent(index);
    }
  }, [ audios, setAudio ]);

  // use effect
  useEffect(() => {
    if (audios) {
      onSetItem(0);
    }
  }, [ audios, onSetItem ]);

  // redner
  return (
    <div className="mini-player">
      {item && 
        <Fragment>
          <MiniPlayerInfo {...item} />
          <MiniPlayerControls 
            audio={audio} onNextPrev={onNextPrev} onPlay={onPlayAudio} paused={paused} />
        </Fragment>
      }

      <PlayerCanvas
        {...themeContext.theme}
        height={40}
        item={item}
        width={320} />
    </div>
  );
};

MiniPlayer.propTypes = {
  any: PropTypes.any,
}

export default MiniPlayer;

/*
// player context
  const playerContext = useContext(PlayerContext);

  // item
  const [ item, setItem ] = useState({});
  // current
  const [ current, setCurrent ] = useState(0);

  // page
  const { page, page: { audios } } = props;

  // on next prev
  const onNextPrev = (e = 'prev') => {
    let index = 0;
    const total = page.audios.length - 1;

    if (e === 'prev') {
      index = (current - 1) < 0 ? total : current - 1;
    } else if (e === 'next') {
      index = (current + 1) > total ? 0 : (current + 1);
    }

    onSetItem(index);
  };

  // set audio
  const setAudio = useCallback(audio => {
    if (audio instanceof Object) {
      setItem(audio);
    }
  }, [ setItem ]);

  // on set item
  const onSetItem = useCallback(index => {
    if (Number.isInteger(index) === true) {
      const item = audios[index];

      if (item instanceof Object) {
        setAudio(item);
      }

      setCurrent(index);
    }
  }, [ audios, setAudio ]);

  // use effect
  useEffect(() => {
    if (page instanceof Object && Array.isArray(audios)) {
      onSetItem(0);
    }
  }, [ audios, page, onSetItem ]);
  */