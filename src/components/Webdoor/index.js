import React, { useCallback } from 'react';
import PropTypes from 'prop-types';

import ReactScrollWheelHandler from "react-scroll-wheel-handler";
import { useSwipeable } from 'react-swipeable';
import useMobileDetect from 'use-mobile-detect-hook';

import SliderBase from '../Slider/Base';
import WebdoorContent from './WebdoorContent';
import WebdoorInfo from './WebdoorInfo';

import './webdoor.scss';

// Webdoor
const Webdoor = ({ items, current, last, setCurrent, onPrevNext }) => {
  // mobile
  const detectMobile = useMobileDetect();

  // handlder mobile
  const handlerMobile = useCallback(value => {
    if (detectMobile.isMobile() === false) {
      onPrevNext(value);
    }
  }, [ onPrevNext, detectMobile ]);

  // handlers
  const handlers = useSwipeable({
    onSwipedLeft: () => setTimeout(() => onPrevNext('next'), 100),
    onSwipedRight: () => setTimeout(() => onPrevNext('prev'), 100),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  // render
  return (
    <section className="webdoor" {...handlers}>
      <ReactScrollWheelHandler
        upHandler={() => handlerMobile('prev')}
        downHandler={() => handlerMobile('next')}>
          <WebdoorInfo current={current} last={last} length={items.length} setCurrent={setCurrent} />
          <WebdoorContent items={items} current={current} setCurrent={setCurrent} />
      </ReactScrollWheelHandler>
    </section>
  );
};

Webdoor.propTypes = {
  current: PropTypes.number,
  last: PropTypes.number,
  items: PropTypes.array,
  setCurrent: PropTypes.func.isRequired,
  onPrevNext: PropTypes.func.isRequired,
}

export default SliderBase(Webdoor);