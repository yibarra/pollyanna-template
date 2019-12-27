import React, { useCallback, useEffect, useRef, useContext } from 'react';
import PropTypes from 'prop-types';
import { PlayerContext } from '../../providers/PlayerProvider';

// Player Canvas
const PlayerCanvas = props => {
  // player context
  const playerContext = useContext(PlayerContext);
  // props
  const { onSetAudio } = playerContext;

  // canvas
  const canvas = useRef();
  // ctx
  const ctx = useRef();
  // play
  const { item, width, height } = props;
  const color = props['--background-color'];

  // code
  const code = useCallback(bufferAudio => {
    // define canvas
    const draw = () => {
      // get values directly from form
      let Vp = 1;
      let Vmax = 4.5;
      let Tmax = 0.001;
      let N = bufferAudio.length + 1;

      // fill canvas
      ctx.current.fillRect(0, 0, width, height);
      
      // define origin at plot center
      var axes = {};

      axes.x0 = 0.5 + 0.5 * width;  // x0, y0 place plot origin in middle of canvas
      axes.y0 = 0.5 + 0.5 * height;
      
      const x = [];
      const y = [];
      let dt, tstart, tstop; // time variables
      
      // define plot paramaters
      tstart =- Tmax;
      tstop = Tmax;
      dt = (tstop - tstart) / (N-1);	// time increment over N points
      axes.xscale = width / (2 * Tmax);	// x pix per s
      axes.yscale = height /(2 * Vmax); // y pix per V
      axes.N = N;
      
       // create function 
      for (let i = 0; i < bufferAudio.length; i++) {
        x[i] = tstart + i*dt;
        y[i] = Vp * Math.sin(2 * 3.1415 * 1 * x[i] + bufferAudio[i] * 3.1415/i) ;
      }

      ctx.current.beginPath();
      
      // plot function
      GraphArray(axes, x, y, color, 1); 
    }
    
    // graph array
    const GraphArray = (axes, x, y, color, thick) => {
      let i, x0, y0, xscale, yscale, xp, yp;
        
      x0 = axes.x0;
      y0 = axes.y0;
      xscale = axes.xscale;
      yscale = axes.yscale;
      
      ctx.current.beginPath();
      ctx.current.clearRect(0, 0, width, height);
      ctx.current.lineWidth = thick;
      ctx.current.strokeStyle = color;
      
      for (i = 0; i < axes.N; i++) {
        // translate actual x,y to plot xp,yp
        xp = x0 + x[i]*xscale;
        yp = y0 - y[i]*yscale;
        
        // draw ine to next point
        if (i === 0) {
          ctx.current.moveTo(xp, yp);
        } else {
          ctx.current.lineTo(xp, yp);
        }
      }

      ctx.current.lineCap = 'round';
      ctx.current.lineJoin = 'round';
      ctx.current.stroke();
    }

    draw();
  }, [ width, height, color ]);

  // on animation
  const onAnimation = useCallback((bufferArray, audio) => {
    if (bufferArray && bufferArray.length) {      
      code(bufferArray);
    }
  }, [ code ]);

  // use effect
  useEffect(() => {
    ctx.current = canvas.current.getContext("2d");
    ctx.current.fillStyle = 'transparent';

    code([]);
    onSetAudio(item, onAnimation);
  }, [ onAnimation, onSetAudio, item, code ]);

  //render
  return (
    <canvas height={props.height} width={props.width} ref={canvas} />
  );
};

PlayerCanvas.propTypes = {
  id: PropTypes.string,
  color: PropTypes.string,
};

export default PlayerCanvas;