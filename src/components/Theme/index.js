import React, { useContext, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import ColorProvider from '../../providers/ColorProvider';
import { ThemeContext } from '../../providers/ThemeProvider';

import './theme.scss';

// Theme
const Theme = props => {
  // element
  const element = useRef();
  // theme context
  const themeContext = useContext(ThemeContext);

  // update CSS Variables
  const updateCSSVariables = propsCSS => {
    if (propsCSS instanceof Object) {
      Object.entries(propsCSS).forEach(([prop, value]) => {
        element.current.style.setProperty(prop, value);
      });
    }
  };

  // use effect
  useEffect(() => {
    updateCSSVariables(themeContext.theme);
  });

  // render
  return (
    <div className="theme" ref={element}>
      <ColorProvider>
        {props.children}
      </ColorProvider>
    </div>
  );
};

Theme.propTypes = {
  any: PropTypes.any,
};

export default Theme;