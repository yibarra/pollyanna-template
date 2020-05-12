import React, { useCallback, Fragment, memo, useEffect } from 'react';
import PropTypes from 'prop-types';

import MiniPlayerControls from '../MiniPlayerControls';

import SliderBase from '../../Slider/Base';

// Mini Player
const MiniPlayerContent = ({ audio, current, onSetAudio, onPlayAudio, onPrevNext, items }) => {
  // element
  const { element } = audio;

  console.log(current, element);

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
      {Array.isArray(items) &&
        <Fragment>
          <MiniPlayerControls onPlayAudio={onPlayAudio} onPrevNext={onPrevNext} />
        </Fragment>}
    </Fragment>
  );
};

/*
<MiniPlayerControls onPrevNext={onPrevNext} />

          <MiniPlayerTimer
            color={themeContext.theme ? themeContext.theme['--text-color'] : '#222'}
            height={60}
            item={items[current]}
            width={310}
            onSetAudio={setAudioPlay} />
            */

MiniPlayerContent.propTypes = {
  any: PropTypes.any,
}

export default memo(SliderBase(MiniPlayerContent));
