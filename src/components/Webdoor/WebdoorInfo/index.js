import React, { Fragment, memo } from 'react';
import PropTypes from 'prop-types';

import { useTranslation } from 'react-i18next';

import NumberText from '../../NumberText';
import Parallax from '../../Parallax';
import SliderControls from '../../Slider/SliderControls';

import './webdoor-info.scss';
import BaseGallery from '../../Slider/BaseGallery';

// webdoor info
const WebdoorInfo = ({ current, last, length, setCurrent }) => {
  // translate
  const { t } = useTranslation();

  // render
  return (
    <div className="webdoor-info">
      <NumberText last={last} current={current} type={1} />

      <SliderControls current={current} length={length} setCurrent={setCurrent} type={1} />
      
      <div className="webdoor-info--gallery">
        <BaseGallery current={current} setCurrent={setCurrent} length={length}>
          <Fragment key={1}>
            <Parallax xDiff={10} yDiff={10}>
            <img className="image" src={`${process.env.PUBLIC_URL}/images/pollyanna-bio-gallery-4.jpg`} alt='creativos' />
            </Parallax>
          </Fragment>
          <Fragment key={2}>
            <Parallax xDiff={20} yDiff={20}>
            <img className="image" src={`${process.env.PUBLIC_URL}/images/pollyanna-bio-gallery-10.jpg`} alt='creativos' />
            </Parallax>
          </Fragment>
        </BaseGallery>
      </div>

      <div className="icon-tooltip-block">
        <span className="text">{t('scroll down')}</span>
      </div>
    </div>
  );
};

WebdoorInfo.propTypes = {
  current: PropTypes.number.isRequired,
  last: PropTypes.number,
  length: PropTypes.number,
  setCurrent: PropTypes.func.isRequired
}

export default memo(WebdoorInfo);