import React, { createContext, useCallback, memo, useRef, useState } from 'react';
import PropTypes from 'prop-types';

/**
 * Player Context
 */
const PlayerContext = createContext({
  audio: {},
  onSetAudio: () => {},
  onPlayAudio: () => {},
});

// Player Provider
const PlayerProvider = ({ children }) => {
  // state
  const [ state, setState ] = useState({
    buffer: null,
    dataArray: null,
  });

  // settings
  let analyser = useRef(null);
  let element = useRef(null);
  let source = useRef(null);
  let refAnimation = useRef(null);
  let callbackAnimation = useRef(() => {});
  let progress = useRef(0);

  // animation
  const animation = useCallback(() => {
    if (typeof callbackAnimation.current === 'function') {
      refAnimation.current = requestAnimationFrame(animation);

      if (refAnimation.current !== null && analyser.current !== null) {
        analyser.current.getByteFrequencyData(new Uint8Array(state.dataArray));
      }

      const anim = callbackAnimation.current;
      anim(state.dataArray, element.current);
    } else {
      cancelAnimationFrame(refAnimation.current);
    }
  }, [ callbackAnimation, state, element ]);

  // on play audio
  const onPlayAudio = useCallback(() => {
    if (!element.current) {
      return false;
    } else {
      if (element.current.paused === true) {
        element.current.play();

        animation(state.buffer);
      } else {
        element.current.pause();
        cancelAnimationFrame(refAnimation.current);
      }

      return true;
    }
  }, [ animation, state ]);

  // on load audio complete
  const onLoadAudioComplete = useCallback((event) => {
    if (event instanceof Object === false) return false;

    const context = new AudioContext();
    
    if (!source.current) {
      analyser.current = context.createAnalyser();
      source.current = context.createMediaElementSource(element.current);

      source.current.connect(analyser.current);
      analyser.current.connect(context.destination);
      analyser.current.fftSize = 512;

      setState({
        buffer: analyser.current.frequencyBinCount,
        dataArray: new Uint8Array(analyser.current.frequencyBinCount),
      });
    }

    return true;
  }, [ element, analyser, source, setState ]);

  // request on loaded
  const requestOnLoad = useCallback((e, audioData, callback) => {
    element.current = new Audio(audioData.url);
    element.current.load();

    element.current.addEventListener("canplaythrough", e => {
      const { target } = e;

      if (target instanceof Object) {
        target.play();
      }
    });

    try {
      callbackAnimation.current = callback;
      element.current.volume = 0.4;
      element.current.onloadeddata = (e) => onLoadAudioComplete(e);
    } catch (e) {
      console.log('Error: ', e);
    } 
  }, [ element, onLoadAudioComplete ]);

  // on load audio
  const onLoadAudio = useCallback((audioData, callback) => {
    if (!audioData.url) return false;

    const request = new XMLHttpRequest();
    request.open('GET', audioData.url, true);

    // on progress
    request.onprogress = e => {
      const percentProgress = Math.floor((e.loaded / e.total) * 100);

      if (isNaN(percentProgress) === false) {
        progress.current = percentProgress;
      }
    };

    console.log('cangrando audio')
    
    // on load
    request.onload = e => requestOnLoad(e, audioData, callback);

    request.send();
  }, [ progress, requestOnLoad ]);

  // on set audio
  const onSetAudio = useCallback((audioData, callback) => {
    if (audioData instanceof Object) {
      if (element.current) {
        element.current.pause();
      }

      console.log('on set audio')
      onLoadAudio(audioData, callback);
    }
  }, [ onLoadAudio ]);

  console.log('player providers');

  // render
  return (
    <PlayerContext.Provider value={
        {
          audio: {
            analyser,
            element,
            source,
            progress,
            ...state,
          },
          onSetAudio: onSetAudio,
          onPlayAudio: onPlayAudio,
        }
      }>
      {children}
    </PlayerContext.Provider>
  );
}

PlayerProvider.propTypes = {
  any: PropTypes.any,
};

export { PlayerContext, PlayerProvider };
export default memo(PlayerProvider);