import React, { Component } from 'react';
import { Link } from 'react-router'
//import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">

        <nav className="navbar navbar-default navbar-static-top">
            <div className="container">
              <div className="navbar-header">
                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </button>
                <Link to="/" activeClassName="active" className="navbar-brand" onlyActiveOnIndex={true}>TimeLight</Link>
              </div>
              <div id="navbar" className="collapse navbar-collapse">
                <ul className="nav navbar-nav">
                  <li><Link to="/projections" activeClassName="active">Projections</Link></li>
                  <li><Link to="/discover" activeClassName="active">Discover</Link></li>
                  <li><Link to="/graph" activeClassName="active">Graph</Link></li>
                </ul>
              </div>
            </div>
          </nav>

        <div className="container">
            {this.props.children}
        </div>

      </div>
    );
  }
}

export default App;
