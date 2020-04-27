import React, { useCallback, useContext } from 'react';
import PropTypes from 'prop-types';

import Anime from "@mollycule/react-anime";
//import { useWindowSize } from '@react-hook/window-size';

import { PlayerContext } from '../../providers/PlayerProvider';
import { ThemeContext } from '../../providers/ThemeProvider';

import SliderBase from '../Slider/Base';

import MiniPlayerControls from './MiniPlayerControls';
import MiniPlayerTimer from './MiniPlayerTimer';

import './mini-player.scss';

// Mini Player
const MiniPlayer = ({ current, onNextPrev, setCurrent }) => {
  // player context && theme
  const playerContext = useContext(PlayerContext);
  const themeContext = useContext(ThemeContext);

  // audios
  const { items, onSetAudio, audio } = playerContext;

  const onPlay = () => {
    console.log('play');
  };

  const setAudioPlay = useCallback(callback => {
    if (!Array.isArray(items) || !items.length) return false;

    const item = items[current];

    if (item instanceof Object) {
      onSetAudio(item);

      if (audio.audio.current instanceof Object) {
        audio.audio.current.onended = (e => {
          console.log(e, 'finish');
        });

        setTimeout(() => {
          const promise = audio.audio.current.play();

          if (promise !== undefined) {
            promise.then(_ => {
              console.log('animation');
            }).catch(error => {
              console.log('remove animation');
            });
          }
        }, 1000);
      }
    }
  }, [ audio, current, items, onSetAudio ]);

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
      {audio instanceof Object &&
        <div className="mini-player">
          <MiniPlayerControls 
            audio={audio.audio.current}
            onNextPrev={onNextPrev}
            onPlay={onPlay}
            paused={audio.current ? audio.current.paused : false} />

          <MiniPlayerTimer
            color={themeContext.theme ? themeContext.theme['--text-color'] : '#222'}
            height={60}
            item={current}
            paused={audio.current ? audio.current.paused : false}
            width={310}
            onSetAudio={setAudioPlay} />
        </div>}
    </Anime>
  );
};

MiniPlayer.propTypes = {
  any: PropTypes.any,
}

export default SliderBase(MiniPlayer);
