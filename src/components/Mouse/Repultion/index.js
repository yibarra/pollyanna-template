import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ReactDOM from 'react-dom';

/**
 * Repultion
 *
 * @class Repultion
 * @extends {Component}
 */
class Repultion extends Component { 
  /**
   * component did mount
   *
   * @memberof Repultion
   */
  componentDidMount() {
    this.element = ReactDOM.findDOMNode(this);
    this.animation();
  }

  /**
   * component did uptate
   *
   * @param {*} prevProps
   * @memberof Repultion
   */
  componentDidUpdate(prevProps) {
    if (this.props.mouse !== prevProps.mouse) {
      this.animation();
    }
  }

  /**
   * animation
   *
   * @memberof Repultion
   */
  animation() {
    const point = this.element.getBoundingClientRect();
    const move = this.onRepulsion(point);
    
    this.element.style.transform = `translate(${move.x}px,${move.y}px)`;
  }

  /**
   * on reulpsion
   *
   * @param {*} point
   * @returns
   * @memberof Repultion
   */
  onRepulsion(point) {
    const dx = point.x - this.props.mouse.x;
    const dy = point.y - this.props.mouse.y;

    const angle = Math.atan2(dy, dx);
    const dist = this.props.strength / Math.sqrt(dx * dx + dy * dy);

    const ox = dx / dist * this.props.length - dx;
    const oy = dy / dist * this.props.length - dy;

    const px = this.props.mouse.x * 100 / document.body.clientWidth;
    const py = this.props.mouse.y * 100 / document.body.clientHeight;

    let x = px <= 50 ? (px - 50) : (px - 50);
    let y = py <= 50 ? (py - 50) : (py - 50);

    x += Math.cos(angle) * dist;
    y += Math.sin(angle) * dist;

    x += Math.floor((ox - x) * this.props.cushion);
    y += Math.floor((oy - y) * this.props.cushion);

    return {
      x: parseInt(x),
      y: parseInt(y),
    };
  }

  /**
   * render
   *
   * @returns
   * @memberof Repultion
   */
  render() {
    return (
      <div className="repultion">
        {this.props.children}
      </div>
    )
  }
}

Repultion.propTypes = {
  cushion: PropTypes.number.isRequired,
  length: PropTypes.number.isRequired,
  mouse: PropTypes.object,
  strength: PropTypes.number.isRequired,
}

export default Repultion;