import React, { Suspense } from 'react';
import PropTypes from 'prop-types';

import { withRouter } from 'react-router-dom';

import MainProvider, { MainContext } from '../../providers/MainProvider';
import PageProvider from '../../providers/PageProvider';
import ThemeProvider from '../../providers/ThemeProvider';

import Content from '../Content';
import Loader from '../../components/Loader';
import Theme from '../../components/Theme';

import './../../styles/main.scss';

// Main
const Main = props => {
  // render
  return (
    <Suspense fallback="loading...">
      <MainProvider>
        <MainContext.Consumer>
          {(context) =>
            <PageProvider location={props.location} {...context}>
              <ThemeProvider {...context}>
                <Theme>
                  <Loader />
                  <Content location={props.location} />
                </Theme>
              </ThemeProvider>
            </PageProvider>}
        </MainContext.Consumer>
      </MainProvider>
    </Suspense>
  )
};

Main.propTypes = {
  any: PropTypes.any,
};

export default withRouter(Main);