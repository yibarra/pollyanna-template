import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';

import * as d3 from 'd3/dist/d3';

import MiniPlayerControls from './MiniPlayerControls';
import MiniPlayerInfo from './MiniPlayerInfo';

import './mini-player.scss';

class MiniPlayer extends Component {

  constructor(props) {
    super(props);

    this.state = {
      play: false,
    };

    this._x = 0;
    this._y = 0;

    this.onAnimation = this.onAnimation.bind(this);
    this.getLine = this.getLine.bind(this);

    this.onPlay = this.onPlay.bind(this);
  }
  
  componentDidMount() {
    this.element = ReactDOM.findDOMNode(this);
    this.svg = d3.select(this.element.querySelector('.line'));

    this.element.querySelector('.line')
      .setAttribute('height', 20);

    this.element.querySelector('.line')
      .setAttribute('width', this.element.getBoundingClientRect().width);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.item !== this.props.item) {
      this.props.onSetAudio(this.props.item, this.onAnimation);

      this.setState({
        play: false,
      });
    }
  }

  getLine(data) {
    if (!data) return false;

    const height = parseInt(this.svg.attr('height'));
    const width = parseInt(this.svg.attr('width'));

    this._x = d3.scaleLinear()
      .range([0, width])
      .domain([0, width]);

    this._y = d3.scaleLinear()
      .range([height / 2, height / 4])
      .domain([height / 2, d3.max(d3.values(data))]);

    return d3.line()
      .x((d, i) => this._x(i * (width / data.length)))
      .y(d => this._y((height / 2) - d))
      .curve(d3.curveBasis);
  }

  onAnimation(bufferArray) {
    if (bufferArray && bufferArray.length) {
      const data = this.updateVisualizerSplit(bufferArray);

      this.svg.select('path')
        .data([data])
        .attr('d', this.getLine(data));
    }
  }

  onPlay(event) {
    if (event instanceof Object === false || !event) return false;

    const button = event.target;

    if (button instanceof Object) {
      const value = this.props.onPlayAudio(true);

      this.setState({
        play: value,
      }, () => button.setAttribute('data-paused', value));
    }
  }

  /**
   * sequence init
   * 
   * @param length
   * @returns {Array}
   */
  sequenceInit(length = 15) {
    let arr = [];

    for (let i = 0; i < length; i++) {
        let numb = Math.floor(Math.random() * 30);
        arr.push(numb);
    }

    return arr;
  }

  /**
   * update visualizer split
   *
   * @param {*} [data=new Uint8Array(128)]
   * @returns
   * @memberof MiniPlayer
   */
  updateVisualizerSplit(data = new Uint8Array(128)) {
    let dataPositions = new Uint8Array(128),
      initCurve = this.sequenceInit(new Uint8Array(13));

    try {
      dataPositions.set(new Uint8Array(initCurve), 0);
      dataPositions.set(new Uint8Array(data.subarray(13, 115)).reverse(), 13);
      dataPositions.set(new Uint8Array(initCurve), 115);
    } finally {
      return dataPositions;
    }
  }

  /**
   * render
   *
   * @returns
   * @memberof MiniPlayer
   */
  render() {
    return (
      <div className="mini-player">
        {this.props.audio && 
          <Fragment>
            <MiniPlayerInfo play={this.state.play} name={this.props.audioData.name} />
            <MiniPlayerControls play={this.state.play} onNextPrev={this.props.onNextPrev} onPlay={this.onPlay} />
          </Fragment>
        }

        <svg className="line">
          <path id="line" d=""></path>
        </svg>
      </div>
    )
  }
}

MiniPlayer.propTypes = {
  any: PropTypes.any,
}

export default MiniPlayer;