import React, { useCallback, useEffect, useContext, useState } from 'react';
import PropTypes from 'prop-types';

import Anime from "@mollycule/react-anime";

import { PlayerContext } from '../../providers/PlayerProvider';
import { ThemeContext } from '../../providers/ThemeProvider';

import MiniPlayerControls from './MiniPlayerControls';
import MiniPlayerTimer from './MiniPlayerTimer';

import './mini-player.scss';

// Mini Player
const MiniPlayer = () => {
  // player context
  const playerContext = useContext(PlayerContext);
  // theme context
  const themeContext = useContext(ThemeContext);

  // on set audio
  const { onSetAudio } = playerContext;

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
    <Anime
      in
      appear
      duration={1000}
      onEntering={{ translateX: [100, 0], opacity: [0, 1] }}
      onExiting={{ translateX: -100, opacity: 0 }}
      easing="cubicBezier(0.075, 0.82, 0.165, 1)"
      delay={300}>
      {item instanceof Object && 
        <div className="mini-player">
          <MiniPlayerControls 
            audio={audio}
            onNextPrev={onNextPrev}
            onPlay={onPlayAudio}
            paused={paused} />

          <MiniPlayerTimer
            color={themeContext instanceof Object && themeContext.theme ? themeContext.theme['--text-color'] : '#222'}
            height={60}
            item={item}
            width={310}
            paused={paused}
            onSetAudio={onSetAudio} />
        </div>}
    </Anime>
  );
};

MiniPlayer.propTypes = {
  any: PropTypes.any,
}

export default MiniPlayer;
