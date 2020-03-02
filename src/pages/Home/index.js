import React, { useState } from 'react';
import PropTypes from 'prop-types';

import ReactScrollWheelHandler from "react-scroll-wheel-handler";
import { useSwipeable } from 'react-swipeable';

import Webdoor from '../../components/Webdoor';

import './home.scss';

// Home
const Home = ({ mobile, page: { webdoor }}) => {
  // current
  const [ current, setCurrent ] = useState(0);

  // on set item
  const onSetItem = (index) => {
    if (Number.isInteger(index) === true) {
      setCurrent(index);
    }
  };

  // on next prev
  const onNextPrev = (e = 'prev') => {
    let index = 0;
    const total = webdoor.length - 1;

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
    onSwipedLeft: () => onNextPrev('next'),
    onSwipedRight: () => onNextPrev('prev'),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  // return
  return (
    <div className="page home" {...handlers}>
      <ReactScrollWheelHandler
        upHandler={() => handlerMobile('prev')}
        downHandler={() => handlerMobile('next')}>
        <Webdoor
          current={current}
          items={webdoor}
          onNextPrev={onNextPrev}
          setCurrent={setCurrent} />
      </ReactScrollWheelHandler>
    </div>
  );
}

Home.propTypes = {
  any: PropTypes.any,
}

export default Home;