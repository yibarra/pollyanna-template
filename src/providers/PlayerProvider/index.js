import React, { Component, createContext, createRef } from 'react';
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
  audios: null,
  onPlayAudio: () => {},
  onSetAudio: () => {},
});

/**
 * Player Provider
 *
 * @class PlayerProvider
 * @extends {Component}
 */
class PlayerProvider extends Component {
  /**
   * Creates an instance of PlayerProvider.
   * 
   * @param {*} props
   * @memberof PlayerProvider
   */
  constructor(props) {
    super(props);

    this.state = {
      analyser: null,
      audio: null,
      audioData: '',
      buffer: null,
      context: null,
      dataArray: null,
      source: null,
      paused: false,
      progress: 0,
    };

    this.analyser = null;
    this.audioRef = createRef();
    this.callbackAnimation = () => {};
    this.refAnimation = null;

    this.animation = this.animation.bind(this);
    this.onPlayAudio = this.onPlayAudio.bind(this);
    this.onSetAudio = this.onSetAudio.bind(this);
  }

  /**
   * animation
   *
   * @memberof PlayerProvider
   */
  animation() {
    if (typeof this.callbackAnimation === 'function') {
      this.refAnimation = requestAnimationFrame(this.animation);

      if (this.refAnimation !== null && this.analyser !== null && this.refAnimation > 0) {
        this.analyser.getByteFrequencyData(this.state.dataArray);
      }

      this.callbackAnimation(this.state.dataArray, this.state.audio);
    } else {
      cancelAnimationFrame(this.refAnimation);
    }
  }

  // on load audio
  onLoadAudio(audio) {
    if (!audio.url) return false;

    const request = new XMLHttpRequest();
    request.open('GET', audio.url, true);

    request.onprogress = e => {
      const progress = Math.floor((e.loaded / e.total) * 100);

      if (isNaN(progress) === false) {
        this.setState({ progress });
      }
    };
    
    request.onload = (e) => {
      this.audioRef.current.src = audio.url;
      this.audioRef.current.load();

      this.setState({
        audio: new Audio(this.state.audioData.url),
      }, () => {
        const { audio } = this.state;
  
        try {
          audio.onloadeddata = (e) => this.onLoadAudioComplete(e);
        } catch (e) {
          console.log('Error: ', e);
        } 
      });
    };

    request.send();
  }
  
  // on load audio complete
  onLoadAudioComplete(event) {
    if (event instanceof Object === false || !event) return false;

    this.setState({
      context: new AudioContext(), 
    }, () => {
      this.setState({
        analyser: this.state.context.createAnalyser(),
        source: this.state.context.createMediaElementSource(this.state.audio),
      }, () => {
        this.analyser = this.state.analyser;

        this.state.source.connect(this.analyser);

        this.analyser.connect(this.state.context.destination);
        this.analyser.fftSize = 512;

        this.setState({
          buffer: this.analyser.frequencyBinCount,
        }, () => {
          this.setState({
            dataArray: new Uint8Array(this.analyser.frequencyBinCount),
          }, () => this.onPlayAudio(true));
        });
      });
    });
  }

  // on play audio
  onPlayAudio(value) {
    if (!this.state.audio) {
      return false;
    } else {
      if (this.state.audio instanceof Object === false) return false;

      try {
        if (value === true && this.state.audio.paused === true) {
          this.state.audio.play();

          this.setState({
            paused: false,
          }, () => this.animation(this.state.buffer));

          return true;
        } else {
          this.state.audio.pause();

          this.setState({
            paused: true,
          }, () => cancelAnimationFrame(this.refAnimation));
        }
      } catch (e) {
        console.error('Error: ', e);
      }
    }

    return false;
  }

  // on set audio
  onSetAudio(audio, callback) {
    if (audio instanceof Object) {
      this.onPlayAudio();

      this.setState({
        audioData: audio,
      }, () => {
        this.callbackAnimation = callback;
        this.onLoadAudio(this.state.audioData);
      });
    }
  }

  // render
  render() {
    return (
      <FirestoreProvider firebase={firebase} {...config}>
        <FirestoreCollection path="audios/" orderByValue={"created_on"}>
          {({ value }) => <PlayerContext.Provider value={
              { audio: this.state, audios: value, onPlayAudio: this.onPlayAudio, onSetAudio: this.onSetAudio, }
            }>
            <audio crossOrigin="anonymous" ref={this.audioRef} />
            {this.props.children}
          </PlayerContext.Provider>
          }
        </FirestoreCollection>
      </FirestoreProvider>
    )
  }
}

PlayerProvider.propTypes = {
  any: PropTypes.any,
};

export { PlayerContext, PlayerProvider };
export default PlayerProvider;