import react from "react";

function PokemonList({ pokemon }) {
  return (
    <div>
      {pokemon.map((poke) => (
        <div key={poke}>{poke}</div>
      ))}
    </div>
  );
}

export default PokemonList;
