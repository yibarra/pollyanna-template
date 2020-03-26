import React from 'react';
import PropTypes from 'prop-types';

import { useTranslation } from 'react-i18next';

import './slider-background.scss';

// Slider background
const SliderBackground = ({ item }) => {
  // translate
  const { t } = useTranslation();
  
  // render
  return (
    <div className="slider--background">
      <div className="slider--background--image">
        {item.backgroundItems && item.backgroundItems.map(({ name, url }, index) =>
          <img className="image" src={`${process.env.PUBLIC_URL}${url}`} alt={name} key={index} />)}
      </div>
    
      <div className="slider--background--icon">
        <span className="text">{t('scroll down')}</span>
      </div>
    </div>
  );
};

SliderBackground.propTypes = {
  item: PropTypes.object,
};

export default SliderBackground;