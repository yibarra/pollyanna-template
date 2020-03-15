import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';

import NumberText from '../NumberText';
import SliderBackground from './SliderBackground';
import SliderControls from './SliderControls';
import SliderList from './SliderList';

import './slider.scss';

// Slider
const Slider = ({ background, callback, current, last, children, items, type }) => { 
  // state
  const [ direction, setDirection ] = useState('next');

  // ref
  const element = useRef(null);

  // set current
  const setCurrent = index => {
    if (isNaN(index)) return false;

    if (typeof callback === 'function') {
      setDirection(index > current ? 'next' : 'prev');

      callback(index);
    }
  };

  // handle mouse move
  const handleMouseMove = event => {
    if (event instanceof Object === false && element.hasOwnProperty('current') === false) return false;

    const el = element.current
    const r = el.getBoundingClientRect()

    el.style.setProperty('--x', event.clientX - (r.left + Math.floor(r.width / 2)))
    el.style.setProperty('--y', event.clientY - (r.top + Math.floor(r.height / 2)))
  };

  // handle mouse leave
  const handleMouseLeave = event => {   
    if (event instanceof Object === false && element.hasOwnProperty('current') === false) return false;
    
    element.current.style.setProperty('--x', 0);
    element.current.style.setProperty('--y', 0);
  };

  // render
  return (
    <div
      className="slider"
      data-direction={direction}
      data-type={type}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      ref={element}>
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
  last: PropTypes.number,
  type: PropTypes.number,
}

export default Slider;