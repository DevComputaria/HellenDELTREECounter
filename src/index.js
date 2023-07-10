import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import Count from "./Count";
import Carrousel  from "./Carrousel";

function App() {
  return (
    <div className="App">
      <h1>Countdown Timer</h1>
      <Carrousel />
      <Count />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));