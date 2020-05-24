import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import clamp from 'lodash-es/clamp';
import { useSprings, animated as a } from 'react-spring';
import { useDrag } from 'react-use-gesture';

import './base-gallery.scss';

// carrousel tiem line content
const BaseGallery = ({ children, length, current, setCurrent }) => {
  // element
  const element = useRef(null);

  // props set
  const [ props, set ] = useSprings(length, i => ({
    x: i * window.innerWidth,
    display: 'block',
  }));

  // drag
  const drag = useDrag(({ down, movement: [mx], direction: [xDir], distance, cancel }) => {
    const { width } = element.current || element.current instanceof Object ? element.current.getBoundingClientRect() : 100;

    if (down && distance > width / 2) {
      cancel((setCurrent(clamp(current + (xDir > 0 ? -1 : 1), 0, length - 1))));
    }
    
    set(i => { 

      if (i < current - 1 || i > current + 1) return { display: 'none' };

      const x = (i - current) * width + (down ? mx : 0);
      return { x, display: 'block' };
    });
  });

  // use effect
  useEffect(() => {
    if (element.current instanceof Object && element.current.getBoundingClientRect().width > 0) {
      const init = () => {
        set(i => {
          const { width } = element.current || element.current instanceof Object ? element.current.getBoundingClientRect() : 100;

          if (i < current - 1 || i > current + 1) return { display: 'none' };
    
          const x = (i - current) * width;
          return { x, display: 'block' };
        });
      };

      init();
    }
  }, [ current, set ]);

  // render
  return (
    <div className="base-gallery" ref={element}>
      <div className="base-gallery--list">
        {props.map(({ x, display }, i) => 
          <a.div
            {...drag()}
            key={i}
            className="base-gallery--item"
            style={{ display, transform: x.interpolate(x => `translate3d(${x}px,0,0)`) }}>
              {children[i]}
          </a.div>
        )}
      </div>
    </div>
  );
};

BaseGallery.propTypes = {
  current: PropTypes.number.isRequired,
  setCurrent: PropTypes.func.isRequired,
  length: PropTypes.number,
}

export default BaseGallery;