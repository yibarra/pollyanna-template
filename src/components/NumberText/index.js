import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import anime from 'animejs';

import './number-text.scss';

// number text
const NumberText = props => {
  // element
  const element = useRef(false);

  // animate text
  const animateText = (element, options) => {
    if (element instanceof Object === false) return false;

    anime({
      targets: element,
      easing: 'easeOutSine',
      ...options
    })
  };

  // animate
  const animate = () => {
    const last = ReactDOM.findDOMNode(element.current.querySelector('.last'));
    const current = ReactDOM.findDOMNode(element.current.querySelector('.current'));

    if (props.last > props.current) {
      animateText(current, {translateY: [-85, 0], delay: 100, duration: 400});
      animateText(last, {translateY: [0, 85], delay: 150, duration: 300});
    } else {
      animateText(current, {translateY: [85, 0], delay: 100, duration: 400});
      animateText(last, {translateY: [0, -85], delay: 150, duration: 300});
    }
  };

  // decimal
  const decimal = numb => {
    if (numb < 10) {
      return `0${numb + 1}`;
    }

    return numb;
  };

  // use effect
  useEffect(() => {
    if (!element.current) {
      element.current = true;
    } else {
      animate();
    }
  });

  // render
  return (
    <div className="number-text" data-type={props.type} ref={element}>
      <p className="last">{decimal(props.last)}</p>
      <p className="current">{decimal(props.current)}</p>
    </div>
  );
};

NumberText.propTypes = {
  last: PropTypes.number,
  current: PropTypes.number,
  type: PropTypes.number.isRequired,
};

export default NumberText;