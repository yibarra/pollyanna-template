import React, { useCallback, useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { PlayerContext } from '../../../providers/PlayerProvider';

import MiniPlayer from '../../../components/MiniPlayer';

// Home player
const HomePlayer = props => {
  // player context
  const playerContext = useContext(PlayerContext);

  // item
  const [ item, setItem ] = useState({});
  // current
  const [ current, setCurrent ] = useState(0);

  // page
  const { page, page: { audios } } = props;

  // on next prev
  const onNextPrev = (e = 'prev') => {
    let index = 0;
    const total = page.audios.length - 1;

    if (e === 'prev') {
      index = (current - 1) < 0 ? total : current - 1;
    } else if (e === 'next') {
      index = (current + 1) > total ? 0 : (current + 1);
    }

    onSetItem(index);
  };

  // set audio
  const setAudio = useCallback(audio => {
    if (audio instanceof Object) {
      setItem(audio);
    }
  }, [ setItem ]);

  // on set item
  const onSetItem = useCallback(index => {
    if (Number.isInteger(index) === true) {
      const item = audios[index];

      if (item instanceof Object) {
        setAudio(item);
      }

      setCurrent(index);
    }
  }, [ audios, setAudio ]);

  // use effect
  useEffect(() => {
    if (page instanceof Object && Array.isArray(audios)) {
      onSetItem(0);
    }
  }, [ audios, page, onSetItem ]);

  // return
  return (
    <div className="home--audio">
      <MiniPlayer
        audio={playerContext.audio}
        item={item}
        onNextPrev={onNextPrev} 
        onPlay={playerContext.onPlayAudio}
        onSetAudio={playerContext.onSetAudio} />
    </div>
  );
}

HomePlayer.propTypes = {
  any: PropTypes.any,
}

export default HomePlayer;