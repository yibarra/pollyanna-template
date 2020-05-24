import React from 'react';
import PropTypes from 'prop-types';

import { useSpring, animated as a } from 'react-spring';
import useMobileDetect from 'use-mobile-detect-hook';

// parallax
const Parallax = ({ children, xDiff, yDiff }) => {
  // use spring
  const [ props, set ] = useSpring(() => ({ xy: [0, 0], config: { mass: 10, tension: 550, friction: 140 } }));
  // mobile
  const detectMobile = useMobileDetect();

  const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2];
  const trans = (x, y) => !detectMobile.isMobile() ? `translate3d(${x / xDiff}px,${y / yDiff}px,0)` : `translate3d(0,0,0)`;

  // render
  return (
    <div className="parallax" onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}>
      <a.div className="parallax--item" style={{ transform: props.xy.interpolate(trans) }}>
        {children}
      </a.div>
    </div>
  )
};

Parallax.propTypes = {
  children: PropTypes.object.isRequired,
  xDiff: PropTypes.number,
  yDiff: PropTypes.number,
}

export default Parallax;