import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router-dom';
import {Router, Route,hashHistory,Switch} from 'react-router';

class App extends Component {
  render() {
    return (
      <nav class="navbar navbar-expand-lg navbar-light bg-faded">

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item ">
              <Link className ="nav-link" to="/">Home</Link>
            </li>
            <li class="nav-item">
              <Link  className ="nav-link" to="/contacts">Contact</Link>
            </li>
            <li class="nav-item">
              <Link className ="nav-link" to="/todos">Todos</Link>
            </li>

          </ul>
        </div>
      </nav>
    );
  }
}

export default App;
