import React, { useContext, Fragment } from 'react';
import PropTypes from 'prop-types';

import { Route, Switch } from 'react-router-dom';

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
  // page context
  const pageContext = useContext(PageContext);
  // page
  const { page } = pageContext;

  // render
  return (
    <Fragment>
      <div className="content">
        <Header location={props.location} />

        <Switch>
          <Route path="/" exact render={() => <Home {...props} page={page} />} />
          <Route path="/bio" component={Bio} />
          <Route path="/events" component={Events} />
          <Route path="/contact" render={() => <Contact {...props} page={page} />} />
        </Switch>

        <Footer />
      </div>

      <PlayerProvider>
        <MiniPlayer />
      </PlayerProvider>
    </Fragment>
  );
};

Content.propTypes = {
  location: PropTypes.object,
};

export default Content;
