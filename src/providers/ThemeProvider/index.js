import React, { createContext, useCallback, useEffect, useState, useContext } from 'react';
import PropTypes from 'prop-types';

import { PageContext } from '../PageProvider';

// Theme Context
const ThemeContext = createContext({
  location: '',
  theme: null,
});

// Theme Provider
const ThemeProvider = props => {
  // theme
  const [ theme, setTheme ] = useState(null);

  // page context
  const pageContext = useContext(PageContext);
  // current page
  const page = pageContext.page;

  /*
  home: {
      '--background-color': '#4DA28D',
      '--text-color': '#4DA28D',
      '--background-text-one': '5%',
      '--background-text-two': '25%',
      '--background-text-three': '5%',
      '--background-text-four': '50%',
    },
    bio: {
      '--background-color': '#FAD133',
      '--text-color': '#FAD133',
      '--background-text-one': '20%',
      '--background-text-two': '7%',
      '--background-text-three': '45%',
      '--background-text-four': '5%',
    },
    events: {
      '--background-color': '#91E1CB',
      '--text-color': '#91E1CB',
      '--background-text-one': '10%',
      '--background-text-two': '5%',
      '--background-text-three': '55%',
      '--background-text-four': '45%',
    },
  */

  // set theme
  const setThemeColorSelect = useCallback(() => {
    if (page instanceof Object) {
      setTheme(page.theme);
    }

  }, [ page, setTheme ]);

  // set Theme Color
  const setThemeColor = color => {
    if (!!color) {
      const newTheme = theme;

      if (theme instanceof Object) {
        newTheme['--background-color'] = color;
        newTheme['--text-color'] = color;
        
        setTheme(newTheme);

        document.documentElement.style.setProperty('--background-color', color);
        document.documentElement.style.setProperty('--text-color', color);
      }
    }
  };

  // Handle Location Change
  const handleLocationChange = useCallback(page => {
    if (page instanceof Object) {
      return setThemeColorSelect(page);
    };
  }, [ setThemeColorSelect ]);

  // use effect
  useEffect(() => {
    handleLocationChange(page);
  }, [ handleLocationChange, page ]);

  // render
  return (
    <ThemeContext.Provider value={
      { theme: theme, setThemeColor: setThemeColor, }
    }>{props.children}</ThemeContext.Provider>
  );
}

ThemeProvider.propTypes = {
  any: PropTypes.any,
}

export { ThemeContext, ThemeProvider };
export default ThemeProvider;