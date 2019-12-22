import React, { useContext, Fragment } from 'react';
import PropTypes from 'prop-types';

import { Route, Switch } from 'react-router-dom';

import BackgroundProvider from '../../providers/BackgroundProvider';
import { PageContext } from '../../providers/PageProvider';

import BackgroundText from '../../components/BackgroundText';
import Header from '../Header';
import Footer from '../Footer';

import Bio from '../../pages/Bio';
import Events from '../../pages/Events';
import Home from '../../pages/Home';

import './content.scss';
import PlayerProvider from '../../providers/PlayerProvider';
import MiniPlayer from '../../components/MiniPlayer';

// Content
const Content = props => {
  // page context
  const pageContext = useContext(PageContext);
  // page
  const { page, page: { audios } } = pageContext;

  // render
  return (
    <Fragment>
      <div className="content">
        <BackgroundProvider>
          <BackgroundText />
        </BackgroundProvider>

        <Header location={props.location} />

        <Switch>
          <Route path="/" exact render={() => <Home {...props} page={page} />} />
          <Route path="/bio" component={Bio} />
          <Route path="/events" component={Events} />
        </Switch>

        <Footer />
      </div>

      <PlayerProvider>
        <MiniPlayer audios={audios} />
      </PlayerProvider>
    </Fragment>
  );
};

Content.propTypes = {
  location: PropTypes.object,
};

export default Content;
