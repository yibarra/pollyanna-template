import React, { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

// main context
const MouseContext = createContext({
  mouse: {},
});

// Main provider
const MouseProvider = props => {
  // mouse
  const [ mouse, setMouse ] = useState({ x: 0, y: 0 });

  // cursor
  const cursor = event => {
    if (!event instanceof Object) return false;
    
    setMouse({
      x: event.clientX,
      y: event.clientY,
    });
  };

  // use effect
  useEffect(() => {
    window.addEventListener('mousemove', e => cursor(e), false);

    return () => {
      window.removeEventListener('mousemove', () => cursor);
    };
  }, []);

  // render
  return (
    <MouseContext.Provider value={{ mouse: mouse, }}>
      {props.children}
    </MouseContext.Provider>
  );
};

MouseProvider.propTypes = {
  any: PropTypes.any,
};

export { MouseProvider, MouseContext };
export default MouseProvider;