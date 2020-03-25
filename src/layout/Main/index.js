import React from 'react';
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
const Main = ({ location }) => {
  // render
  return (
    <MainProvider>
      <MainContext.Consumer>
        {(context) =>
          <PageProvider location={location} {...context}>
            <ThemeProvider {...context}>
              <Theme>
                <Loader loading={context.loading} setLoading={context.setLoading} />
                <Content loading={context.loading} location={location} />
              </Theme>
            </ThemeProvider>
          </PageProvider>}
      </MainContext.Consumer>
    </MainProvider>
  )
};

Main.propTypes = {
  any: PropTypes.any,
};

export default withRouter(Main);
