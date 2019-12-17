import React, { Component } from 'react';
import PropTypes from 'prop-types';

import SliderControls from './SliderControls';

import './slider.scss';

/**
 * Slider
 *
 * @class Slider
 * @extends {Component}
 */
class Slider extends Component {
  /**
   * Creates an instance of Slider.
   * 
   * @param {*} props
   * @memberof Slider
   */
  constructor(props) {
    super(props);

    this.state = {
      direction: 'next',
      current: 0,
    };

    this.setCurrent = this.setCurrent.bind(this);
  }

  /**
   * set current
   *
   * @param {*} index
   * @returns
   * @memberof Slider
   */
  setCurrent(index) {
    if (Number.isInteger(index) === false) return false;

    this.setState((prevState) => {
      return {
        direction: index > prevState.current ? 'next' : 'prev',
        current: index,
      };
    }, () => {
      if (typeof this.props.callback === 'function') {
        this.props.callback(index);
      }
    });
  }

  /**
   * render
   *
   * @returns
   * @memberof Slider
   */
  render() {
    const itemsChilds = React.Children.map(this.props.children, (child, index) => {
      return <li className="slider--item" data-active={this.props.current === index} key={index}>{child}</li>
    });

    return (
      <div className="slider" data-direction={this.state.direction}>
        <ul className="slider--container">
          {itemsChilds}
        </ul>

        <SliderControls
          current={this.props.current}
          items={this.props.items}
          type={this.props.type}
          setCurrent={this.setCurrent}
          length={React.Children.count(this.props.children)} />
      </div>
    )
  }
}

Slider.propTypes = {
  any: PropTypes.any,
  callback: PropTypes.func,
  type: PropTypes.number,
}

export default Slider;