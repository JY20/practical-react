import React from "react";
import logo from "./logo.svg";
import "./App.css";

class He extends React.Component {
  render() {
    return (
      <p>
        Edit <code>src/App.js</code> and save to reload.
        {this.props.til} {this.props.ti} {this.props.num}
      </p>
    );
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <He til="hshsh" ti={"sss"} num={11} />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
