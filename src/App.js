import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Text extends Component {
  render(){
    return (
      <div style={{color: this.props.color}}>{this.props.value}</div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          YO <code>src/App.js</code> YO
        </p>
        <Text color='thistle' value='Aaron Jackson'></Text>
      </div>
    );
  }
}

export default App;
