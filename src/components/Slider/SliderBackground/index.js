import React from 'react';
import PropTypes from 'prop-types';

import Repultion from '../../Mouse/Repultion';
import { useTranslation } from 'react-i18next';

import './slider-background.scss';

// Slider background
const SliderBackground = ({ item }) => {
  // translate
  const { t } = useTranslation();

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
        <span className="text">{t('scroll down')}</span>
      </div>
    </div>
  );
};

SliderBackground.propTypes = {
  items: PropTypes.array,
};

export default SliderBackground;