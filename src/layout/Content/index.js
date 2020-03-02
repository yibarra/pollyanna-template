import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import { HashRouter, Route, Switch } from 'react-router-dom';
import useMobileDetect from 'use-mobile-detect-hook';

import { PageContext } from '../../providers/PageProvider';
import PlayerProvider from '../../providers/PlayerProvider';

import Header from '../Header';
import Footer from '../Footer';

import Bio from '../../pages/Bio';
import Contact from '../../pages/Contact';
import Events from '../../pages/Events';
import Home from '../../pages/Home';
import MiniPlayer from '../../components/MiniPlayer';

import './content.scss';

// Content
const Content = props => {
  // detect mobile
  const detectMobile = useMobileDetect();

  // page context
  const pageContext = useContext(PageContext);
  // page
  const { page } = pageContext;

  // render
  return (
    <HashRouter basename='/'>
      <div className="content">
        <Header location={props.location} />

        <Switch>
          <Route path="/" exact render={() => <Home {...props} page={page} mobile={detectMobile} />} />
          <Route path="/bio" render={() => <Bio {...props} page={page} mobile={detectMobile} />} />
          <Route path="/events" render={() => <Events {...props} page={page} mobile={detectMobile} />} />
          <Route path="/contact" render={() => <Contact {...props} page={page} mobile={detectMobile} />} />
        </Switch>

        <Footer />
      </div>

      <PlayerProvider>
        <MiniPlayer />
      </PlayerProvider>
    </HashRouter>
  );
};

Content.propTypes = {
  location: PropTypes.object,
};

export default Content;
