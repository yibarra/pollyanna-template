import React from 'react';
import PropTypes from 'prop-types';

import Repultion from '../../Mouse/Repultion';

import './slider-background.scss';

// Slider background
const SliderBackground = () => {
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
        max: 15,
        perspective: 3000,
        scale: 1,
      }]}>
        <img className="image" src={`${process.env.PUBLIC_URL}/images/path-2-1.png`} alt={'Pollyanna Ferrari'} />
        <img className="image" src={`${process.env.PUBLIC_URL}/images/path-2-2.png`} alt={'Pollyanna Ferrari'} />
        <img className="image" src={`${process.env.PUBLIC_URL}/images/path-2-3.png`} alt={'Pollyanna Ferrari'} />
        <img className="image" src={`${process.env.PUBLIC_URL}/images/path-2-4.png`} alt={'Pollyanna Ferrari'} />
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
  any: PropTypes.any,
};

export default SliderBackground;