import React, { Component } from 'react';
import logo from './logo.svg';
import HomePage from './components/HomePage';
import Nav from './components/Nav';
import './App.css';
import FaqPage from './components/FaqPage';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Nav />
      <HomePage />
      </div>
    );
  }
}

export default App;

// <header className="App-header">
// <img src={logo} className="App-logo" alt="logo" />
// <HomeContainer />
// <p>
//   Edit <code>src/App.js</code> and save to reload.
// </p>
// <a
//   className="App-link"
//   href="https://reactjs.org"
//   target="_blank"
//   rel="noopener noreferrer"
// >
//   Learn React
// </a>
// </header>
