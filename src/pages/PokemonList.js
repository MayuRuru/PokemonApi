export default function PokemonList({ pokemon }) {
  return (
    <div>
      {pokemon.map((poke) => (
        <div key={poke}>{poke}</div>
      ))}
    </div>
  );
}
