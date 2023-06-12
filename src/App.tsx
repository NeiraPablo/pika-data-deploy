import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavigationBar from './components/NavigationBar/NavigationBar'; // Asegúrate de que la ruta de importación sea correcta
import Pokedex from './components/Pokedex/Pokedex';
import Items from './components/Items/Items';
import Moves from './components/Moves/Moves';
import Abilities from './components/Abilities/Abilities';
import 'bootstrap/dist/css/bootstrap.min.css';


const App: React.FC = () => {

  useEffect(() => {
    document.title = "PikaData";
  }, []);

  return (
    <Router>
      <div className="App">
        <NavigationBar />
        <Routes>
          <Route path="/"  element={<Pokedex />} >
          </Route>
          <Route path="/items"  element={<Items />}  >
          </Route>
          <Route path="/moves"  element={<Moves />} >
          </Route>
          <Route path="/abilities"  element={<Abilities />} >
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
