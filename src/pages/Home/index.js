import React, { useState } from 'react';
import PropTypes from 'prop-types';

import ReactScrollWheelHandler from "react-scroll-wheel-handler";
import { useSwipeable } from 'react-swipeable';

import Webdoor from '../../components/Webdoor';

import './home.scss';

// Home
const Home = props => {
  // current
  const [ current, setCurrent ] = useState(0);

  // props
  const { page: { webdoor } } = props;

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

  // handlers
  const handlers = useSwipeable({
    onSwipedLeft: () => onNextPrev('next'),
    onSwipedRight: () => onNextPrev('prev'),
    onSwipedDown: () => onNextPrev('prev'),
    onSwipedUp: () => onNextPrev('next'),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  // return
  return (
    <div className="page home" {...handlers}>
      <ReactScrollWheelHandler
        upHandler={() => onNextPrev('prev')}
        downHandler={() => onNextPrev('next')}>
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