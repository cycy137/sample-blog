import React, { Component } from 'react';

import { Provider } from 'react-redux';
import './css/index.css';
import './css/layout/layout.css';
import Index from './container/index';

import './App.css';


import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './reducers/index';

const store = createStore(rootReducer,  applyMiddleware(thunkMiddleware, ),);
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Index />
      </Provider>
    );
  }
}

export default App;
