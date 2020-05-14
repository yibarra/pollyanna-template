import React, { useContext, memo } from 'react';
import PropTypes from 'prop-types';

import { ThemeContext } from '../../providers/ThemeProvider';

import MiniPlayerContent from './MiniPlayerContent';

import './mini-player.scss';

// Mini Player
const MiniPlayer = ({ items }) => {
  // context
  const themeContext = useContext(ThemeContext);
  const { theme } = themeContext;

  // render
  return (
    <div className="mini-player">
      <MiniPlayerContent
        color={theme instanceof Object ? theme['--text-color'] : '#222'}
        items={items} />
    </div>
  );
};

MiniPlayer.propTypes = {
  items: PropTypes.array.isRequired,
}

export default memo(MiniPlayer);
