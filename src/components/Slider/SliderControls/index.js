import React from 'react';
import PropTypes from 'prop-types';

import SliderControlDate from './SliderControlDate';

import './slider-controls.scss';

/**
 * Slider Controls
 * 
 * @param {*} props 
 */
const SliderControls = (props) => {
  // create item
  const createItem =  () => {
    const items = [];

    if (props.type === 1) {
      for (let i = 0; i < props.length; i++) {
        items.push(typeElement(props.type, i));
      }
    } else if (props.type === 2) {
      items.push(typeElement(props.type));
    }

    return items;
  };

  // get item
  const getItem = (type) => {
    let current;

    if (type === 'prev') {
      current = (props.current - 1) < 0 ? (props.length - 1) : (props.current - 1);
    } else if (type === 'next') {
      current = (props.current + 1) <= (props.length - 1) ? (props.current + 1) : 0;
    }

    return current;
  }

  // on next prev
  const onNextPrev = (type) => {
    props.setCurrent(getItem(type));
  };

  // type element
  const typeElement = (type, index) => {
    if (Number.isInteger(type) === false) return false;

    switch (type) {
      case 2: 
        return <li className="slider-controls--item" key={1}>
          <SliderControlDate {...props} type={'prev'} onNextPrev={onNextPrev} getItem={getItem} key={0} />
          <SliderControlDate {...props} type={'next'} onNextPrev={onNextPrev} getItem={getItem} key={1} />
        </li>;
      case 1: 
      default:
        return <li className="slider-controls--item" data-current={props.current === index} key={index}>
          <button className="item" onClick={() => props.setCurrent(index)}></button>
        </li>;
    }
  };

  // return
  return (
    <ul className="slider--controls" data-type={props.type}>
      {createItem(props.current)}
    </ul>
  )
}

SliderControls.propTypes = {
  current: PropTypes.any,
  length: PropTypes.number,
  setCurrent: PropTypes.func.isRequired,
  type: PropTypes.number.isRequired,
}

export default SliderControls;
