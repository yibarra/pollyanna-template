import React from 'react';
import PropTypes from 'prop-types';

import Repultion from '../../Mouse/Repultion';

import './slider-background.scss';

// Slider background
const SliderBackground = ({ item }) => {
  // render
  return (
    <div className="slider--background">
      <Repultion items={[{
        max: 5,
        perspective: 3000,
        scale: 1,
      }, {
        max: 7,
        perspective: 3000,
        scale: 1,
      }, {
        max: 10,
        perspective: 3000,
        scale: 1,
      }, {
        max: 13,
        perspective: 3000,
        scale: 1,
      }]}>
        {item.backgroundItems && item.backgroundItems.map(({ name, url }, index) =>
          <img className="image" src={`${process.env.PUBLIC_URL}${url}`} alt={name} key={index} />)}
      </Repultion>
    
      <div className="slider--background--icon">
        <span className="scroll-icon">
          <span className="scroll-icon__wheel-outer">
            <span className="scroll-icon__wheel-inner"></span>
          </span>
        </span>
      </div>
    </div>
  );
};

SliderBackground.propTypes = {
  items: PropTypes.array,
};

export default SliderBackground;