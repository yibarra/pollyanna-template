import React, { createContext } from 'react';
import PropTypes from 'prop-types';

import 'firebase/firestore';
import firebase from 'firebase/app';
import { FirestoreProvider, FirestoreCollection } from '@react-firebase/firestore';
import { config } from '../../config';

// main context
const MainContext = createContext({
  pages: {},
});

// Main provider
const MainProvider = props => {
  // render
  return (
    <FirestoreProvider firebase={firebase} {...config}>
      <FirestoreCollection path="pages/" orderByValue={"created_on"}>
        {({ value }) => {
          return <MainContext.Provider
            value={{
              pages: value,
            }}>
            {props.children}
          </MainContext.Provider>;
        }}
      </FirestoreCollection>
    </FirestoreProvider>
  );
};

MainProvider.propTypes = {
  any: PropTypes.any,
};

export { MainProvider, MainContext };
export default MainProvider;