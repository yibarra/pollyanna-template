import React, { useEffect, useState, useRef, useCallback } from 'react';
import PropTypes from 'prop-types';

import './mini-player-timer.scss';

// Mini player timer
const MiniPlayerTimer = props => {
  // state
  const [ time, setTime ] = useState(0);
  // total
  const [ total, setTotal ] = useState(0);

  // canvas
  const canvas = useRef();
  // ctx
  const ctx = useRef();
  // play
  const { item, width, height, color, onSetAudio } = props;

  // decimal
  const decimal = numb => numb < 10 ? `0${numb}` : numb;

  // seconds to minutes
  const minutesAndSeconds = secs => {
    const minutes = Math.floor(secs / 60);
    const seconds = ((secs % 60)).toFixed(0);

    return `${decimal(minutes)}:${decimal(seconds)}`;
  };

  // code
  const code = useCallback((buff, currentTime, duration) => {
    // define canvas
    const draw = () => {
      const current = (currentTime * 100) / duration;
      const total = (current / 100) * width;

      ctx.current.beginPath();
      ctx.current.clearRect(0, 0, width, height);

      ctx.current.strokeStyle = color;
      ctx.current.moveTo(0, height / 2);
      ctx.current.lineTo(total, height / 2);
      ctx.current.stroke();
    }

    draw();
  }, [ width, height, color ]);

  // on animation
  const onAnimation = useCallback((bufferArray, audio) => {
    if (bufferArray && bufferArray.length) {
      if (audio instanceof Object) {
        setTotal(audio.duration);
        setTime(audio.currentTime);

        code(bufferArray, audio.currentTime, audio.duration);
      }
    }
  }, [ code, setTotal, setTime ]);

  // use effect
  useEffect(() => {
    ctx.current = canvas.current.getContext("2d");
    ctx.current.fillStyle = 'transparent';

    code([]);
    onSetAudio(item, onAnimation);
  }, [ onAnimation, onSetAudio, item, code ]);

  return (
    <div className="mini-player-timer">
      <div className="progress">
        <canvas height={props.height} width={props.width} ref={canvas} />
      </div>
      <div className="mini-player-timer--time">
        <span className="current">{minutesAndSeconds(time)}</span>
        <span className="total">{minutesAndSeconds(total)}</span>
      </div>
    </div>
  );
};

MiniPlayerTimer.propTypes = {
  item: PropTypes.any,
  onSetAudio: PropTypes.func.isRequired,
};

export default MiniPlayerTimer;
