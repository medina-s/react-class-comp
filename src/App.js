import React, { Component } from 'react';
import './App.css';
import { Films } from './films'


class App extends Component {
  // State (inside of the class)
  // Props (called in the component)
  render(){
    return (
      <div className="App">
        <Films favNumber={42} fname={"Justin"} />
      </div>
    );
  }
}

export default App;
