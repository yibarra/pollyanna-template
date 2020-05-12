import React, { memo, useCallback, useEffect, useRef, useContext } from 'react';
import PropTypes from 'prop-types';

import { MainContext } from '../../providers/MainProvider';

import './loader.scss';

// Loader 
const Loader = () => {
  // main context
  const mainContext = useContext(MainContext);
  const { loading, setLoading } = mainContext;

  // element
  const element = useRef(null);

  // animate value
  const animateValue = useCallback((start, end, duration) => {
    const range = end - start;
    let current = start;
    let increment = end > start ? 1 : -1;
    let stepTime = Math.abs(Math.floor(duration / range));
    
    const timer = setInterval(() => {
      if (element.current instanceof Object) {
        const bar = element.current.querySelector('.loading--bar');
        current += increment;

        if (bar instanceof Object) {
          bar.style.width = `${current}%`;
        }
      
        if (current === end) {
          clearInterval(timer);
          setLoading(true);
        }
      }
    }, stepTime);
  }, [ setLoading ]);

  // use effect
  useEffect(() => {
    if (loading === false) {
      const init = () => {
        const perfData = window.performance.timing;
        const EstimatedTime = -(perfData.loadEventEnd - perfData.navigationStart);
        const time = parseInt((EstimatedTime/700)%50)*100;

        //function
        animateValue(0, 100, time);
      };

      init();
    }
  }, [ loading, animateValue ]);
  
  // render
  return (
    <div className="loading" data-complete={loading} ref={element}>
      <div className="loading--loader">
        <img src={process.env.PUBLIC_URL + '/images/logo.png'} alt="logo" />
      </div>
      
      <div className="loading--bar"></div>
    </div>
  );
};

Loader.propTypes = {
  any: PropTypes.any,
};

export default memo(Loader);