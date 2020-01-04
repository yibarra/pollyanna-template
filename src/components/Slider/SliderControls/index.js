import React from 'react';
import PropTypes from 'prop-types';

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

    if (props.type === 1 || props.type === 2 || props.type === 4) {
      for (let i = 0; i < props.length; i++) {
        items.push(typeElement(props.type, i));
      }
    } else if (props.type === 3) {
      items.push(typeElement(props.type));
    }

    return items;
  };

  // type element
  const typeElement = (type, index) => {
    if (Number.isInteger(type) === false) return false;

    switch (type) {
      case 3: 
        return <li className="slider--controls--item" key={index}></li>;
      case 4:
      case 2:
      case 1: 
      default:
        return <li className="slider--controls--item" data-current={props.current === index} key={index}>
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
