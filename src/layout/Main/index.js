import React, { Suspense } from 'react';
import PropTypes from 'prop-types';

import { withRouter } from 'react-router-dom';

import MainProvider from '../../providers/MainProvider';
import ThemeProvider from '../../providers/ThemeProvider';

import Content from '../Content';
import Theme from '../../components/Theme';

import './../../styles/main.scss';

// Main
const Main = props => {
  // render
  return (
    <Suspense fallback="loading...">
      <MainProvider>
        <ThemeProvider {...props}>
          <Theme>
            <Content />
          </Theme>
        </ThemeProvider>
      </MainProvider>
    </Suspense>
  )
};

Main.propTypes = {
  any: PropTypes.any,
}

export default withRouter(Main);
