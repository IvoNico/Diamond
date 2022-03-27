import './App.css';
import NavBar from './components/NavBar/NavBar.js';
import ListProducts from './components/ListProducts/ListProducts.js';

function App() {
  return (
    <div className="App">
      <div>
        <NavBar/>
      </div>
      <div>
        <ListProducts/>
      </div>
    </div>
  );
}

export default App;
