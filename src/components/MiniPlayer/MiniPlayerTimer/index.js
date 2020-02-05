import React, { useEffect, useRef, useCallback } from 'react';
import PropTypes from 'prop-types';

import './mini-player-timer.scss';

// Mini player timer
const MiniPlayerTimer = props => {
  // canvas
  const canvas = useRef();
  // ctx
  const ctx = useRef();
  // play
  const { color, height, item, onSetAudio, width } = props;

  // decimal
  const decimal = numb => numb < 10 ? `0${numb}` : numb;

  // code
  const code = useCallback((buff, currentTime, duration) => {
    // seconds to minutes
    const minutesAndSeconds = secs => {
      const minutes = Math.floor(secs / 60);
      const seconds = ((secs % 60)).toFixed(0);

      return `${decimal(minutes)}:${decimal(seconds)}`;
    };

    // marquee
    const marquee = text => {
      ctx.current.font = '14px Inria Serif';
      
      const txt = text;
      ctx.current.fillText(txt, 0, 20);
    };

    const loading = () => {
      ctx.current.font = '14px Inria Serif';
      
      const txt = 'loading...';
      ctx.current.fillText(txt, 0, 20);
    };

    // time
    const time = (current, duration) => {
      ctx.current.font = '10px Roboto Mono';
      const time = current >= 0 ? minutesAndSeconds(current) : minutesAndSeconds(0);
      ctx.current.fillText(time, 70, height);
      
      ctx.current.font = '800 10px Roboto Mono';
      const total = duration >= 0 ? minutesAndSeconds(duration) : minutesAndSeconds(0);

      ctx.current.fillText(total, width - (ctx.current.measureText(total).width + 20), height);
    };

    // define canvas
    const draw = () => {
      const current = (currentTime * 100) / duration;
      const total = (current / 100) * (width - 20);

      if (current >= 0) {
        ctx.current.beginPath();
        ctx.current.clearRect(0, 0, width, height);
        
        ctx.current.fillStyle = color;
        ctx.current.fillRect(0, Math.floor(height / 2) + 2, width, 1);
        ctx.current.fillRect(0, Math.floor(height / 2), total, 5);

        marquee(item.name);
        time(currentTime, duration);
      } else {
        loading();
      }
    };

    draw();
  }, [  color, height, item, width ]);

  // on animation
  const onAnimation = useCallback((bufferArray, audio) => {
    if (bufferArray && bufferArray.length) {
      if (audio instanceof Object) {
        code(bufferArray, audio.currentTime, audio.duration);
      }
    }
  }, [ code ]);

  // use effect
  useEffect(() => {
    ctx.current = canvas.current.getContext("2d");
    ctx.current.fillStyle = 'transparent';

    code([]);
    onSetAudio(item, onAnimation);
  }, [ onAnimation, onSetAudio, item, code ]);

  // render
  return (
    <div className="mini-player-timer">
      <div className="progress">
        <canvas height={props.height} width={props.width} ref={canvas} />
      </div>
    </div>
  );
};

MiniPlayerTimer.propTypes = {
  height: PropTypes.number,
  item: PropTypes.any,
  onSetAudio: PropTypes.func.isRequired,
  width: PropTypes.number,
};

export default MiniPlayerTimer;
