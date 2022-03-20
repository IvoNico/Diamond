import './App.css';
import NavBar from './components/NavBar/NavBar.js';
import ListProducts from './components/ListProducts/ListProducts.js';

function App() {
  return (
    <body className="App">
      <header>
        <NavBar/>
      </header>
      <main>
        <ListProducts/>
      </main>
    </body>
  );
}

export default App;
