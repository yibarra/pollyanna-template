import React, { useState } from 'react';
import PropTypes from 'prop-types';

import NumberText from '../NumberText';
import SliderControls from './SliderControls';
import SliderList from './SliderList';

import './slider.scss';
import SliderBackground from './SliderBackground';

// Slider
const Slider = ({ background, callback, current, children, type }) => { 
  // state
  const [ direction, setDirection ] = useState('next');
  const [ last, setLast ] = useState(null);

  // set current
  const setCurrent = index => {
    if (Number.isInteger(index) === false) return false;

    if (typeof callback === 'function') {
      setDirection(index > current ? 'next' : 'prev');
      setLast(current);

      callback(index);
    }
  };

  // render
  return (
    <div className="slider" data-direction={direction} data-type={type}>
      <SliderList children={children} current={current} last={last} />

      {(type === 1 || type === 4) && 
        <NumberText current={current} last={last} type={1} />}

      {type === 1 && background === true &&
        <SliderBackground />}

      <SliderControls
        current={current}
        type={type}
        setCurrent={setCurrent}
        length={React.Children.count(children)} />
    </div>
  )
};

Slider.propTypes = {
  current: PropTypes.number,
  callback: PropTypes.func.isRequired,
  type: PropTypes.number,
}

export default Slider;