import './App.css';
import MainImage from './MainImage';
import Count from "./Count";
import AbstractBackground from './AbstractBackground'; // Import the new component

function App() {


  return (
    <div className="App">
      <AbstractBackground /> {/* Add the background component */}
      <header className="App-header">
      <MainImage />
      <h1>Estamos Contando</h1>
      <Count />
      </header>
    </div>
  );
}

export default App;
