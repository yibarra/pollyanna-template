import React from 'react';
import PropTypes from 'prop-types';

import Webdoor from '../../components/Webdoor';

import './home.scss';

// Home
const Home = ({ page: { webdoor }, loading }) => {
  // return
  return (
    <div className="page home" data-active={loading}>
      <Webdoor items={webdoor} />
    </div>
  );
}

Home.propTypes = {
  any: PropTypes.any,
}

export default Home;