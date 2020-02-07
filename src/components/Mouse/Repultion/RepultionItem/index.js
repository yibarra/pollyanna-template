import React, { useCallback, useRef, useState } from 'react';
import PropTypes from 'prop-types';

import { useMouseMove } from 'react-use-mouse-move';
import useDeepCompareEffect from 'use-deep-compare-effect';

import './repultion-item.scss';

// repultion
const RepultionItem = props => {
  // mouse
  const mouse = useMouseMove(1);

  // element
  const element = useRef(false);
  // settings
  const settings = { ...props.defaultSettings, ...props.options };

  // style
  const [ style, setStyle ] = useState({});
  // reverse
  const reverse = settings.reverse ? -1 : 1;

  // get values
  const getValues = useCallback((width, height, left, top) => {
    if (mouse instanceof Object === false) return false;

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
  }, [ settings, mouse, reverse ]);

  // update
  const update = useCallback((width, height, left, top) => {
    const values = getValues(width, height, left, top);

    setStyle({
      ...style,
      transform: `perspective(${settings.perspective}px) rotateX(${settings.axis === 'x' ? 0 : values.tiltY}deg) rotateY(${settings.axis === 'y' ? 0 : values.tiltX}deg) scale3d(${settings.scale}, ${settings.scale}, ${settings.scale})`,
    });
  }, [style, setStyle, settings, getValues]);

  // update element
  const updateElementPosition = useCallback(() => {
    if (element.current instanceof Object === false) return false;

    const rect = element.current.getBoundingClientRect();

    const width = element.current.offsetWidth;
    const height = element.current.offsetHeight;
    const left = rect.left;
    const top = rect.top;

    update(width, height, left, top);
  }, [update, element]);

  // use previous
  useDeepCompareEffect(() => {
    updateElementPosition();
  }, [ mouse ]);

  return (
    <div
      className="repultion--item"
      ref={element}
      style={style}>
      {props.children}
    </div>
  )
};

RepultionItem.propTypes = {
  any: PropTypes.any,
};

export default RepultionItem;