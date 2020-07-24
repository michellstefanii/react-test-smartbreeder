import React from 'react';
import { Provider } from 'react-redux'

import store from './store/storeConfig'
import Routes from './routes'

import './global.css'

function App() {
  return (
    <Provider store={store}>
        <Routes />
    </Provider>
  );
}

export default App;