import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '../src/components/App/App'
import reportWebVitals from './reportWebVitals';
import { configureStore} from '@reduxjs/toolkit';
import {Provider} from "react-redux"; // this is what we use to determine which
//components should have access to the store.  In theory should be all of them. 
// so you can access this data everywhere in your application. 
import userReducer from './features/user'
import themeReducer from './features/theme'
import sampleReducer from './features/sample'

const store = configureStore({
  //we're gonna pass a collection of reducers. 
  //one of the core hooks of react useReducer uses the same notation
  reducer: {
    user: userReducer,
    theme: themeReducer,
    sample: sampleReducer,

  } 
  // a reducer is a function that takes in some info about the current state (prev. value of the state)
  // it also takes in some kind of action you want to apply to the current state
  //  it returns the new value of that state

  //  we're gonna have reducers for all the different states within our app
  // that's who we'll be able to manage and change the states of our app throughout the entire app. 
})
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}> 
    {/* ^ this is how we tell our Provider that this store we've defined is what we want to use */}
      <App />
    </Provider>
  </React.StrictMode>
);

// we've created a store
// we've created a provider and wrapped it around App


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
