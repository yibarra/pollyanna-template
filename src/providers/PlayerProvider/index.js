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
  const [ state, setState ] = useState({ buffer: null, dataArray: null });
  const [ paused, setPaused ] = useState(false);

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
    if (element.current instanceof Object) {
      console.log('on play audio provider');
      if (element.current.paused === true) {
        element.current.play();
        animation(state.buffer);
      } else {
        element.current.pause();
        cancelAnimationFrame(refAnimation.current);
      }

      return true;
    }

    return false;
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
  const requestOnLoad = useCallback((e, audioData) => {
    console.log('requiest on load');
    element.current = new Audio(audioData.url);
    element.current.load();

    try {
      element.current.volume = 0.4;
      element.current.onloadeddata = (e) => onLoadAudioComplete(e);

      element.current.addEventListener('canplaythrough', () => {
        onPlayAudio();
        console.log(element.current.paused);
      });

      element.current.addEventListener('play', () => setPaused(false));
      element.current.addEventListener('pause', () => setPaused(true));
    } catch (e) {
      console.log('Error: ', e);
    } 
  }, [ element, setPaused, onPlayAudio, onLoadAudioComplete ]);

  // on load audio
  const onLoadAudio = useCallback((audioData, callback) => {
    console.log(audioData, callback, 'on load audio');
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
    
    // on load
    request.onload = e => requestOnLoad(e, audioData);
    request.send();
  }, [ progress, requestOnLoad ]);

  // on set audio
  const onSetAudio = useCallback((audioData) => {
    if (audioData instanceof Object) {
      if (element.current) {
        element.current.pause();
      }

      console.log('on set audio')
      onLoadAudio(audioData);
    }
  }, [ onLoadAudio ]);

  // set callback animation
  const setCallbackAnimation = useCallback(callback => {
    if (typeof callback === 'function') {
      callbackAnimation.current = callback;
    }
  }, []);

  console.log('player providers');

  // render
  return (
    <PlayerContext.Provider value={{
        audio: {
          analyser,
          element,
          source,
          progress,
          paused,
          ...state,
        },
        onSetAudio,
        onPlayAudio,
        setCallbackAnimation,
      }}>
      {children}
    </PlayerContext.Provider>
  );
}

PlayerProvider.propTypes = {
  any: PropTypes.any,
};

export { PlayerContext, PlayerProvider };
export default memo(PlayerProvider);