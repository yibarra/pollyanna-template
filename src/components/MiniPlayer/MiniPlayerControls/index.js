import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Translation } from 'react-i18next';

import './mini-player-controls.scss';

/**
 * Mini Player Controls
 *
 * @class MiniPlayerControls
 * @extends {Component}
 */
class MiniPlayerControls extends Component {
  /**
   * render
   *
   * @returns
   * @memberof MiniPlayerControls
   */
  render() {
    return (
      <Translation>
        {t =>
          <div className="mini-player--controls">
            <button className="btn btn-play" onClick={(e) => this.props.onPlay(e)} data-paused={this.props.play}>
              <i className="material-icons">play_arrow</i>
              <i className="material-icons">pause</i>
            </button>

            <button className="btn" onClick={() => this.props.onNextPrev('prev')}>
              <i className="material-icons">skip_previous</i>
            </button>

            <button className="btn" onClick={() => this.props.onNextPrev('next')}>
              <i className="material-icons">skip_next</i>
            </button>
          </div>
        }
      </Translation>
    )
  }
}

MiniPlayerControls.propTypes = {
  onPlay: PropTypes.func.isRequired,
  onNextPrev: PropTypes.func,
}


export default MiniPlayerControls;