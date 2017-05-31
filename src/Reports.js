import React, { Component } from 'react';
import './App.css';

class Reports extends Component {
  render(){
    return(
      <div>
        <h1>Reports Placeholder</h1>
        <form>
          <label>
            Name:
              <input type="text" name="name" />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

export default Reports;
