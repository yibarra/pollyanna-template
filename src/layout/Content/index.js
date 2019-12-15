import React from 'react';
import PropTypes from 'prop-types';

import { Route, Switch } from 'react-router-dom';

import BackgroundProvider from '../../providers/BackgroundProvider';

import BackgroundText from '../../components/BackgroundText';
import Header from '../Header';
import Footer from '../Footer';

import Bio from '../../pages/Bio';
import Events from '../../pages/Events';
import Home from '../../pages/Home';

import './content.scss';

// Content
const Content = props => {
  // render
  return (
    <div className="content">
      <BackgroundProvider>
        <BackgroundText />
      </BackgroundProvider>

      <Header location={props.location} />

      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/bio" component={Bio} />
        <Route path="/events" component={Events} />
      </Switch>

      <Footer />
    </div>
  );
};

Content.propTypes = {
  any: PropTypes.any,
};

export default Content;
