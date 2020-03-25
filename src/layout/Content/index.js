import React, { useContext, Fragment } from 'react';
import PropTypes from 'prop-types';

import useMobileDetect from 'use-mobile-detect-hook';

import { PageContext } from '../../providers/PageProvider';
import PlayerProvider from '../../providers/PlayerProvider';

import Header from '../Header';
import Footer from '../Footer';

import Bio from '../../pages/Bio';
import Contact from '../../pages/Contact';
import Home from '../../pages/Home';
import MiniPlayer from '../../components/MiniPlayer';

import './content.scss';

// Content
const Content = props => {
  // detect mobile
  const detectMobile = useMobileDetect();

  // page context
  const pageContext = useContext(PageContext);
  const { page, pages } = pageContext;

  // types
  const types = item => {
    if (item instanceof Object === false) return false;

    switch (item.type) {
      case 'bio':
        return <Bio {...props} loading={props.loading} page={item} mobile={detectMobile}  />;
      case 'contact':
        return <Contact {...props} loading={props.loading} page={item} mobile={detectMobile} />;
      case 'home':
        default:
          return <Home {...props} loading={props.loading} page={item} mobile={detectMobile} />;
    }
  };

  // render
  return (
    <Fragment>
      <div className="content" data-loading={props.loading}>
        <Header location={props.location} />
        
        {pages && pages.map((item, index) =>
          <section className="page-current" data-active={page === item} key={index}>
            {types(item)}
          </section>)}
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
