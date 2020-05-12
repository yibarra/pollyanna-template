import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

import 'firebase/firestore';
import firebase from 'firebase/app';
import { FirestoreProvider, FirestoreCollection } from '@react-firebase/firestore';
import { config } from '../../config';
import PlayerProvider from '../PlayerProvider';

// main context
const MainContext = createContext({
  pages: {},
  loading: false,
});

// Main provider
const MainProvider = ({ children }) => {
  // state
  const [ loading, setLoading ] = useState(false);

  // render
  return (
    <FirestoreProvider firebase={firebase} {...config}>
      <FirestoreCollection path="pages/" orderByValue={"created_on"}>
        {({ value }) => <MainContext.Provider
            value={{
              pages: value,
              loading,
              setLoading,
            }}>
            <PlayerProvider>
              {children}
            </PlayerProvider>
        </MainContext.Provider>}
      </FirestoreCollection>
    </FirestoreProvider>
  );
};

MainProvider.propTypes = {
  any: PropTypes.any,
};

export { MainProvider, MainContext };
export default MainProvider;