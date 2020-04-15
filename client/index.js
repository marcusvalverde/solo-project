// able to use the import keywords due 
import React from 'react'; 
import ReactDom from 'react-dom'; 
import App from './App.jsx'; 
import { Provider } from 'react-redux';
import store from './store.js';

//ReactDom.render(< App />, document.getElementById('app')); // renders react app from components file to the html doc through the id of app 

ReactDom.render(
    // wrap the App in the Provider and pass in the Redux store
    // Provider makes the Redux store available to any nested component
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('app')
  );
