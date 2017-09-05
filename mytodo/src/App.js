import React from 'react';
import logo from './logo.svg';
import Todo from './components/todo';
import './App.css';


class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>      
          <br />   
          <br />
          <Todo />
      </div>
    );
  }
}

export default App;
