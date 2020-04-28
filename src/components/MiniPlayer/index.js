import React, { useCallback, useContext, Fragment } from 'react';
import PropTypes from 'prop-types';

//import { useWindowSize } from '@react-hook/window-size';
import { ThemeContext } from '../../providers/ThemeProvider';

import MiniPlayerControls from './MiniPlayerControls';
import MiniPlayerTimer from './MiniPlayerTimer';
import SliderBase from '../Slider/Base';

import './mini-player.scss';

// Mini Player
const MiniPlayer = ({ audio: { element }, onSetAudio, current, onPrevNext, items }) => {
  // player context && theme
  const themeContext = useContext(ThemeContext);

  // set audio play
  const setAudioPlay = useCallback(callback => {
    if (!Array.isArray(items) || !items.length) return false;

    const item = items[current];

    if (item instanceof Object) {
      onSetAudio(item, callback);
    }
  }, [ current, items, onSetAudio ]);

  // redner
  return (
    <Fragment>
      {Array.isArray(items) && items.length > 0 &&
        <div className="mini-player">
          <MiniPlayerControls onPrevNext={onPrevNext} />

          <MiniPlayerTimer
            color={themeContext.theme ? themeContext.theme['--text-color'] : '#222'}
            height={60}
            item={items[current]}
            paused={element.current ? element.current.paused : false}
            width={310}
            onSetAudio={setAudioPlay} />
        </div>}
    </Fragment>
  );
};

MiniPlayer.propTypes = {
  any: PropTypes.any,
}

export default SliderBase(MiniPlayer);
