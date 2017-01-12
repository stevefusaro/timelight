import React from 'react';
//import ReactDOM from 'react-dom';
import { render } from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'

import App from './App';
import Projections from './modules/Projections'
import Discover from './modules/Discover'


import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './index.css';

render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <Route path="/projections" component={Projections}/>
      <Route path="/discover" component={Discover}/>
    </Route>
  </Router>
), document.getElementById('root'))