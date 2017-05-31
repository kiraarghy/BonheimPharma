import React, { Component } from 'react';
import './App.css';
import Drugs from './Drugs.js'
import Reports from './Reports.js'
import Blog from './Blog.js';
import Events from './Events.js'

class App extends Component {

constructor(props) {
  super(props);
    this.state = {
      selectedTab: null
    };
}




  render() {

    var elementToShow = null;

    switch (this.state.selectedTab) {
      case 'Drugs':
            elementToShow = <Drugs />;
            break;
      case 'Reports':
            elementToShow = <Reports />;
            break;
      case 'Blog':
            elementToShow = <Blog />;
            break;
      case 'Events':
            elementToShow = <Events />;
            break;

    }

    var onClickGenerator = (Tab) => {
      return () => {this.setState({selectedTab: Tab})}
    }

    return (
      <div className="App">
        <div className="App-header">
          <h1>Welcome to Bonheim Pharmaceuticals™</h1>
          <h2>Working to elevate humanity</h2>
          <div className ="container-buttons">
            <div className="Interactive-buttonleft"
              onClick={onClickGenerator('Drugs')}>
              <h1 className ="Cool-Styling">Drugs</h1>
            </div>
            <div className="Interactive-buttonleft"
              onClick={onClickGenerator('Reports')}>
              <h1 className ="Cool-Styling">Reports</h1>
            </div>
            <div className="Interactive-buttonleft"
              onClick={onClickGenerator('Blog')}>
              <h1 className ="Cool-Styling">Blog</h1>
            </div>
            <div className="Interactive-buttonleft"
              onClick={onClickGenerator('Events')}>
              <h1 className ="Cool-Styling">Events</h1>
            </div>
          </div>
        </div>
        <div className="Dynamic-Elements-Container">
          {elementToShow}
        </div>

        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;

//{this.state.drugsIsHidden ? null : <Drugs />}
//onMouseEnter={this."Interacted-button"}
