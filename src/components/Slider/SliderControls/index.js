import React from 'react';
import PropTypes from 'prop-types';

import './slider-controls.scss';

/**
 * Slider Controls
 * 
 * @param {*} props 
 */
const SliderControls = ({ current, length, setCurrent, type }) => {
  // create item
  const createItem =  () => {
    const items = [];

    if (type === 1 || type === 2 || type === 4) {
      for (let i = 0; i < length; i++) {
        items.push(typeElement(type, i));
      }
    } else if (type === 3) {
      items.push(typeElement(type));
    }

    return items;
  };

  // type element
  const typeElement = (type, index) => {
    if (Number.isInteger(type) === false) return false;

    switch (type) {
      case 3: 
        return <li className="slider--controls--item" key={index}></li>;
      case 1: 
      default:
        return <li className="slider--controls--item" data-current={current === index} key={index}>
          <button className="item" onClick={() => setCurrent(index)}></button>
        </li>;
    }
  };

  // return
  return (
    <ul className="slider--controls" data-type={type}>
      {createItem(current)}
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
