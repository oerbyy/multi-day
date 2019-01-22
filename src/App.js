import React, {Component} from 'react';
import './App.css';
import MultiDay from './components/MultiDay';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header" />
        <div className="container">
          <div />
          <div className="subcontainer">
            <MultiDay />
          </div>
          <div />
        </div>
      </div>
    );
  }
}

export default App;
