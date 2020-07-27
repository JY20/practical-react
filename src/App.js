import logo from "./logo.svg";
import React, { useState } from "react";
import "./App.css";
import ImageSlider from "./components/imageslider";

function App() {
  const [visible, setVisible] = useState(false);

  const ButtonH = () => {
    console.log("hii");
    setVisible(false);
  };

  return (
    <div className="App">
      <div> huii</div>
      <button onClick={ButtonH}>HIIIII</button>
      {visible ? <ImageSlider /> : <div>JJJJJJJJJJ</div>}
    </div>
  );
}

export default App;
