import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MyHead from '../common/backhead.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MyHead backurl='/'></MyHead>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          开始吧, 编辑保存重新运行 <code>src/App.js</code>.
        </p>
      </div>
    );
  }
}

export default App;
