import React, { Component } from 'react';

import MenuExampleTabularOnLeft  from './components/NavbarHeader'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <MenuExampleTabularOnLeft />
      </div>
    );
  }
}

export default App;
