import React, { memo } from 'react';
import PropTypes from 'prop-types';

import { withRouter } from 'react-router-dom';

import AudiosProvider from '../../providers/AudiosProvider';
import MainProvider from '../../providers/MainProvider';
import PageProvider from '../../providers/PageProvider';

import Content from '../Content';

import Background from '../../components/Background';
import Loader from '../../components/Loader';
import Theme from '../../components/Theme';

import './../../styles/main.scss';

// Main
const Main = ({ location }) => {
  // render
  return (
    <MainProvider>
      <PageProvider location={location}>
        <Theme>
          <Loader />
          <Background items={[ '/images/bg-bio.jpg', '/images/bg-contact.jpg', '/images/bg-visualizer.jpg' ]} location={location} />

          <AudiosProvider>
            <Content location={location} />
          </AudiosProvider>
        </Theme>
      </PageProvider>
    </MainProvider>)
};

Main.propTypes = {
  any: PropTypes.any,
};

export default memo(withRouter(Main));
