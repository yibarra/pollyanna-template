import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import { ColorContext } from '../../providers/ColorProvider';
import { ThemeContext } from '../../providers/ThemeProvider';

// Content
const Content = props => {
  const themeContext = useContext(ThemeContext);

  const colorContext = useContext(ColorContext);

  const switchColor = () => {
    themeContext.setThemeColor(colorContext.setNewColor());
  };

  // render
  return (
    <div>
      <p style={{color: themeContext.theme ? themeContext.theme['--text-color'] : 'red'}}>content</p>
      <button onClick={() => switchColor()}>mudar de cor</button>
    </div>
  );
};

Content.propTypes = {
  any: PropTypes.any,
};

export default Content;
