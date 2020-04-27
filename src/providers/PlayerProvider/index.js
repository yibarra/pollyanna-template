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
  let audio = useRef(null);
  let source = useRef(null);

  // on load audio complete
  const onLoadAudioComplete = useCallback((event) => {
    if (event instanceof Object === false || !event) return false;

    const context = new AudioContext();
    analyser.current = context.createAnalyser();

    if (!source.current === true) {
      source.current = context.createMediaElementSource(audio.current);
    }

    if (analyser.current && source.current && context.current) {
      source.current.connect(analyser.current);

      analyser.current.connect(context.destination);
      analyser.current.fftSize = 512;

      setState({
        buffer: analyser.current.frequencyBinCount,
        dataArray: new Uint8Array(analyser.current.frequencyBinCount),
      });
    }
  }, [ audio, setState ]);

  // on load audio
  const onLoadAudio = useCallback((audioData) => {
    if (!audioData.url === true) return false;

    const request = new XMLHttpRequest();
    request.open('GET', audioData.url, true);

    request.onprogress = e => {
      const percentProgress = Math.floor((e.loaded / e.total) * 100);

      if (isNaN(percentProgress) === false) {
        console.log(percentProgress);
      }
    };
    
    request.onload = (e) => {
      audio.current = new Audio(audioData.url);
      audio.current.load();

      try {
        audio.current.volume = 1;
        audio.current.onloadeddata = (e) => onLoadAudioComplete(e);
      } catch (e) {
        console.log('Error: ', e);
      } 
    };

    request.send();
  }, [ audio, onLoadAudioComplete ]);

  // on set audio
  const onSetAudio = (audioData) => {
    if (audioData instanceof Object) {
      onLoadAudio(audioData);
    }
  };

  // render
  return (
    <FirestoreProvider firebase={firebase} {...config}>
      <FirestoreCollection path="audios/" orderByValue={"created_on"}>
        {({ value }) =>
        <PlayerContext.Provider value={
            {
              audio: {
                audio,
                analyser,
                source,
                ...state,
              },
              items: value,
              onSetAudio: onSetAudio,
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