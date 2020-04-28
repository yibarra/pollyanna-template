import React, { createContext, useCallback, useRef, useState } from 'react';
import PropTypes from 'prop-types';

import 'firebase/firestore';
import firebase from 'firebase/app';
import { FirestoreProvider, FirestoreCollection } from '@react-firebase/firestore';
import { config } from '../../config';

/**
 * Player Context
 */
const PlayerContext = createContext({
  audio: {},
  items: null,
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
    
    // on load
    request.onload = (e) => {
      element.current = new Audio(audioData.url);
      element.current.load();

      console.log(element.current);

      try {
        callbackAnimation.current = callback;
        element.current.volume = 0.4;
        element.current.onloadeddata = (e) => onLoadAudioComplete(e);
      } catch (e) {
        console.log('Error: ', e);
      } 
    };

    request.send();
  }, [ element, progress, onLoadAudioComplete ]);

  // on set audio
  const onSetAudio = useCallback((audioData, callback) => {
    if (audioData instanceof Object) {
      if (element.current) {
        element.current.pause();
      }

      onLoadAudio(audioData, callback);
    }
  }, [ onLoadAudio ]);

  // render
  return (
    <FirestoreProvider firebase={firebase} {...config}>
      <FirestoreCollection path="audios/" orderByValue={"created_on"}>
        {({ value }) =>
        <PlayerContext.Provider value={
            {
              audio: {
                element,
                analyser,
                source,
                progress,
                ...state,
              },
              items: value,
              onSetAudio: onSetAudio,
              onPlayAudio: onPlayAudio,
            }
          }>
          {children}
        </PlayerContext.Provider>
        }
      </FirestoreCollection>
    </FirestoreProvider>
  );
}

PlayerProvider.propTypes = {
  any: PropTypes.any,
};

export { PlayerContext, PlayerProvider };
export default PlayerProvider;