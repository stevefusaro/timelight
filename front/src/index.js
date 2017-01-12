import React from 'react';
//import ReactDOM from 'react-dom';
import { render } from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'

import App from './App';
import Projections from './modules/Projections'
import Discover from './modules/Discover'

global.jQuery = require('jquery');  // TODO improve: http://stackoverflow.com/questions/28393674/jquery-not-define-in-bootstrap-module
//require('bootstrap');

// I think I need to do something with webpack to properly require / install this stuff
// http://stackoverflow.com/questions/37651015/webpack-using-bootstrap-jquery-is-not-defined
// require('./theme-dashboard/v4/dist/toolkit.js');


//import 'bootstrap/dist/css/bootstrap.min.css';
//import './theme-dashboard/v4/dist/toolkit-inverse.css';
import './index.css';

render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <Route path="/projections" component={Projections}/>
      <Route path="/discover" component={Discover}/>
    </Route>
  </Router>
), document.getElementById('root'))