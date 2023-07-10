import React from "react";
import Clock from "./Clock";

const App = () => {
  let deadline = "July 5, 2023 15:30:00";

  return (
    <div className="App">
      <Clock deadline={deadline} />
    </div>
  );
};

export default App;