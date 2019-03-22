import React from 'react';
import ReactDOM from 'react-dom';
import WebFont from "webfontloader";
// load components
import App from './components/App/App';
import * as serviceWorker from './serviceWorker';

// loading fonts
WebFont.load({
  google: {
    families: ['Rubik:300,300i,400,500']
  }
});

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
