import React, { useRef, useState, useCallback } from 'react';
import PropTypes from 'prop-types';

import { useMouseMove } from 'react-use-mouse-move';

import './repultion.scss';

const defaultSettings = {
  reverse: false,
  max: 35,
  perspective: 1000,
  easing: 'cubic-bezier(.03,.98,.52,.99)',
  scale: '1.1',
  speed: '1000',
  transition: true,
  axis: null,
  reset: true
};

// repulsion
const Repultion = props => {
  // settings
  const settings = { ...defaultSettings, ...props.options };
  // mouse
  const mouse = useMouseMove(1);

  // width
  const [ width, setWidth ] = useState(null);
  // height
  const [ height, setHeight ] = useState(null);
  // let
  const [ left, setLeft ] = useState(null);
  // top
  const [ top, setTop ] = useState(null);
  // reverse
  const reverse = settings.reverse ? -1 : 1;

  // style
  const [ style, setStyle ] = useState({});

  // element
  const element = useRef(false);

  const getValues = useCallback(() => {
    const x = (mouse.x - left) / width;
    const y = (mouse.y - top) / height;

    const _x = Math.min(Math.max(x, 0), 1);
    const _y = Math.min(Math.max(y, 0), 1);

    const tiltX = (reverse * (settings.max / 2 - _x * settings.max)).toFixed(2);
    const tiltY = (reverse * (_y * settings.max -   settings.max / 2)).toFixed(2);

    const percentageX = _x * 100;
    const percentageY = _y * 100;

    return {
      tiltX,
      tiltY,
      percentageX,
      percentageY,
    }
  }, [ settings, left, top, mouse, reverse, height, width ]);

  const setTransition = () => {
    setStyle({
      ...style,
      transition: `${settings.speed}ms ${settings.easing}`,
    });
  };

  const handleMouseLeave = () => {
    setTransition();

    if (settings.reset) {
      reset();
    }
  };

  const update = useCallback(e => {
    const values = getValues(e);

    setStyle({
      ...style,
      transform: `perspective(${settings.perspective}px) rotateX(${settings.axis === 'x' ? 0 : values.tiltY}deg) rotateY(${settings.axis === 'y' ? 0 : values.tiltX}deg) scale3d(${settings.scale}, ${settings.scale}, ${settings.scale})`,
    });
  }, [style, setStyle, settings, getValues]);

  const updateElementPosition = () => {
    if (element.current instanceof Object === false) return false;

    const rect = element.current.getBoundingClientRect();

    setWidth(element.current.offsetWidth);
    setHeight(element.current.offsetHeight);
    setLeft(rect.left);
    setTop(rect.top);
  };

  const reset = () => {
    setStyle({
      ...style,
      transform: `perspective(${settings.perspective}px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`,
    });
  };

  const handleMouseEnter = e => {
    updateElementPosition();
    setTransition();
  };

  // render
  return (
    <div
      className="repultion"
      ref={element}
      style={style}
      onMouseEnter={e => handleMouseEnter(e)}
      onMouseMove={e => update()}
      onMouseLeave={e => handleMouseLeave(e)}>
      {props.children}
    </div>
  )
};

Repultion.propTypes = {
  options: PropTypes.object.isRequired,
}

export default Repultion;