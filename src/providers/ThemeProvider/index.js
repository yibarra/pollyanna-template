import React, { createContext, useCallback, useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { MainContext } from '../MainProvider';

// Theme Context
const ThemeContext = createContext({
  location: '',
  theme: null,
  themes: {},
});

// Theme Provider
const ThemeProvider = props => {
  // location
  const location = props.location;
  // theme
  const [ theme, setTheme ] = useState(null);
  // themes
  const [ themes, setThemes ] = useState({});

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

  // main context
  const mainContext = useContext(MainContext);

  // set theme
  const setThemeColorSelect = useCallback(location => {
    let theme = null;

    Object.entries(themes).forEach(([name]) => {
      if (location === '' || location === '/') {
        theme = themes['home'];

      } else {
        if (name === location) {
          theme = themes[name];
        }
      }
    });

    setTheme(theme);
  }, [ setTheme, themes ]);

  // set Theme Color
  const setThemeColor = (name, color) => {
    if (name && color) {
      const theme = themes[name];

      if (theme instanceof Object) {
        theme['--background-color'] = color;
        theme['--text-color'] = color;

        const themesUpdate = themes;
        themesUpdate[name] = theme;
        
        setTheme(themesUpdate);

        document.documentElement.style.setProperty('--background-color', color);
        document.documentElement.style.setProperty('--text-color', color);
      }
    }
  };

  // Handle Location Change
  const handleLocationChange = useCallback(routeLocation => {
    if (routeLocation instanceof Object) {
      const location = routeLocation.pathname.substring(1).split('/')[0];

      setThemeColorSelect(location);
    }
  }, [ setThemeColorSelect ]);

  // use effect
  useEffect(() => {
    handleLocationChange(location);

    if (Array.isArray(mainContext.template)) {
      setThemes(mainContext.template[0].themes);
    }
  }, [handleLocationChange, location, mainContext.template]);

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