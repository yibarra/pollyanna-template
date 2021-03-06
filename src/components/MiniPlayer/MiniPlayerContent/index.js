import React, { useCallback, useContext, Fragment, memo, useEffect } from 'react';
import PropTypes from 'prop-types';

import { PlayerContext } from '../../../providers/PlayerProvider';

import MiniPlayerControls from '../MiniPlayerControls';
import MiniPlayerTimer from '../MiniPlayerTimer';
import SliderBase from '../../Slider/Base';

// Mini Player
const MiniPlayerContent = ({ color, current, onPrevNext, items }) => {
  // context
  const playerContext = useContext(PlayerContext);
  const { audio: { paused }, onSetAudio, onPlayAudio, setCallbackAnimation } = playerContext;

  // change item
  const changeItem = useCallback((current) => {
    if (Array.isArray(items) && items.length > 0) {
      const item = items[current];

      if (item instanceof Object) {
        console.info(item, 'ades');
        onSetAudio(item, onPrevNext);
      }
    }

    return false;
  }, [ items, onPrevNext, onSetAudio ]);

  // use effect
  useEffect(() => {
    changeItem(current);
  }, [ current, changeItem ]);

  // render
  return (
    <Fragment>
      {Array.isArray(items) &&
        <Fragment>
          <MiniPlayerControls paused={paused} onPlayAudio={onPlayAudio} onPrevNext={onPrevNext} />

          <MiniPlayerTimer
            color={color}
            height={60}
            item={items[current]}
            width={320}
            setAnimation={setCallbackAnimation} />
        </Fragment>}
    </Fragment>
  );
};

MiniPlayerContent.propTypes = {
  any: PropTypes.any,
}

export default memo(SliderBase(MiniPlayerContent));
