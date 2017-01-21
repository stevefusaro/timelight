import React from 'react';
//import ReactDOM from 'react-dom';
import { render } from 'react-dom'
import { Router, Route, hashHistory, IndexRoute } from 'react-router'

import App from './App';

import Home from './modules/Home'
import Projections from './modules/Projections'
import Discover from './modules/Discover'
import Graph from './modules/Graph'

import GraphLabel from './modules/GraphLabel'
import GraphLabelList from './modules/GraphLabelList'

//global.jQuery = require('jquery');  // TODO improve: http://stackoverflow.com/questions/28393674/jquery-not-define-in-bootstrap-module
//require('bootstrap');

// I think I need to do something with webpack to properly require / install this stuff
// http://stackoverflow.com/questions/37651015/webpack-using-bootstrap-jquery-is-not-defined
// require('./theme-dashboard/v4/dist/toolkit.js');
    

//import './theme-dashboard/v3/dist/toolkit-inverse.css';
import './index.css'; // Tell Webpack that index.js uses these styles


render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>

      <IndexRoute component={Home}/>

      <Route path="/projections" component={Projections}/>
      <Route path="/discover" component={Discover}/>

      <Route path="/graph" component={Graph}/>
      <Route path="/graph/label" component={GraphLabelList}/>
      <Route path="/graph/label/:labelName" component={GraphLabel}/>

    </Route>
  </Router>
), document.getElementById('root'))