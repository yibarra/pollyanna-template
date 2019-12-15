import React, { Suspense } from 'react';
import PropTypes from 'prop-types';

import { withRouter } from 'react-router-dom';

import MainProvider, { MainContext } from '../../providers/MainProvider';
import ThemeProvider from '../../providers/ThemeProvider';

import Content from '../Content';
import Loader from '../../components/Loader';
import Theme from '../../components/Theme';

import './../../styles/main.scss';

// Main
const Main = () => {
  // render
  return (
    <Suspense fallback="loading...">
      <MainProvider>
        <MainContext.Consumer>
          {(context) =>
            <ThemeProvider {...context}>
              <Theme>
                <Loader />
                <Content />
              </Theme>
            </ThemeProvider>}
        </MainContext.Consumer>
      </MainProvider>
    </Suspense>
  )
};

Main.propTypes = {
  any: PropTypes.any,
};

export default withRouter(Main);
