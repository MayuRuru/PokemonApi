import react from "react";
import PokemonList from "./pages/PokemonList";
import {useState} from react;

function App() {

  const [pokemon, setPokemon] = useState([])

  return <PokemonList pokemon={pokemon}/>;
}

export default App;
