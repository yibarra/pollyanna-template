import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import { PlayerProvider } from '../../providers/PlayerProvider';
import { PageContext } from '../../providers/PageProvider';

import HomePlayer from './HomePlayer';

import './home.scss';

/**
 * Home
 */
const Home = props => {
  // page context
  const pageContext = useContext(PageContext);
  // page
  const page = pageContext.page;

  // return
  return (
    <div className="page home">
      <PlayerProvider>
        <HomePlayer page={page} />
      </PlayerProvider>
    </div>
  );
}

Home.propTypes = {
  any: PropTypes.any,
}

export default Home;