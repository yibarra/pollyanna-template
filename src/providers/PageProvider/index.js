import React, { createContext, memo, useCallback, useEffect, useState, useContext } from 'react';
import PropTypes from 'prop-types';

import { MainContext } from '../MainProvider';
import ThemeProvider from '../ThemeProvider';

// page context
const PageContext = createContext({
  page: {},
  pages: {},
  setPage: () => {},
});

// Page provider
const PageProvider = ({ children, location }) => {
  // main context
  const mainContext = useContext(MainContext);
  const { pages } = mainContext;

  // page
  const [ page, setPage ] = useState({});

  // set theme
  const setCurrentPage = useCallback(location => {
    if (pages instanceof Object) {
      const currentPage = pages.filter((item) => location === item.slug)[0];

      setPage(currentPage);
    }
  }, [ pages, setPage ]);

  // Handle Location Change
  const handleLocationChange = useCallback(pages => {
    if (!Array.isArray(pages) || !pages.length) return false;

    if (location instanceof Object) {
      const { hash } = location;

      if (!hash) {
        return setCurrentPage('/');
      }

      return setCurrentPage(hash.replace('#', ''));
    }

    return setCurrentPage('/');
  }, [ setCurrentPage, location ]);

  // use effect
  useEffect(() => {
    handleLocationChange(pages);
  }, [ handleLocationChange, pages ]);

  // render
  return (
    <PageContext.Provider value={{ page, pages, setPage }}>
      <ThemeProvider page={page}>{children}</ThemeProvider>
    </PageContext.Provider>
  );
};

PageProvider.propTypes = {
  location: PropTypes.object,
};

export { PageProvider, PageContext };
export default memo(PageProvider);