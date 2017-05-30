import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>Welcome to Bonheim Pharmaceuticals™</h1>
          <h2>Working to elevate humanity</h2>
          <div className="Interactive-buttonleft">
            <h1 className ="Cool-Styling">Drugs</h1>
          </div>
          <div className="Interactive-buttonleft">
            <h1 className ="Cool-Styling">Reports</h1>
          </div>
          <div className="Interactive-buttonleft">
            <h1 className ="Cool-Styling">Blog</h1>
          </div>
        </div>
        
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
//onMouseEnter={this."Interacted-button"}