import React from 'react';
//import ReactDOM from 'react-dom';
import { render } from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'

import App from './App';
import Projections from './modules/Projections'
import Discover from './modules/Discover'

//import 'bootstrap/dist/css/bootstrap.min.css';
import './theme-dashboard/v4/dist/toolkit-inverse.css';
import './index.css';

global.jQuery = require('jquery');  // TODO improve: http://stackoverflow.com/questions/28393674/jquery-not-define-in-bootstrap-module
require('bootstrap');

//import jQuery from 'jquery'; 
//import $ from 'jquery';
//import './theme-dashboard/v4/dist/toolkit.js';
//import 'bootstrap/dist/js/bootstrap.js';



render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <Route path="/projections" component={Projections}/>
      <Route path="/discover" component={Discover}/>
    </Route>
  </Router>
), document.getElementById('root'))