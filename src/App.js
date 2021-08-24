import React, { Component } from 'react';
import './App.css';
import { Films } from './films'


class App extends Component {
  // State (inside of the class)
  // Props (called in the component)
  render(){
    return (
      <div className="App">
        <Films />
      </div>
    );
  }
}

export default App;
