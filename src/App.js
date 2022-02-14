import PokemonList from "./pages/PokemonList";
import PassPage from "./components/PassPage";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);

  const [actualPage, setActualPage] = useState(
    "https://pokeapi.co/api/v2/pokemon"
  );
  const [nextPage, setNextPage] = useState();
  const [previousPage, setPreviousPage] = useState();

  useEffect(() => {
    setLoading(false);
    axios.get("https://pokeapi.co/api/v2/pokemon").then((res) => {
      setPokemon(res.data.results.map((poke) => poke.name));
      setNextPage(res.data.next);
      console.log(res.data.next);
      setPreviousPage(res.data.previous);
    });
  }, [actualPage]);

  function goNext() {
    setActualPage(nextPage);
  }

  function goPrevious() {
    setActualPage(previousPage);
  }

  if (loading) return "Loading...";

  return (
    <>
      <PokemonList pokemon={pokemon} />
      <PassPage
        goNext={goNext ? goNext : null}
        goPrevious={goPrevious ? goPrevious : null}
      />
    </>
  );
}

export default App;
