import './App.css';
import logo from './image5.jpg';
import Count from "./Count";
import Slideshow from './Slideshow';
import Carrousel  from "./Carrousel";

function App() {


  return (
    <div className="App">
      <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1>Estamos Contando</h1>
      {/* <Carrousel /> */}
      {/* <Slideshow  images={images}/> */}
      <Count />
      </header>
    </div>
  );
}

export default App;
