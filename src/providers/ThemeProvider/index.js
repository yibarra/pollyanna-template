import React, { createContext, memo, useCallback, useEffect, useState, useContext } from 'react';
import PropTypes from 'prop-types';

import { PageContext } from '../PageProvider';

// Theme Context
const ThemeContext = createContext({
  location: '',
  theme: null,
});

// Theme Provider
const ThemeProvider = ({ children }) => {
  // theme
  const [ theme, setTheme ] = useState(null);

  // page context
  const pageContext = useContext(PageContext);
  const { page } = pageContext;

  // set theme
  const setThemeColorSelect = useCallback(() => {
    if (page instanceof Object) {
      setTheme(page.theme);
    }
  }, [ page, setTheme ]);

  // set Theme Color
  const setThemeColor = useCallback(color => {
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
  }, [ theme, setTheme ]);

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
    }>{children}</ThemeContext.Provider>
  );
}

ThemeProvider.propTypes = {
  any: PropTypes.any,
}

export { ThemeContext, ThemeProvider };
export default memo(ThemeProvider);