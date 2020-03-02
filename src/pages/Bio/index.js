import React, { useState } from 'react';
import PropTypes from 'prop-types';

import ReactScrollWheelHandler from "react-scroll-wheel-handler";
import { useSwipeable } from 'react-swipeable';
import { useTranslation } from 'react-i18next';

import GalleryMin from '../../components/GalleryMin';
import TextScroll from '../../components/TextScroll';

import './bio.scss';

const Bio = ({ mobile, page: { gallery } }) => {
  // translate
  const { t } = useTranslation();

  // current
  const [ current, setCurrent ] = useState(0);
  // last
  const [ last, setLast ] = useState(0);

  // on set item
  const onSetItem = (index) => {
    if (Number.isInteger(index) === true) {
      setLast(current);
      setCurrent(index);
    }
  };

  // on next prev
  const onNextPrev = (e = 'prev') => {
    let index = 0;
    const total = gallery.length - 1;

    if (e === 'prev') {
      index = (current - 1) < 0 ? total : current - 1;
    } else if (e === 'next') {
      index = (current + 1) > total ? 0 : (current + 1);
    }

    onSetItem(index);
  };

  // handlder mobile
  const handlerMobile = value => {
    if (mobile.isMobile() !== true) {
      onNextPrev(value);
    }
  };

  // handlers
  const handlers = useSwipeable({
    onSwipedLeft: () => handlerMobile('next'),
    onSwipedRight: () => handlerMobile('prev'),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  // return
  return (
    <div className="page bio" {...handlers}>
      <ReactScrollWheelHandler
        upHandler={() => handlerMobile('prev')}
        downHandler={() => handlerMobile('next')}>
          <div className="wrapper">
            <GalleryMin
              current={current}
              last={last}
              onNextPrev={onNextPrev}
              setCurrent={setCurrent}
              items={gallery}
              type={2} />

            <div className="bio--scroll">
              <span className="scroll-icon">
                <span className="scroll-icon__wheel-outer">
                  <span className="scroll-icon__wheel-inner"></span>
                </span>
              </span>
            </div>

            <TextScroll height={300} type={2}><p>{t('bioRelease')}</p></TextScroll>
          </div>
      </ReactScrollWheelHandler>
    </div>
  )
};

Bio.propTypes = {
  any: PropTypes.any,
}

export default Bio;