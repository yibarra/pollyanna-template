import React, { useCallback, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import anime from 'animejs';

import './number-text.scss';

// number text
const NumberText = ({ last, current, type }) => {
  // element
  const element = useRef(false);

  // animate text
  const animateText = useCallback((element, options) => {
    if (element instanceof Object === false) return false;

    anime({
      targets: element,
      easing: 'easeOutSine',
      ...options
    })
  }, []);

  // animate
  const animate = useCallback(() => {
    const eLast = ReactDOM.findDOMNode(element.current.querySelector('.last'));
    const eCurrent = ReactDOM.findDOMNode(element.current.querySelector('.current'));

    if (last > current) {
      animateText(eCurrent, {translateY: [-85, 0], delay: 100, duration: 400});
      animateText(eLast, {translateY: [0, 85], delay: 150, duration: 300});
    } else {
      animateText(eCurrent, {translateY: [85, 0], delay: 100, duration: 300});
      animateText(eLast, {translateY: [0, -85], delay: 150, duration: 300});
    }
  }, [ animateText, last, current ]);

  // decimal
  const decimal = numb => {
    if (isNaN(numb)) return '00';

    return (numb < 9) ? `0${numb + 1}` : numb + 1;
  };

  // use effect
  useEffect(() => {
    if (!element.current) {
      element.current = true;
    } else {
      animate();
    }
  }, [ current, animate ]);

  // render
  return (
    <div className="number-text" data-type={type} ref={element}>
      <p className="last">{decimal(last)}</p>
      <p className="current">{decimal(current)}</p>
    </div>
  );
};

NumberText.propTypes = {
  current: PropTypes.number,
  last: PropTypes.number,
  type: PropTypes.number.isRequired,
};

export default NumberText;