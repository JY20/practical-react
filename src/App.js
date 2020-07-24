import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header";
import { Body } from "./components/body";

function App() {
  const add = (a, b) => a + b;
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Header
          hhh
          til="hshsh"
          ti={"sss"}
          num={11}
          myarr={[1, 2, 23]}
          myfun={add}
          ofun={(a, b) => a + b}
          myobj={{
            a: 5,
            b: 2,
          }}
        />
        <a
          className="App-link"
          href="file:///C:/Users/Jimmy/Downloads/Resume 7 4 2020 P .pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
          <Body />
        </a>
      </header>
    </div>
  );
}

export default App;
