import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { MouseProvider } from '../../providers/MouseProvider';

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

  // return
  return (
    <div className="page home">
      <MouseProvider>
        <Webdoor
          current={current}
          items={webdoor}
          onNextPrev={onNextPrev}
          setCurrent={setCurrent} />
      </MouseProvider>
    </div>
  );
}

Home.propTypes = {
  any: PropTypes.any,
}

export default Home;