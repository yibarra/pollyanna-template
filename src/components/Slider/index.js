import React, { useState } from 'react';
import PropTypes from 'prop-types';

import NumberText from '../NumberText';
import SliderBackground from './SliderBackground';
import SliderControls from './SliderControls';
import SliderList from './SliderList';

import './slider.scss';

// Slider
const Slider = ({ background, callback, current, children, items, type }) => { 
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
      {type === 1 && background === true &&
        <SliderBackground item={items[0]} />}
      
      <SliderList children={children} current={current} last={last} />

      {(type === 1 || type === 4) && 
        <NumberText current={current} last={last} type={1} />}

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
  items: PropTypes.array,
  type: PropTypes.number,
}

export default Slider;