import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import anime from 'animejs/lib/anime.es.js';

import './loader.scss';

// Loader 
const Loader = ({ loading, setLoading }) => {
  // animate value
  const animateValue = (start, end, duration) => {
    const range = end - start;
    let current = start;
    let increment = end > start ? 1 : -1;
    let stepTime = Math.abs(Math.floor(duration / range));
    
    const timer = setInterval(() => {
      current += increment;
    
      if (current === end) {
        clearInterval(timer);

        anime.timeline({
          easing: 'cubicBezier(.17,.67,.5,.87)',
          duration: 400
        }).add({
          targets: '.loading--loader',
          scale: [1, 0],
          opacity: [1, 0],
          duration: 300,
        }).add({
          targets: '.loading',
          opacity: [1, 0],
          complete: () => setLoading(true),
        });
      }
    }, stepTime);
  };

  // use effect
  useEffect(() => {
    const init = () => {
      const perfData = window.performance.timing;
      const EstimatedTime = -(perfData.loadEventEnd - perfData.navigationStart);
      const time = parseInt((EstimatedTime/700)%50)*100;

      //function
      animateValue(0, 100, time);
    };

    init();
  });
  
  // render
  return (
    <div className="loading" data-complete={loading}>
      <div className="loading--loader">
        <img src={process.env.PUBLIC_URL + '/images/logo.png'} alt="logo" />
      </div>
    </div>
  );
};

Loader.propTypes = {
  loading: PropTypes.bool,
  setLoading: PropTypes.func.isRequired,
};

export default Loader;