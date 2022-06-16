import { HashRouter, Routes, Route } from 'react-router-dom';
import './styles/root.css';
import './styles/App.css';
import Login from './components/Login';
import Pokedex from './components/Pokedex';
import PokemonInfo from './components/PokemonInfo';
import ProtectedRoutes from './components/ProtectedRoutes';
import Pokeball from './components/Pokeball';


function App() {

  return (
    <HashRouter>
      <div className="App">
      <Pokeball/>
        <Routes>
          <Route path='/' element={ <Login/> } />
          <Route element={<ProtectedRoutes/>}>
              <Route path='/pokedex' element={ <Pokedex/> } />
              <Route path='/pokedex/:id' element={ <PokemonInfo/> } />
          </Route>
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
