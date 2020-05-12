import React, { useContext, memo } from 'react';
import PropTypes from 'prop-types';

//import { useWindowSize } from '@react-hook/window-size';
//import { ThemeContext } from '../../providers/ThemeProvider';

//import MiniPlayerControls from './MiniPlayerControls';
//import MiniPlayerTimer from './MiniPlayerTimer';
import { AudiosContext } from '../../providers/AudiosProvider';

import MiniPlayerContent from './MiniPlayerContent';
import { PlayerContext } from '../../providers/PlayerProvider';

import './mini-player.scss';

// Mini Player
const MiniPlayer = props => {
  // audios context
  const audiosContext = useContext(AudiosContext);
  const { items } = audiosContext;

  const playerContext = useContext(PlayerContext);
  const { audio, onSetAudio, onPlayAudio } = playerContext;

  // render
  return (
    <div className="mini-player">
      <MiniPlayerContent audio={audio} items={items} onPlayAudio={onPlayAudio} onSetAudio={onSetAudio} />
    </div>
  );

  /*
  //props
  const { audio } = props;
  const { audio: { element }, onSetAudio, current, onPrevNext, items } = props;

  // player context && theme
  const themeContext = useContext(ThemeContext);

  // set audio play
  const setAudioPlay = useCallback((callback, item) => {
    if (item instanceof Object === false) return false;

    console.log(item, 'item');

    if (item instanceof Object) {
      onSetAudio(item, callback);
    }
  }, [ onSetAudio ]);

  // finish change next
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

  // render
  return (
    <Fragment>
      {Array.isArray(items) && items.length > 0 &&
        <div className="mini-player">
          {element.current && 
            <MiniPlayerControls onPrevNext={onPrevNext} />}

          <MiniPlayerTimer
            color={themeContext.theme ? themeContext.theme['--text-color'] : '#222'}
            height={60}
            item={items[current]}
            width={310}
            onSetAudio={setAudioPlay} />
        </div>}
    </Fragment>
  );
  */
};

MiniPlayer.propTypes = {
  any: PropTypes.any,
}

export default memo(MiniPlayer);
