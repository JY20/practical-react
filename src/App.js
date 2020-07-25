import React from "react";
import logo from "./logo.svg";
import "./App.css";
// import Header from "./components/header";
// import Body, { Body2 } from "./components/body";
// import Count from "./components/counter";
import ImageSlider from "./components/imageslider";

function App() {
  //const add = (a, b) => a + b;

  state = {
    visible: true,
  };
  return (
    // <div className="App">
    //   {
    //     <header className="App-header">
    //       <img src={logo} className="App-logo" alt="logo" />
    //       <Header
    //         hhh
    //         til="hshsh"
    //         ti={"sss"}
    //         num={11}
    //         myarr={[1, 2, 23]}
    //         myfun={add}
    //         ofun={(a, b) => a + b}
    //         myobj={{
    //           a: 5,
    //           b: 2,
    //         }}
    //       />
    //       <br></br>
    //       <Count />
    //       <br></br>
    //       <ImageSlider />
    //       <a
    //         className="App-link"
    //         href="https://drive.google.com/drive/u/0/my-drive"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         Learn React
    //         <Body />
    //       </a>
    //     </header>
    //   }
    // </div>
    <div className="App">
      {this.state.visible ? <ImageSlider /> : null}
      <button
        onClick={() => {
          this.setState({
            visible: false,
          });
        }}
      >
        Hide
      </button>
    </div>
  );
}

export default App;
