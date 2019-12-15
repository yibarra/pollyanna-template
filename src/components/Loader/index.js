import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import './loader.scss';

// loader
const Loader = props => {
  // complete
  const [ complete, setComplete ] = useState(false);

  // use effect
  useEffect(() => {
    window.addEventListener('load', () => setComplete(true), false);

    return () => {
      window.removeEventListener('load', () => {});
    };
  }, []);

  // render
  return (
    <div className="loader" data-complete={complete}>{props.children}</div>
  );
};

Loader.propTypes = {
  any: PropTypes.any,
};

export default Loader;