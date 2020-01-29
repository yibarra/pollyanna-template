import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Repultion from '../Mouse/Repultion';
import NumberText from '../NumberText';
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
      last: null,
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
        last: prevState.current,
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
      return <li
        className="slider--item"
        data-active={this.props.current === index}
        data-last={this.state.last === index}
        key={index}>{child}</li>
    });

    return (
      <div className="slider" data-direction={this.state.direction} data-type={this.props.type}>
        <ul className="slider--container">{itemsChilds}</ul>

        {(this.props.type === 1 || this.props.type === 4) && 
          <NumberText current={this.props.current} last={this.state.last} type={1} />}

        {this.props.type === 1 && this.props.background === true &&
          <div className="slider--background">
            <Repultion items={[{
              max: 20,
              perspective: 3000,
              scale: 1,
            }, {
              max: 10,
              perspective: 1000,
              scale: 1.01,
            }]}>
              <img className="image" src={`${process.env.PUBLIC_URL}/images/path-1.png`} alt={'Pollyanna Ferrari'} />
              <img className="image" src={`${process.env.PUBLIC_URL}/images/path-2.png`} alt={'Pollyanna Ferrari'} />
            </Repultion>
          </div>}

        <SliderControls
          current={this.props.current}
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