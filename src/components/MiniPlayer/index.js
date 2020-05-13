import React, { useContext, memo } from 'react';
import PropTypes from 'prop-types';

//import { useWindowSize } from '@react-hook/window-size';
//import { ThemeContext } from '../../providers/ThemeProvider';

import { AudiosContext } from '../../providers/AudiosProvider';

import MiniPlayerContent from './MiniPlayerContent';

import './mini-player.scss';

// Mini Player
const MiniPlayer = () => {
  // context
  const audiosContext = useContext(AudiosContext);
  const { items } = audiosContext;

  // render
  return (
    <div className="mini-player">
      <MiniPlayerContent items={items} />
    </div>
  );

  /*
  const onEndedAudio = useCallback(audio => {
    const { element } = audio;

    if (element.current instanceof Object) {
      console.log('ended audio');
      element.current.addEventListener('ended', () => onPrevNext('next'));
    }
  }, [ onPrevNext ]);

  // use effect
  useEffect(() => {
    onEndedAudio(audio);
  }, [ audio, onEndedAudio ]);
  */
};

MiniPlayer.propTypes = {
  any: PropTypes.any,
}

export default memo(MiniPlayer);
