import React, { Component, createContext } from 'react';
import PropTypes from 'prop-types';

/**
 * Player Context
 */
const PlayerContext = createContext({
  audio: {},
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
    };

    this.analyser = null;
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

  /**
   * on load audio
   *
   * @memberof PlayerProvider
   */
  onLoadAudio() {
    this.setState({
      audio: new Audio(this.state.audioData.url),
    }, () => {
      const { audio } = this.state;
      audio.onloadeddata = (e) => this.onLoadAudioComplete(e);
    });
  }
  
  /**
   * on load audio complete
   *
   * @param {*} event
   * @returns
   * @memberof PlayerProvider
   */
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

  /**
   * on play audio
   *
   * @param {*} value
   * @returns
   * @memberof PlayerProvider
   */
  onPlayAudio(value) {
    if (!this.state.audio) {
      return false;
    } else {
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
    }

    return false;
  }

  /**
   * on set audio
   *
   * @param {*} audio
   * @param {*} callback
   * @memberof PlayerProvider
   */
  onSetAudio(audio, callback) {
    if (audio instanceof Object) {
      this.onPlayAudio();

      this.setState({
        audioData: audio,
      }, () => {
        this.callbackAnimation = callback;
        this.onLoadAudio();
      });
    }
  }

  /**
   * render
   *
   * @returns
   * @memberof PlayerProvider
   */
  render() {
    return (
      <PlayerContext.Provider value={
          { audio: this.state, onPlayAudio: this.onPlayAudio, onSetAudio: this.onSetAudio, }
        }>
        {this.props.children}
      </PlayerContext.Provider>
    )
  }
}

PlayerProvider.propTypes = {
  any: PropTypes.any,
}

export { PlayerContext, PlayerProvider };
export default PlayerProvider;